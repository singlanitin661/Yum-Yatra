import React, { useEffect, useState } from "react";
import ResCard, { withPromoted } from "./ResCard";
import Shimmer from "./Shimmer";
import { swiggy_api_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

function filterData(searchText, restaurants) {
  const resFilterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return resFilterData;
}

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const PromotedComp = withPromoted(ResCard);

  useEffect(() => {
    fetchData();
  }, []);

  const searchData = (searchText, listOfRestaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, listOfRestaurants);
      setFilteredRestaurants(filteredData);
    } else {
      setFilteredRestaurants(listOfRestaurants);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(swiggy_api_URL);
      const data = await response.json();

      const resData =
        data?.data?.cards
          ?.map(
            (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
          )
          .find((restaurants) => restaurants !== undefined) || [];

      setFilteredRestaurants(resData);
      setListOfRestaurants(resData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (onlineStatus === false) return <h1>Looks like your internet is off</h1>;
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex m-4 mx-24 mb-12">
        <div className="flex-grow">
          <input
            type="text"
            className="p-2 px-8 border border-gray-300 rounded-md mr-2"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search..."
          />
          <button
            onClick={() => {
              searchData(searchText, listOfRestaurants);
            }}
            className="bg-blue-500 text-white py-2 px-6 rounded-md"
          >
            Search
          </button>
        </div>
        <button
          className="bg-green-500 text-white py-2 px-6 rounded-md "
          onClick={() => {
            setFilteredRestaurants(
              filteredRestaurants.filter(
                (res) => res?.info?.avgRatingString > 4
              )
            );
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="flex flex-wrap justify-center items-center mx-8">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurant/" + restaurant?.info?.id}
          >
            <div className="mx-4 hover:scale-95">
              {restaurant?.info?.veg ? (
                <PromotedComp {...restaurant?.info} />
              ) : (
                <div >
                <ResCard {...restaurant?.info} />
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

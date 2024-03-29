import React, { useEffect, useState } from "react";
import ResCard, { withPromoted } from "./ResCard";
import Shimmer from "./Shimmer";
import { swiggy_api_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Footer from "./Footer";

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
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

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
    <div className="">
      <div className="body min-h-[69.5vh]">
        <div className="flex m-4 mx-24 mb-12">
          <div className="flex-grow">
            <input
              type="text"
              className="p-2 w-72 px-8 border text-lg shadow-lg border-[#e2e2e6] text-[#424449] rounded-3xl ml-8 mr-2"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search..."
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                searchData(searchText, listOfRestaurants);
              }}
              className="border text-lg shadow-lg border-[#e2e2e6] text-[#424449] py-2 px-6 rounded-3xl"
            >
              Search
            </button>
          </div>
          <button
            className="border text-lg shadow-lg border-[#e2e2e6] text-[#424449] py-2 px-6 rounded-3xl "
            onClick={() => {
              setSearchText("")
              setFilteredRestaurants(listOfRestaurants);
            }}
          >
            All Restaurant
          </button>
          <button
            className="border text-lg shadow-lg border-[#e2e2e6] text-[#424449] py-2 px-6 rounded-3xl mx-2"
            onClick={() => {
              setSearchText("")
              setFilteredRestaurants(
                filteredRestaurants.filter(
                  (restaurant) => restaurant?.info?.veg
                )
              );
            }}
          >
            Pure Veg
          </button>
          <button
            className="border text-lg shadow-lg border-[#e2e2e6] text-[#424449] py-2 px-6 rounded-3xl mr-8"
            onClick={() => {
              setSearchText("")
              setFilteredRestaurants(
                filteredRestaurants.filter(
                  (res) => res?.info?.avgRatingString > 4
                )
              );
            }}
          >
            Rating 4.0+
          </button>
        </div>
        <div className="flex flex-wrap justify-center items-center mx-8">
          {filteredRestaurants.length === 0 ? (
            <p className="text-3xl text-gray-500">
              Nothing to display. Try Changing the filters...
            </p>
          ) : (
            filteredRestaurants.map((restaurant) => (
              <Link
                key={restaurant?.info?.id}
                to={"/restaurant/" + restaurant?.info?.id}
              >
                <div className="mx-4 hover:scale-95">
                  {restaurant?.info?.veg ? (
                    <PromotedComp {...restaurant?.info} />
                  ) : (
                    <div>
                      <ResCard {...restaurant?.info} />
                    </div>
                  )}
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
      <Footer className="" />
    </div>
  );
};

export default Body;

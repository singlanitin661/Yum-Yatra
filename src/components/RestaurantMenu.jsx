import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import StarIcon from "@mui/icons-material/Star";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, menuItems] = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  const handleShowIndexClick = (index) => {
    if (showIndex === index) setShowIndex(null);
    else setShowIndex(index);
  };

  if (restaurant === null) return <Shimmer />;
  return (
    <div className="">
      <div className="w-7/12 mx-auto px-5 flex flex-row justify-between">
        <div className="">
          <h1 className="font-bold text-2xl py-2">{restaurant?.name}</h1>
          {console.log(restaurant)}
          <h4 className="text-gray-500">{restaurant?.cuisines.join(" ,")}</h4>

          <h4 className="text-gray-500 pb-4">{restaurant?.locality}</h4>

          <div className="flex flex-row mb-4 gap-3">
            <p className="w-36 border py-1  text-md shadow-sm border-[#e2e2e6] text-[#424449] px-6 rounded-3xl ">
              {restaurant?.costForTwoMessage}
            </p>
            {restaurant?.costForTwoMessage && (
              <p className="w-44 border py-1 text-md shadow-sm border-[#e2e2e6] text-[#424449] px-6 rounded-3xl ">
                {" "}
                🥦 PURE VEG
              </p>
            )}
          </div>
        </div>
        <div className="border text-sm h-16 mt-8 mr-2 font-bold px-4 rounded-md text-center py-2 shadow-md border-[#e2e2e6] text-[#424449]">
          <div className="flex fles-row pl-5">
            <StarIcon className="text-[#589971] pb-1" />
            <h1 className="text-[#589971]">{restaurant?.avgRating}</h1>
          </div>
          <hr className="my-1" />
          <h1 className="">{restaurant?.totalRatingsString}</h1>
        </div>
      </div>
      <hr className="border-t border-dashed border-gray-300 mx-auto w-7/12" />
      <ul>
        {menuItems.length === 0 && (
          <h1 className="text-2xl py-8 text-gray-500 text-center">
            Currently facing some issues from Restaurant Side. Meanwhile you can
            order from other restaurants...
          </h1>
        )}
        {menuItems.length !== 0 &&
          menuItems.map((categories, index) => {
            return (
              <div key={categories?.title}>
                <RestaurantCategory
                  data={categories}
                  setShowIndex={() => handleShowIndexClick(index)}
                  showItems={index === showIndex && true}
                />
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, menuItems] = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  const handleShowIndexClick=(index)=>{
    if(showIndex === index) setShowIndex(null)
    else setShowIndex(index);
  }

  if (restaurant === null) return <Shimmer />;
  return (
    <div className="text-center">
      <h1 className="font-bold text-4xl">{restaurant?.name}</h1>
      <h4>
        {restaurant?.cuisines.join(" ,")} - {restaurant?.costForTwoMessage}
      </h4>
      <h2>Menu</h2>
      <ul>
        {menuItems.map((categories, index) => {
          return (
            <div key={categories?.title}>
              <RestaurantCategory
                data={categories}
                setShowIndex={()=>handleShowIndexClick(index)}
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

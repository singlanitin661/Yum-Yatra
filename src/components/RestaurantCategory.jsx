import React from "react";
import ItemCard from "./ItemCard";

const RestaurantCategory = ({ data, setShowIndex, showItems }) => {
  const { title, itemCards } = data;
  const handleItemClick = () => {
    setShowIndex();
  };
  // console.log(itemCards)
  return (
    <>
      <div className="w-7/12 mx-auto my-4 bg-gray-200 shadow-lg rounded-md py-4 px-12">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleItemClick}
        >
          <span className="font-bold text-lg">
            {title} ({data.itemCards.length})
          </span>
          <span className="text-2xl">⬇️</span>
        </div>
      </div>
      <div>{showItems && <ItemCard items={{data:itemCards}} />}</div>
    </>
  );
};

export default RestaurantCategory;

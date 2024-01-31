import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemCard = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items?.data?.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="w-6/12 mx-auto px-2 pb-2 mb-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12 mx-auto">
            <div className="py-2 mx-auto">
              <span className="text-xl">{item?.card?.info?.name}</span>
              <br />
              <span>
                ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm text-[#9ea0a8] mx-auto">
              {item?.card?.info?.description}
            </p>
          </div>
          <div className="w-3/12 p-4 flex flex-col">
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="w-44 h-32  rounded-xl"
            />
            <button
              className="px-2 py-1 w-16 mx-auto rounded-lg -mt-5 bg-black text-white text-md shadow-lg"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCard;

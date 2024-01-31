import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const CartItemButton = ({count, item }) => {
  const [currCount, setCurrCount] = useState(count);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    setCurrCount((prevCount) => prevCount + 1);
    dispatch(addItem(item));
  }; 
  const handleDelItem = (item) => {
    setCurrCount((prevCount) => prevCount - 1);
    dispatch(removeItem(item));
  };
  return (
    <div className="flex flex-row w-20 mx-auto items-center justify-center bg-white  px-2 -mt-5 border text-lg shadow-lg border-[#e2e2e6] text-[#424449] rounded-3xl">
      {currCount > 0 && (
        <button
          onClick={() => {
            handleDelItem(item);
          }}
        >
          -
        </button>
      )}
      <button className="py-1 w-16 mx-auto">{currCount > 0 ? currCount : "Add"}</button>
      <button
        onClick={() => {
          handleAddItem(item);
        }}
      >
        +
      </button>
    </div>
  );
};

export default CartItemButton;

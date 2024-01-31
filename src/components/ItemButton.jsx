import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemButton = ({ item }) => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    setCount((prevCount) => prevCount + 1);
    dispatch(addItem(item));
  };
  const handleDelItem = (item) => {
    setCount((prevCount) => prevCount - 1);
    dispatch(removeItem(item));
  };
  return (
    <div className="flex flex-row w-20 mx-auto items-center justify-center bg-white  px-2 -mt-5 border text-lg shadow-lg border-[#e2e2e6] text-[#424449] rounded-3xl">
      {count > 0 && (
        <button
          onClick={() => {
            handleDelItem(item);
          }}
        >
          -
        </button>
      )}
      <button className="py-1 w-16 mx-auto">
        {count > 0 ? count : "Add"}
      </button>
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

export default ItemButton;

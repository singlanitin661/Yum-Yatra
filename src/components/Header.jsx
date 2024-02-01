import React, { useState } from "react";
import LOGO from "./logo.png";

import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default Header = () => {
  const [btn, setBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between shadow-md mb-8 z-12 bg-white">
      <div className="p-4 cursor-pointer hover:scale-110 duration-200">
        <Link to="/">
          <img className="w-16" src={LOGO} />
        </Link>
      </div>
      <div className="m-auto mr-3 ">
        <ul className="flex justify-between gap-5 text-xl">
          {/* <li className="">Online Status : {onlineStatus ? "✅" : "🟥" }</li> */}
          <li className="">
            <Link to="/">Home</Link>
          </li>
          <li className="">
            <Link to="/about">About</Link>
          </li>
          <li className="">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="">
            <Link to="/cart">
              <ShoppingCartIcon />{" "}
              {cartItems.length > 0 && (
                <sup className="text-lg">{cartItems.length}</sup>
              )}
            </Link>
          </li>
          <button
            className="w-16 mr-8"
            onClick={() => {
              btn == "Login" ? setBtn("Logout") : setBtn("Login");
            }}
          >
            {btn}
          </button>
        </ul>
      </div>
    </div>
  );
};

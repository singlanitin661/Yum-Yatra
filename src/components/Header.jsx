import React, { useState} from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default Header = () => {
  const [btn, setBtn] = useState("Login");
  const onlineStatus = useOnlineStatus() ;
  const cartItems = useSelector((store) => store.cart.items) ;

  return (
    <div className="flex justify-between sticky top-0 shadow-md mb-8 z-12 bg-white">
      <div className="p-4 cursor-pointer hover:scale-105 duration-200">
        <img className="w-20 rounded-lg" src={LOGO_URL} />
      </div>
      <div className="m-auto mr-3 ">
        <ul className="flex justify-between gap-5 text-xl">
          {/* <li className="">Online Status : {onlineStatus ? "✅" : "🟥" }</li> */}
          <li className=""><Link to="/">Home</Link></li>
          <li className=""><Link to="/about">About</Link></li>
          <li className=""><Link to="/contact">Contact</Link></li>
          <li className=""><Link to="/cart"> 
          <ShoppingCartIcon/> { cartItems.length >0 && <sup className="text-lg">{cartItems.length}</sup>}</Link></li>
           <button
           className="w-16 mr-8"
            onClick={() => {
              btn == "Login" ? setBtn("Logout") : setBtn("Login");
            }}
          >
            {btn }
          </button>
        </ul>
      </div>
    </div>
  );
};
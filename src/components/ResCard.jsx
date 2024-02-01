import React from "react";
import { CDN_URL } from "../utils/constants";
import veg_logo from "./veg_logo.png";
import StarIcon from '@mui/icons-material/Star';

const ResCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  return (
    <div>
      <div className="flex flex-col items-center py-5">
        <div className="">
          <img
            className="h-44 w-72 object-cover rounded-3xl shadow-md mb-3"
            alt="res-logo"
            src={CDN_URL + cloudinaryImageId}
          />
        </div>
        <p className="text-2xl font-bold text-gray-700">
          {name.length > 23 ? name.substring(0, 19) + "..." : name}
        </p>
        <p className="text-lg text-gray-600 mb-2">
          {Array.isArray(cuisines)
            ? cuisines.join(", ").length > 26
              ? cuisines.join(", ").substring(0, 23) + "..."
              : cuisines.join(", ")
            : cuisines}
        </p>
        <p className="text-gray-700">{areaName}</p>
        <div className="flex items-center mt-2">
          <div className={`flex flex-row items-center justify-center px-2 py-1 rounded-lg ${
              avgRatingString < 4 ? "bg-gray-400" : "bg-[#0c7e0c]"
            } text-white`}>
          
            <span className=""><StarIcon/></span>
            <span className="font-bold">{avgRatingString}</span>
          </div>
          <p className="ml-2">{sla?.lastMileTravelString ?? "2.0 km"}</p>
          <span className="mx-1">.</span>
          <p>{costForTwo ?? "₹200 for two"}</p>
        </div>
      </div>
    </div>
  );
};

export const withPromoted = (ResCard) => {
  return (props) => {
    return (
      <div className="flex items-start">
        <img src={veg_logo} className="absolute h-6 mt-6 ml-3 z-10" />
        <div className="">
          <ResCard {...props} />
        </div>
      </div>
    );
  };
};

export default ResCard;

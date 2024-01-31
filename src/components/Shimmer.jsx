import React from "react";
import "./Shimmer.modules.css"

const Shimmer = () => {
  return (
    <div className="res-container mt-12 pt-16">
      {new Array(12).fill(0).map((element, index) => {
        return (
          <div key={index} className="m-5">
            <div className="h-44 w-72 rounded-3xl shadow-md mb-3 bg-[#e0e0e0] animate-shimmer" />
            <div className="h-6 w-60 m-auto mb-3 rounded-3xl bg-gradient-shimmer animate-shimmer"></div>
            <div className="h-6 w-60 m-auto rounded-3xl bg-gradient-shimmer animate-shimmer"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Shimmer;

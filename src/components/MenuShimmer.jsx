// import React from "react";

// const MenuShimmer = () => {
//   return (
//     <div>
//       <div className="w-7/12 mx-auto px-5 flex flex-row justify-between">
//         <div className="my-4">
//           <h1 className="font-bold text-2xl py-4 my-2 h-5 text-gray-500 pb-4 bg-gray-300 rounded-md"></h1>
          

//           <div className="flex flex-row mb-4 gap-3">
//             <p className="h-8 w-44 border py-1 text-md shadow-sm border-[#e2e2e6] bg-gray-500 px-6 rounded-3xl "></p>
//             <p className="h-8 w-44 border py-1 text-md shadow-sm border-[#e2e2e6] bg-gray-500 px-6 rounded-3xl "></p>
//           </div>
//         </div>
//         <div className="border w-24 bg-gray-400 text-sm h-16 mt-8 mr-2 font-bold px-4 rounded-md text-center py-2 shadow-md border-[#e2e2e6] text-[#424449]"></div>
//       </div>

//       <hr className="border-t border-dashed border-gray-300 mx-auto w-7/12" />
//       {Array(6)
//         .fill("")
//         .map((_, index) => (
//           <div className="w-7/12 mx-auto my-4 bg-gray-200 shadow-lg rounded-md py-5 px-12"></div>
//         ))}
//     </div>
//   );
// };

// export default MenuShimmer;

import React from "react";
import "./MenuShimmer.modules.css"

const MenuShimmer = () => {
  return (
    <div>
      <div className="w-7/12 mx-auto px-5 flex flex-row justify-between">
        <div className="my-4">
          <h1 className="font-bold text-2xl py-4 my-2 h-5 text-gray-500 pb-4 bg-gray-300 rounded-md animate-shimmer"></h1>
          <div className="flex flex-row mb-4 gap-3">
            <p className="h-8 w-44 border py-1 text-md shadow-sm border-[#e2e2e6] bg-gray-500 px-6 rounded-3xl animate-shimmer"></p>
            <p className="h-8 w-44 border py-1 text-md shadow-sm border-[#e2e2e6] bg-gray-500 px-6 rounded-3xl animate-shimmer"></p>
          </div>
        </div>
        <div className="border w-24 bg-gray-400 text-sm h-16 mt-8 mr-2 font-bold px-4 rounded-md text-center py-2 shadow-md border-[#e2e2e6] animate-shimmer"></div>
      </div>

      <hr className="border-t border-dashed border-gray-300 mx-auto w-7/12" />
      {Array(6)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-7/12 mx-auto my-4 bg-gray-200 shadow-lg rounded-md py-5 px-12 animate-shimmer"
          ></div>
        ))}
    </div>
  );
};

export default MenuShimmer;

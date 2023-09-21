import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Widgets = () => {
  return (
    <div className="xl:w-[350px] hidden lg:inline ml-8 space-y-5 bg-red-300">
      <div className="w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50">
        <div className="flex items-center p-3 rounded-full relative">
          <AiOutlineSearch
            className="h-5 z-50 text-gray-500
           "
          />
          <input
            type="text"
            placeholder="Search Twitter"
            className="absolute inset-0 rounded-full pl-11
            border-gray-500 text-gray-700 focus:shadow-lg
            focus:bg-white bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Widgets;
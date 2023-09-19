import Image from "next/image";
import React from "react";
import { BiWinkSmile } from "react-icons/bi";
import { BsCardImage } from "react-icons/bs";
import { IoSparklesSharp } from "react-icons/io5";
import Posts from "./Posts";

const Feed = () => {
  return (
    <div>
      <div
        className="flex justify-between p-3 items-center
      border-b-2 border-gray-200 sticky top-0 z-50 bg-white"
      >
        <h2 className="font-bold sm:text-xl text-lg cursor-pointer">Home</h2>
        <span className="hoverEffect">
          <IoSparklesSharp />
        </span>
      </div>
      <div className="my-5 border-b-2 border-gray-200 ">
        <div className="flex space-x-5 p-2  ">
          <Image
            className="rounded-full h-12 w-12"
            src="https://i.pravatar.cc/300"
            width={60}
            height={10}
          />
          <textarea
            className="flex-1 border-l-0 border-r-0 border-t-0 border-b-2 focus:ring-0 text-lg tracking-wide
            min-h-[50px]   border-gray-200 outline-none"
            name="tweet"
            id="tweet"
            cols="30"
            rows="3"
            placeholder="What's happening?"
          />
        </div>
        <div
          className="flex items-center justify-between 
        p-3 ml-16"
        >
          <div className="flex space-x-2 ">
            <BsCardImage className="text-2xl text-blue-500 cursor-pointer hover:brightness-110 " />
            <BiWinkSmile className="text-2xl text-blue-500 cursor-pointer hover:brightness-110" />
          </div>
          <button
            className="bg-blue-500 text-white rounded-3xl p-2 px-4 
      font-semibold hover:bg-blue-400 transition-all duration-200 
      ease-in-out hover:brightness-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Tweet
          </button>
        </div>
      </div>
      <div>
        <Posts />
        <Posts />
        <Posts />
      </div>
    </div>
  );
};

export default Feed;

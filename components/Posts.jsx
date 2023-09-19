import Image from "next/image";
import React from "react";
import moment from "moment";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { IoStatsChartOutline } from "react-icons/io5";
import { FaRetweet } from "react-icons/fa";
const Posts = () => {
  return (
    <div className="p-2 flex space-x-3 border-b border-gray-200 ">
      <div>
        <Image
          className="rounded-full h-12 w-12 min-w-[50px]"
          src="https://i.pravatar.cc/300"
          width={60}
          height={10}
        />
      </div>
      <div className=" w-full p-3">
        <div className="">
          <div className="flex space-x-2">
            <h3
              className="font-bold
            hover:underline cursor-pointer
            "
            >
              buraxta
            </h3>
            <span className="mr-3 text-gray-600">@buraxta_ - </span>
            <span className="flex-1 truncate">
              {moment(Date.now()).fromNow()}
            </span>
            <BsThreeDots
              className="cursor-pointer hover:scale-110
            transition-all duration-200 ease-in-out text-lg"
            />
          </div>
        </div>
        <div>
          <p className="my-2">I love this photo much!</p>
          <Image
            className="w-full h-96 object-cover rounded-2xl mr-2"
            src={
              "https://images.unsplash.com/photo-1694807865565-70252084fa27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80"
            }
            width={500}
            height={500}
            alt={"post"}
          />
          <div className="flex justify-between p-3 mr-14">
            <FaRegCommentDots className="icons" />
            <FaRetweet className="icons" />
            <AiOutlineHeart className="icons" />
            <IoStatsChartOutline className="icons" />
            <AiOutlineShareAlt className="icons" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;

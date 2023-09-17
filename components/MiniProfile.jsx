import Image from "next/image";
import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";

const MiniProfile = () => {
  return (
    <div className="hoverEffect flex space-x-1 items-center ml-3 bottom-0 absolute mb-2 w-[220px]">
      <Image
        className="rounded-full"
        src="https://i.pravatar.cc/300"
        width={50}
        height={50}
      />{" "}
      <div className="flex flex-col flex-1 hidden sm:inline-flex">
        <p className="font-bold">username</p>
        <p>@nickname</p>
      </div>
      <FiMoreHorizontal className=" hidden sm:inline-flex text-xl hover:scale-110 transition-all duration-150 ease-in-out cursor-pointer" />
    </div>
  );
};

export default MiniProfile;

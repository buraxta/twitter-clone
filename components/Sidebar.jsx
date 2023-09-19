import React from "react";
import { BsTwitter } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { BiHash } from "react-icons/bi";

import { IoIosNotificationsOutline } from "react-icons/io";
import { BiMessageSquareDetail } from "react-icons/bi";
import { PiBookmarkSimpleBold } from "react-icons/pi";
import { LiaClipboardListSolid } from "react-icons/lia";
import { BsPerson } from "react-icons/bs";
import { CiCircleMore } from "react-icons/ci";
import Button from "./Button";
import MiniProfile from "./MiniProfile";
import DarkModeSwitch from "./DarkModeSwitch";

const Sidebar = () => {
  return (
    <div
      className="min-h-screen fixed bg-white  dark:bg-[#15202B]
    lg:ml-[100px]"
    >
      <div className="flex items-center md:space-x-3 mx-[-13px] md:space-x-7">
        <BsTwitter className=" ml-10 text-3xl text-blue-500 dark:hover:bg-slate-800 hover:bg-blue-100 hover:rounded-3xl h-12 w-10 cursor-pointer p-1" />
        <DarkModeSwitch />
      </div>
      <div className="flex flex-col  mx-auto  max-w-[250px]">
        <div className="logoContainer group">
          <AiFillHome className="logo" />
          <p className="siteText">Home</p>
        </div>
        <div className="logoContainer group">
          <BiHash className="logo" />
          <p className="siteText">Explore</p>
        </div>
        <div className="logoContainer group">
          <IoIosNotificationsOutline className="logo dark:text-white" />
          <p className="siteText">Notifications</p>
        </div>
        <div className="logoContainer group">
          <BiMessageSquareDetail className="logo" />
          <p className="siteText">Messages</p>
        </div>
        <div className="logoContainer group">
          <PiBookmarkSimpleBold className="logo" />
          <p className="siteText">Bookmarks</p>
        </div>
        <div className="logoContainer group">
          <LiaClipboardListSolid className="logo" />
          <p className="siteText">Lists</p>
        </div>
        <div className="logoContainer group">
          <BsPerson className="logo" />
          <p className="siteText">Profile</p>
        </div>
        <div className="logoContainer group">
          <CiCircleMore className="logo" />
          <p className="siteText">More</p>
        </div>
        <Button />
        <MiniProfile />
      </div>
    </div>
  );
};

export default Sidebar;

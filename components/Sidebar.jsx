import React from "react";
import { BsTwitter } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { BiHash } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";
import { BiMessageSquareDetail } from "react-icons/bi";
import { PiBookmarkSimpleBold } from "react-icons/pi";
import { LiaClipboardListSolid } from "react-icons/lia";
import { BsPerson } from "react-icons/bs";
import { CiCircleMore } from "react-icons/ci";
import SidebarItem from "./SidebarItem";
import Button from "./Button";
import MiniProfile from "./MiniProfile";

const Sidebar = () => {
  return (
    <div className="min-h-full relative">
      <BsTwitter className=" ml-10 text-3xl text-blue-500 hover:bg-blue-100 hover:rounded-3xl h-12 w-10 cursor-pointer p-1" />
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
          <GrNotification className="logo" />
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

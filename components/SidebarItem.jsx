import React from "react";
import { AiFillHome } from "react-icons/ai";

const SidebarItem = ({ styles, logo, text }) => {
  return (
    <div className={styles}>
      <logo />
      <p>{text}</p>
    </div>
  );
};

export default SidebarItem;

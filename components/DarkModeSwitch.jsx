"use client";
import { useTheme } from "next-themes";
import React from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";

const DarkModeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div>
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            className="text-2xl cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out"
            onClick={() => setTheme("light")}
          />
        ) : (
          <BsFillMoonFill
            className="text-2xl cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out"
            onClick={() => setTheme("dark")}
          />
        ))}
    </div>
  );
};

export default DarkModeSwitch;

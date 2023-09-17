import React from "react";

const Button = () => {
  return (
    <button
      className="bg-blue-500 text-white rounded-3xl p-2 
      font-semibold hover:bg-blue-400 transition-all duration-200 
      ease-in-out hover:brightness-100 mx-3 mt-5 hidden sm:block"
    >
      Tweet
    </button>
  );
};

export default Button;

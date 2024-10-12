"use client";
import { useState } from "react";

const Switcher = () => {
  const [isOn, setIsOn] = useState(true);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      className={`flex h-6 w-12 cursor-pointer items-center rounded-2xl ${
        isOn ? "justify-end bg-blue-300" : "justify-start bg-transparent-5"
      }`}
      onClick={handleToggle}
    >
      <div className="mx-0.5 h-5 w-5 rounded-full bg-white"></div>
    </div>
  );
};

export default Switcher;

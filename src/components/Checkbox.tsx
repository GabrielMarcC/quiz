"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";

export const Checkbox = () => {
  const { setTheme } = useTheme();

  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
    setTheme(checked ? "light" : "dark");
  };

  return (
    <div className="relative w-12 h-7 bg-dark_purple rounded-full p-1">
      <input
        type="checkbox"
        id="toggle"
        className="hidden"
        checked={checked}
        onChange={handleToggle}
      />
      <label
        htmlFor="toggle"
        className={`flex items-center top-1   w-5 h-5 absolute left-1 bottom-0 bg-white rounded-full shadow-md  justify-center transition-transform  duration-500 ${
          checked ? "translate-x-full" : ""
        }`}
      >
        <div
          id="ball"
          className="w-5 h-5 translate-x-full ease-in-out  rounded-full"
        ></div>
      </label>
    </div>
  );
};

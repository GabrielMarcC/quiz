"use client";

import React, { ChangeEvent, useState } from "react";
import { useTheme } from "next-themes";

export const Checkbox = () => {
  const { setTheme, theme } = useTheme();

  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="w-full flex flex-1 relative h-7 bg-dark_purple rounded-full p-1">
      <input
        type="checkbox"
        id="toggle"
        className="hidden"
        checked={checked}
        onChange={handleToggle}
      />
      <label
        htmlFor="toggle"
        className={`flex items-center top-1 w-5 h-5 absolute left-1 bottom-0 bg-white rounded-full shadow-md justify-center transition-transform duration-500 ${
          theme === "light" ? "" : "transform translate-x-full left-7"
        }`}
      >
        <div id="ball" className="w-5 h-5 rounded-full"></div>
      </label>
    </div>
  );
};

"use client";

import { Checkbox } from "./Checkbox";
import { SunDark } from "./svgs/SunDark";
import { MoonDark } from "./svgs/MoonDark";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const { theme } = useTheme();
  return (
    <div className="flex items-center justify-center gap-2 w-[130px] h-[28px]">
      <div>
        <SunDark
          color={`${theme == "light" ? "#000000" : "#FFFFFF"}`}
          w={21}
          h={21}
        />
      </div>
      <Checkbox />
      <div>
        <MoonDark
          color={`${theme == "light" ? "#000000" : "#FFFFFF"}`}
          w={21}
          h={21}
        />
      </div>
    </div>
  );
};

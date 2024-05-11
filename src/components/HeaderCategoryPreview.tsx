"use client";

import { useParams, useSearchParams } from "next/navigation";
import { Accessibility } from "./svgs/Accessibility";
import { Css } from "./svgs/Css";
import { Javascript } from "./svgs/Javascript";
import { Html } from "./svgs/Html";

const icon = {
  accessibility: {
    icon: <Accessibility />,
    bg: "bg-purple-100",
    width: "20px",
    height: "20px",
  },
  javascript: {
    icon: <Javascript />,
    bg: "bg-blue-100",
    width: "20px",
    height: "20px",
  },
  css: {
    icon: <Css />,
    bg: "bg-green-100",
    width: "20px",
    height: "20px",
  },
  html: {
    icon: <Html />,
    bg: "bg-orange-100",
    width: "20px",
    height: "20px",
  },
};

export const HeaderCategoryPreview = () => {
  const { name } = useParams();
  const params = useSearchParams();
  const queryName = params.get("name");

  const category = name || queryName;
  const result = icon[category as keyof typeof icon];

  return (
    <>
      {category && (
        <div className="capitalize flex items-center h-7 justify-center gap-2">
          <div
            className={`flex items-center justify-center ${result.bg} w-10 h-10 rounded-md`}
          >
            <div className="w-5 h-5 box-content">{result.icon}</div>
          </div>
          <span className="captalize text-dark_blue dark:text-white leading-[100%] text-[18px] font-medium">
            {category}
          </span>
        </div>
      )}
    </>
  );
};

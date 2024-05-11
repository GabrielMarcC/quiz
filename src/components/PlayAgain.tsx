"use client";

import { HeaderCategoryPreview } from "./HeaderCategoryPreview";
import { Button } from "./ui/button";
import { useQuizContext } from "@/Context/QuizContext";

type PlayAgainProps = {
  points: string;
};

export const PlayAgain = ({ points }: PlayAgainProps) => {
  const { resetQuiz } = useQuizContext();

  return (
    <div className="h-full flex justify-center items-center">
      <div className="flex lg:flex-row flex-col gap-[60px]">
        <div className="flex flex-col justify-center h-full">
          <h1 className="flex items-center text-[40px] lg:text-[64px] leading-[64px] w-full text-start font-light  lg:text-start dark:text-white">
            Quiz completed
          </h1>
          <span className="text-[40px] leading-[40px] dark:text-white lg:text-[64px] lg:leading-[64px] text-dark_blue">
            You scored...
          </span>
        </div>
        <div className="flex flex-col justify-center h-full">
          <div className="flex flex-col gap-[22px] dark:bg-light_blue justify-center items-center w-[327px] h-[242px] lg:h-[388px] lg:w-[564px] lg:p-[48px] bg-white rounded-[12px] lg:rounded-[24px]">
            <HeaderCategoryPreview />
            <span className="font-medium leading-[100%] text-dark_blue dark:text-white  text-[88px] lg:text-[144px] ">
              {points}
            </span>
            <span className="text-[18px] lg:text-[24px] font-light text-gray_blue dark:text-white_blue">
              out of 10
            </span>
          </div>
          <Button
            className="w-full p-6 capitalize leading-[100%] lg:p-[32px] rounded-[12px] lg:rounded-[24px] text-white font-medium text-[18px] mt-5"
            onClick={() => resetQuiz()}
          >
            play again
          </Button>
        </div>
      </div>
    </div>
  );
};

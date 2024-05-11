"use client";

import { useQuizContext } from "@/Context/QuizContext";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/button";
import { Correct } from "./svgs/Correct";

type QuizOptionsProps = {
  data: string[];
  correctAnswer: string;
  name: string;
  question: string;
  setSelectedIndex: Dispatch<SetStateAction<number | undefined>>;
  selectedIndex: number | undefined;
};

export const QuizOptions = ({
  data,
  correctAnswer,
  name,
  question,
  setSelectedIndex,
  selectedIndex,
}: QuizOptionsProps) => {
  const {
    score,
    setScore,
    isAnswerCorrect,
    setSelectedAnswer,
    isEvaluated,
    selectedAnswer,
  } = useQuizContext();

  const letters = ["a", "b", "c", "d"];

  const router = useRouter();

  const handleSelectAnswer = (answer: string, index: number) => {
    if (isEvaluated) {
      return;
    }

    setSelectedIndex(index);
    setSelectedAnswer(answer);
    if (answer === correctAnswer) {
      return (
        router.push(`/questions/${name}?question=${question}`),
        setScore(score + 1)
      );
    }

    router.push(`/questions/${name}?question=${question}`);
  };

  const correct = isAnswerCorrect;

  return (
    <div className="lg:max-w-[600px] flex flex-col justify-start items-center gap-4">
      {data.map((option, index) => {
        return (
          <Button
            key={index}
            variant="ghost"
            onClick={() => handleSelectAnswer(option, index)}
            className={`flex items-center ${
              correct && selectedIndex === index && isEvaluated
                ? "border border-emerald_green"
                : !correct && selectedIndex === index && isEvaluated
                ? "border border-coral_red"
                : !correct &&
                  option === correctAnswer &&
                  selectedIndex !== undefined &&
                  isEvaluated
                ? "border border-emerald_green"
                : selectedAnswer && selectedIndex === index
                ? "border border-slate-500"
                : ""
            } justify-center w-full p-3 h-14 lg:h-[92px] lg:rounded-[24px] lg:px-[20px] hover:border-dark_purple focus-visible:bg-none active:border-dark_purple rounded-xl bg-white dark:bg-light_blue`}
          >
            <div
              className={
                "w-[100%] lg:text-[28px] lg:leading-[28px] flex items-center  justify-start dark:text-white gap-2"
              }
            >
              <p className="bg-gray-100  text-gray_blue rounded-md flex justify-center items-center w-10 h-10">
                {letters[index].toUpperCase()}
              </p>
              {option}
            </div>
            {correct && selectedIndex === index && isEvaluated ? (
              <div className="flex items-center justify-center  h-16 box-border">
                <Correct w={40} h={40} />
              </div>
            ) : (
              ""
            )}
          </Button>
        );
      })}
    </div>
  );
};

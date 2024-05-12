"use client";

import { QuizData } from "@/types";
import { QuizOptions } from "./QuizOptions";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useQuizContext } from "@/Context/QuizContext";
import { Progressbar } from "./Progressbar";

type QuestionsListProps = {
  data: QuizData;
  name: string;
  question: string;
};

export const QuizList = ({ data, name, question }: QuestionsListProps) => {
  const {
    selectedAnswer,
    evaluateAnswer,
    isEvaluated,
    resetEvaluate,
    countAnswers,
    countAnswer,
    score,
  } = useQuizContext();
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>();

  const [mockQuestion] = data.quizzes.filter(
    (quiz) => quiz.title.toLowerCase() === name
  );

  const router = useRouter();

  const currentIndex = parseInt(question) - 1;
  const currentQuestion = mockQuestion.questions[currentIndex];
  let questionIndex = currentIndex + 1;

  const handleSendAnswer = () => {
    evaluateAnswer(currentQuestion.answer);

    if (isEvaluated) {
      countAnswers();
      if (questionIndex >= mockQuestion.questions.length) return;
      router.push(`/questions/${name}?question=${++questionIndex}`);
      resetEvaluate();
    }
  };

  const handleFinishQuiz = () => {
    router.push(`/score?points=${score}&name=${name}`);
  };

  return (
    <div className="w-full h-fit px-8 pt-8 mb-5 lg:px-12 xl:px-32 lg:pt-0 flex justify-center">
      <div className="max-w-[1440px] mb-5 justify-center lg:gap-[100px] flex flex-col lg:flex-row w-screen">
        <div className="lg:w-[55%] self-start w-full h-fit lg:h-full flex flex-col">
          <span className="italic text-[14px] lg:text-[20px] lg:leading-[20px] text-dark_blue dark:text-skye_blue leading-[150%]">
            Question {currentIndex + 1} of {mockQuestion.questions.length}
          </span>
          <span className="font-medium text-dark_blue dark:text-white text-[20px] lg:text-[36px] lg:leading-[36px] leading-[120%] py-5">
            {currentQuestion.question}
          </span>
          <Progressbar
            currentQuestion={questionIndex}
            totalQuestion={mockQuestion.questions.length}
          />
        </div>
        <div className="w-full flex flex-col h-full lg:max-w-[564px]">
          <QuizOptions
            data={currentQuestion.options}
            name={name}
            question={question}
            correctAnswer={currentQuestion.answer}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />

          {countAnswer <= mockQuestion.questions.length - 1 && (
            <Button
              onClick={handleSendAnswer}
              disabled={!selectedAnswer.length}
              variant="default"
              className={`lg:w-full lg:text-[22px] text-[18px] h-16  dark:text-white disabled:bg-opacity-50 bg-dark_purple disabled:cursor-not-allowed mt-5 disabled:opacity-50 ${
                isEvaluated ? "bg-opacity-50" : ""
              }`}
            >
              {isEvaluated ? "Next Question" : "Submit Answer"}
            </Button>
          )}
          {countAnswer == mockQuestion.questions.length && (
            <Button
              onClick={handleFinishQuiz}
              disabled={!selectedAnswer.length}
              variant="default"
              className="lg:w-full lg:text-[22px] text-[18px] h-16  dark:text-white disabled:bg-opacity-50 bg-dark_purple disabled:cursor-not-allowed mt-5 disabled:opacity-50"
            >
              Finish
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

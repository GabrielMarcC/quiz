"use client";

import { useRouter } from "next/navigation";
import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

type QuizContextProps = {
  score: number;
  selectedAnswer: string;
  countAnswer: number;
  countAnswers: () => void;
  setSelectedAnswer: Dispatch<SetStateAction<string>>;
  setScore: Dispatch<SetStateAction<number>>;
  isAnswerCorrect: boolean;
  evaluateAnswer: (correctAnswer: string) => void;
  isEvaluated: boolean;
  resetEvaluate: () => void;
  resetQuiz: () => void;
};

export const QuizContext = createContext<QuizContextProps | null>(null);

export const QuizContextProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isAnswerCorrect, setAnswerCorrect] = useState<boolean>(false);
  const [isEvaluated, setIsEvaluated] = useState(false);
  const [countAnswer, setCounterAnswer] = useState(0);

  const evaluateAnswer = (correctAnswer: string) => {
    setIsEvaluated(true);

    if (selectedAnswer === correctAnswer) {
      return setAnswerCorrect(true);
    }

    setAnswerCorrect(false);
  };

  const resetEvaluate = () => {
    setIsEvaluated(false);
    setAnswerCorrect(false);
    setSelectedAnswer("");
  };

  const countAnswers = () => {
    setCounterAnswer(countAnswer + 1);
  };

  const resetQuiz = () => {
    setAnswerCorrect(false);
    setScore(0);
    setCounterAnswer(0);
    setSelectedAnswer("");
    router.push("/");
  };

  return (
    <QuizContext.Provider
      value={{
        resetEvaluate,
        score,
        setScore,
        selectedAnswer,
        setSelectedAnswer,
        evaluateAnswer,
        isAnswerCorrect,
        isEvaluated,
        countAnswers,
        countAnswer,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => {
  const context = useContext(QuizContext);

  if (!context) {
    throw new Error("Missing QuizContextProvider in html tree!");
  }

  return context;
};

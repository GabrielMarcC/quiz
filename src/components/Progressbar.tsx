"use client";

import * as React from "react";

import { Progress } from "@/components/ui/progress";

type ProgressProps = {
  currentQuestion: number;
  totalQuestion: number;
};

export function Progressbar({ currentQuestion, totalQuestion }: ProgressProps) {
  const [progress, setProgress] = React.useState(totalQuestion);
  const percentage = (currentQuestion / totalQuestion) * 100;

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(percentage), 200);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <Progress
      value={progress}
      className="w-[100%] lg:w-[90%] my-8 bg-white dark:bg-light_blue"
    />
  );
}

import { StartQuiz } from "@/components/StartQuiz";

import { QuizData } from "@/types";

export const getData = async (): Promise<QuizData> => {
  const response = await fetch("https://quiz-lyart-seven.vercel.app/api/json");
  const data: QuizData = await response.json();
  return data;
};

export default async function Home() {
  const data = await getData();
  return (
    <main className="flex justify-center bg-ellipse_2 dark:bg-ellipseDark_2 bg-no-repeat bg-right-bottom items-center px-[32px] h-screen bg-transparent py-4">
      <div className="flex flex-col lg:flex-row lg:gap-6 lg:justify-center mt-6 items-center lg:max-w-[1660px] lg:w-screen lg:h-[456px]">
        <div className="w-full lg:max-w-[500px] lg:h-full">
          <h1 className="text-[40px] lg:text-[64px] text-start font-light lg:text-start dark:text-white">
            Welcome to the
            <span className="text-dark_blue text-center lg:text-start font-medium dark:text-white">
              {" "}
              Frontend Quiz!
            </span>
          </h1>
          <p className="italic text-[14px] lg:mt-6  lg:text-start self-start md:self-center h-[21px] text-gray_blue dark:text-skye_blue">
            Pick a subject to get started.
          </p>
        </div>
        <div className="w-full lg:w-fit h-full mt-16 lg:mt-0">
          <StartQuiz data={data} />
        </div>
      </div>
    </main>
  );
}

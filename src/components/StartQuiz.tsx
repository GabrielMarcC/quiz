import Link from "next/link";
import Image from "next/image";
import { changeColor } from "@/utils/changeColor";
import { QuizData } from "@/types";

type StartQuizProps = {
  data: QuizData;
};

export const StartQuiz = ({ data }: StartQuizProps) => {
  return (
    <div className="flex items-center gap-3 flex-col justify-start">
      {data.quizzes.map((quiz, index) => {
        const color = changeColor(index);
        return (
          <Link
            className="font-medium text-[18px] lg:text-[28px] dark:text-white w-full text-dark_blue"
            href={`/questions/${quiz.title.toLowerCase()}?question=1`}
            key={index}
          >
            <div className="flex items-center w-full lg:w-[564px] h-16 lg:h-[80px] p-3 rounded-[24px] dark:bg-light_blue bg-white">
              <div className={"flex items-center justify-center gap-4"}>
                <div
                  className={`flex items-center justify-center ${color} w-10 h-10 rounded-md `}
                >
                  <Image
                    src={quiz.icon}
                    alt={quiz.title}
                    width={20}
                    height={20}
                  />
                </div>

                {quiz.title}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

import data from "@/mock/data.json";
import Link from "next/link";
import Image from "next/image";
import { changeColor } from "@/utils/changeColor";

export const StartQuiz = () => {
  return (
    <div className="flex items-center gap-3 flex-col justify-start">
      {data.quizzes.map((quiz, index) => {
        const color = changeColor(index);
        return (
          <div
            key={index}
            className="flex items-center w-[327px] h-16 rounded-md bg-white p-3"
          >
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
              <Link
                className="font-medium text-[18px] text-dark_blue"
                href={`/questions/${quiz.title.toLowerCase()}`}
              >
                {quiz.title}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

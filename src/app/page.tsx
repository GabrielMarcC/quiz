import { Hero } from "@/components/Hero";
import { StartQuiz } from "@/components/StartQuiz";

export default function Home() {
  return (
    <main className="min-w-[375px] min-h-[740px] bg-white_blue dark:bg-dark_blue py-4 px-6">
      <Hero />
      <div className="flex flex-col justify-center items-center min-w-[327px] mt-5">
        <h1 className=" text-[40px] font-light">
          Welcome to the
          <span className="text-dark_blue font-medium"> Frontend Quiz!</span>
        </h1>
        <p className="italic text-[14px] self-start h-[21px] text-gray_blue mt-5">
          Pick a subject to get started.
        </p>
      </div>
      <StartQuiz />
    </main>
  );
}

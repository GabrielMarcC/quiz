import { getData } from "@/app/page";
import { QuizList } from "@/components/QuizList";

export default async function Questions({
  params,
  searchParams,
}: {
  params: { name: string };
  searchParams: { question: string };
}) {
  const data = await getData();

  return (
    <div className="w-full lg:p-0 bg-transparent bg-ellipse_2 dark:bg-ellipseDark_2 bg-no-repeat bg-right-bottom  lg:pt-[100px]">
      <QuizList
        data={data}
        name={params.name}
        question={searchParams.question}
      />
    </div>
  );
}

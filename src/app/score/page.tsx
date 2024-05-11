import { PlayAgain } from "@/components/PlayAgain";

export default function Score({
  searchParams,
}: {
  searchParams: { points: string };
}) {
  return (
    <section className="h-screen bg-ellipse_2 dark:bg-ellipseDark_2 bg-no-repeat bg-right-bottom ">
      <PlayAgain points={searchParams.points} />
    </section>
  );
}

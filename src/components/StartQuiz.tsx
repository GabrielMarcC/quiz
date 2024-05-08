import data from "@/mock/data.json";

export const StartQuiz = () => {
  return (
    <div>
      {data.quizzes.map((quiz, index) => {
        return <div key={index}>{quiz.title}</div>;
      })}
    </div>
  );
};

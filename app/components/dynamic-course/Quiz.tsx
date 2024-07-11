import { questionsType } from "@/types/dynamic-courses/types";

const Quiz = ({
  title,
  questions,
}: {
  title: string;
  questions: questionsType[];
}) => {
  return (
    <div className="text-Primary rounded-[10px] border-2 bg-white px-2 sm:px-12 py-7">
      <h3 className="text-xl font-SofiaProRegular mb-10">Challenge: {title}</h3>

      <ul>
        {questions.map((question, idx) => (
          <li key={question.key} className="mb-3.5">
            <p className="font-SofiaProLight mb-0.5">
              {idx + 1}. {question.question}
            </p>

            <ul className="px-3.5 font-SofiaProLight">
              {question.choices.map((choice, i) => (
                <li key={choice.key} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={question.question}
                    value={choice.choice}
                  />
                  {String.fromCharCode(97 + i)}) {choice.choice}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;

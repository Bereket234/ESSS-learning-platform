import { moduleCard } from "@/types/dynamic-courses/types";

const SubCourseDescriptionCard = ({
  part,
  title,
  modules,
}: {
  part: string;
  title: string;
  modules: moduleCard[];
}) => {
  return (
    <div className="border-l-8 rounded-lg text-Primary border-Primary bg-white px-5 py-4 my-4">
      <h2 className="font-SofiaProSemiBold border-b pb-4 sm:max-w-[80%] md:max-w-[60%] text-lg lg:text-xl mb-4">
        Sub-Course {part}:{" "}
        <span className="font-SofiaProRegular text-lg">{title}</span>
      </h2>

      <div>
        {modules.map((module) => (
          <div key={module.key} className="sm:grid grid-cols-4 gap-3 my-4">
            <h3 className="font-SofiaProRegular text-base lg:text-lg">
              {module.title}:
            </h3>

            <p className="text-justify font-SofiaProLight text-sm max-w-3xl col-span-3">
              {module.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubCourseDescriptionCard;

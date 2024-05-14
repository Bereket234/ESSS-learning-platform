import Image from "next/image";
import { cardData } from "@/types/dynamic-courses/types";

const SubCoursesCard = (props: cardData) => {
  return (
    <div className="px-2 py-3 xl:p-1 border-l-[6px] border-Primary rounded-md">
      <h3 className="flex gap-3 sm:gap-7 sm:text-lg lg:text-[22px] text-Primary font-SofiaProSemiBold">
        Sub Course {props.part}
      </h3>

      <p className="text-sm text-base lg:text-[22px] text-Primary font-SofiaProLight">
        {props.title}
      </p>
    </div>
  );
};

export default SubCoursesCard;

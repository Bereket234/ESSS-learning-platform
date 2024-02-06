import Image from "next/image";
import { cardData } from "@/types/dynamic-courses/types";
import clsx from "clsx";

const SubCoursesCard = (props: cardData) => {
  return (
    <div className="flex justify-between gap-3 px-2 xl:p-1">
      <div className="hidden xl:block relative w-1/2 shrink-0 bg-black rounded-lg">
        <Image
          src={props.src}
          fill={true}
          alt="Sub Courses Thumbnail"
          className="rounded-lg object-cover"
        />

        <p className="absolute right-1 bottom-1 px-1 text-xs rounded-[4px] bg-gray-950/70 text-Tertiary/75">
          {props.vidLength}
        </p>
      </div>

      <div>
        <h3 className="font-SofiaProSemiBold text-3xl text-Primary">
          {props.part}
        </h3>

        <p className="font-SofiaProLightItalic xl:text-sm min-[1350]:text-base text-Quaternary xl:pb-2">
          {props.title}
        </p>

        <div className="flex items-center gap-3">
          <p className="font-SofiaProLightItalic xl:text-sm min-[1350]:text-base text-Primary">
            {props.status}
          </p>
          <span
            className={clsx("p-[6px] rounded-full", {
              "bg-[#139A45]": props.status === "Completed",
              "bg-[#EA1C1C]": props.status === "Not Started",
              "bg-Primary": props.status === "In Progress",
            })}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default SubCoursesCard;

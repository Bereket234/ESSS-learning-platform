"use client";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { cardData } from "@/types/dynamic-courses/types";
import SubCoursesCard from "./SubCoursesCard";
import { RootState } from "@/store/store";

const SideBar = () => {
  const pathName = usePathname();
  const isSidebar = useSelector((state: RootState) => state.isSidebar.value);
  const params = useParams();

  const cardData: cardData[] = [
    {
      key: "1",
      part: "1",
      title: "Introduction to space exploration",
    },
    {
      key: "2",
      part: "2",
      title: "The Solar System",
    },
    {
      key: "3",
      part: "3",
      title: "The Inter-Stellar Space",
    },
    {
      key: "4",
      part: "4",
      title: "The Voyager Mission",
    },
    {
      key: "5",
      part: "5",
      title: "How far can we sail the Universe",
    },
    {
      key: "6",
      part: "6",
      title: "Edges of the Universe",
    },
    {
      key: "7",
      part: "7",
      title: "The Quantum World",
    },
  ];

  return (
    <div
      className={clsx("xl:sticky xl:top-16 xl:self-start xl:min-w-[450px]", {
        hidden: !isSidebar,
      })}
    >
      <div className="xl:overflow-y-auto xl:max-h-screen xl:max-w-md items-stretch grid grid-cols-2 lg:grid-cols-3 min-[1160px]:grid-cols-4 xl:flex xl:flex-col gap-3 mx-6 xl:pt-10 pt-5 border-t-2">
        {cardData.map((data) => (
          <Link
            href={`/courses/${params.courseId}/${data.key}`}
            key={data.key}
            className={`rounded-lg 
                ${
                  pathName === `/courses/${params.courseId}/${data.key}` ||
                  (!!params.moduleId &&
                    pathName.includes(
                      `/courses/${params.courseId}/${data.key}/${params.moduleId}`,
                    ))
                    ? "bg-Secondary"
                    : "hover:bg-Secondary bg-white"
                }
            `}
          >
            <SubCoursesCard
              key={data.key}
              title={data.title}
              part={data.part}
            />
          </Link>
        ))}
      </div>

      <hr className="my-5 mx-6 text-Quinary" />
    </div>
  );
};

export default SideBar;

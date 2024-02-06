"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { cardData } from "@/types/dynamic-courses/types";
import SubCoursesCard from "./SubCoursesCard";

const SideBar = ({ id }: { id: string }) => {
  const pathName = usePathname();

  const cardData: cardData[] = [
    {
      key: "1",
      src: "/assets/images/dynamic-courses/space-shuttle.png",
      vidLength: "15:49",
      part: "Part 1",
      title: "Introduction to space exploration",
      status: "In Progress",
    },
    {
      key: "2",
      src: "/boat-on-the-lake-at-sunset-beautiful-summer-landscape-with-fishing-boat.jpg",
      vidLength: "15:49",
      part: "Part 2",
      title: "Exploring other worlds: What to expect",
      status: "Not Started",
    },
    {
      key: "3",
      src: "/istockphoto-1200499809-612x612.jpg",
      vidLength: "15:49",
      part: "Part 3",
      title: "How Rockets Work: Can you make one?",
      status: "Completed",
    },
    {
      key: "4",
      src: "/istockphoto.jpg",
      vidLength: "15:49",
      part: "Part 4",
      title: "Ai and Space Exploration: It's role",
      status: "Completed",
    },
  ];

  return (
    <div className="xl:sticky xl:top-16 xl:self-start">
      <div className="xl:overflow-y-auto xl:max-h-screen xl:max-w-md grid sm:grid-cols-2 lg:grid-cols-3 min-[1160px]:grid-cols-4 xl:flex xl:flex-col gap-3 mx-6 xl:pt-10 pt-5 border-t-2">
        {cardData.map((data) => (
          <Link
            href={`/courses/${id}/${data.key}`}
            key={data.key}
            className={clsx("rounded-lg", {
              "hover:bg-slate-100/70":
                pathName !== `/courses/${id}/${data.key}`,
              "bg-Secondary": pathName === `/courses/${id}/${data.key}`,
            })}
          >
            <SubCoursesCard
              key={data.key}
              src={data.src}
              vidLength={data.vidLength}
              title={data.title}
              part={data.part}
              status={data.status}
            />
          </Link>
        ))}

        <hr className="xl:my-12 my-5 mx-6" />
      </div>
    </div>
  );
};

export default SideBar;

"use client";

import Link from "next/link";
import { useParams, usePathname, useSearchParams } from "next/navigation";

import { IoVideocam } from "react-icons/io5";
import { FaCalendarCheck } from "react-icons/fa6";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import clsx from "clsx";

const ModuleListCard = ({
  isLoading,
  title,
  id,
  inSidebar,
  isFirst,
  isLast,
}: {
  isLoading: boolean;
  title: string;
  id: string;
  inSidebar?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
}) => {
  const pathName = usePathname();
  const params = useParams();
  const searchParams = useSearchParams();

  const mode = searchParams.get("mode");
  const path = `/courses/${params.courseId}/${params.contentId}`;

  return (
    <div
      className={clsx("bg-Primary", {
        "my-3 rounded-lg lg:px-16 md:px-10 px-5 py-3": !inSidebar,
        "px-2 py-1": inSidebar,
        "rounded-t-lg mt-3 pt-3": isFirst,
        "rounded-b-lg": isLast,
      })}
    >
      <h4
        className={clsx("text-Secondary font-SofiaProSemiBold  mb-[6px]", {
          "text-lg": !inSidebar,
          "text-base": !inSidebar,
        })}
      >
        {isLoading ? "Loading..." : title}
      </h4>

      <ul
        className={clsx("text-white", {
          "px-3 sm:px-10 text-sm": !inSidebar,
          "px-1 text-xs": inSidebar,
        })}
      >
        <li
          className={clsx("my-2 hover:text-Secondary", {
            "text-Secondary":
              pathName === `${path}/${id}` && (!mode || mode === "video"),
          })}
        >
          <Link
            href={`${path}/${id}?mode=video`}
            className="flex items-center gap-4"
          >
            <IoVideocam size={inSidebar ? 18 : 23} />
            {isLoading ? "Loading" : `${title}: Explanation`}
          </Link>
        </li>

        <li
          className={clsx("my-2 hover:text-Secondary", {
            "text-Secondary":
              pathName === `${path}/${id}` && (!mode || mode === "reading"),
          })}
        >
          <Link
            href={`${path}/${id}?mode=reading`}
            className="flex items-center gap-4"
          >
            <FaCalendarCheck size={inSidebar ? 16 : 20} />
            {isLoading ? "Loading..." : `${title}: Basic Concepts`}
          </Link>
        </li>

        <li
          className={clsx("my-2 hover:text-Secondary", {
            "text-Secondary":
              pathName === `${path}/${id}` && (!mode || mode === "quiz"),
          })}
        >
          <Link
            href={`${path}/${id}?mode=quiz`}
            className="flex items-center gap-4"
          >
            <BsFillQuestionSquareFill size={inSidebar ? 16 : 20} />
            {isLoading ? "Loading..." : `Challenge: ${title}`}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ModuleListCard;

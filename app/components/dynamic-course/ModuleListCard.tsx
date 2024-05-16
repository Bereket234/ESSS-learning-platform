"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { IoVideocam } from "react-icons/io5";
import { FaCalendarCheck } from "react-icons/fa6";
import { BsFillQuestionSquareFill } from "react-icons/bs";

const ModuleListCard = ({ title, part }: { title: string; part: string }) => {
  const pathName = usePathname();

  return (
    <div className="bg-Primary py-3 lg:px-16 md:px-10 px-5 my-3 rounded-lg">
      <h4 className="text-Secondary font-SofiaProSemiBold text-lg lg:text-[22px] mb-[6px]">
        {title}
      </h4>

      <ul className="px-3 sm:px-10 text-white text-sm sm:text-base">
        <li className="my-2 hover:text-Secondary">
          <Link
            href={`${pathName}/${part}?mode=video`}
            className="flex items-center gap-4"
          >
            <IoVideocam size={23} />
            {`${title}: Explanation`}
          </Link>
        </li>

        <li className="my-2 hover:text-Secondary">
          <Link
            href={`${pathName}/${part}?mode=reading`}
            className="flex items-center gap-4"
          >
            <FaCalendarCheck size={20} />
            {`${title}: Basic Concepts`}
          </Link>
        </li>

        <li className="my-2 hover:text-Secondary">
          <Link
            href={`${pathName}/${part}?mode=quiz`}
            className="flex items-center gap-4"
          >
            <BsFillQuestionSquareFill size={20} />
            {`Challenge: ${title}`}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ModuleListCard;

"use client";

import {
  IoIosArrowDropdownCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { toggleSidebar } from "@/store/features/sidebarslice";

const Heading = () => {
  const isSidebar = useSelector((state: RootState) => state.isSidebar.value);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div
      className={clsx(
        "md:px-10 px-5 bg-Tertiary py-3 flex gap-10 items-center",
        {
          "xl:sticky xl:top-0 z-10 xl:max-w-sm": isSidebar,
          "border-b-2": !isSidebar,
        },
      )}
    >
      <h2 className="font-SofiaProSemiBold text-3xl">Sub-Courses</h2>

      {isSidebar ? (
        <IoIosArrowDropdownCircle
          size={30}
          className="mt-2 rounded-full text-Secondary bg-Primary hover:cursor-pointer"
          onClick={() => dispatch(toggleSidebar())}
        />
      ) : (
        <IoIosArrowDroprightCircle
          size={30}
          className="mt-2 rounded-full hover:cursor-pointer"
          onClick={() => dispatch(toggleSidebar())}
        />
      )}
    </div>
  );
};

export default Heading;

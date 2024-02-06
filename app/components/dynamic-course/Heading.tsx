"use client";

import { useState } from "react";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import clsx from "clsx";

const Heading = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const handleToggle = () => {
    setToggleSidebar((value) => !value);
  };

  return (
    <div
      className={clsx("py-3 px-10 flex gap-10 items-center", {
        "xl:sticky xl:top-0 z-10 bg-white xl:max-w-[455px]": toggleSidebar,
      })}
    >
      <h2 className="font-SofiaProSemiBold text-3xl">Sub-Courses</h2>

      {toggleSidebar ? (
        <IoIosArrowDropdownCircle
          size={30}
          className="mt-2 rounded-full text-Secondary bg-Primary hover:cursor-pointer"
          onClick={handleToggle}
        />
      ) : (
        <IoIosArrowDroprightCircle
          size={30}
          className="mt-2 rounded-full hover:cursor-pointer"
          onClick={handleToggle}
        />
      )}
    </div>
  );
};

export default Heading;

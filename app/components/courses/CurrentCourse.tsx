import React, { useEffect } from "react";
import Image from "next/image";
import ProgressBar from "./ProgressBar";

const CurrentCourse = () => {
  return (
    <div className="flex flex-col w-full pb-5">
      <p className="ml-[20px] md:ml-[40px] lg:ml-[80px] xl:ml-[123px] my-[30px] text-Primary text-xl font-semibold font-SofiaProBold">
        Resume what you Started...
      </p>
      {/* values to be submitted form backend */}
      <div className="w-[360px] sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[1100px] 2xl:w-[1300px] current-course-wrapper relative flex rounded-xl  bg-White self-center px-7 py-5 shadow-[2px_5px_10px_#00000029]">
        <div className="current-course-img flex mr-4">
          <Image
            src="/assets/images/img.jpg"
            width={100}
            height={100}
            alt="img"
            className="current-course-img only:rounded-3xl"
          />
        </div>
        <div className="course-details w-auto">
          <h3 className="font-bold font-SofiaProRegular text-xl sm:text-[35px] mb-2">
            Space Weather
          </h3>
          <div className="progress-bar-wrapper flex items-center mb-3">
            {/* <progress
              className="progress progress-success progress-rounded w-[700px] h-2 rounded-full bg-red-600"
              value="36"
              max="100"
            ></progress> */}
            <ProgressBar />
          </div>
          <p className="text-Primary font-semibold mt-1">Your progress</p>
          <button className="btn bg-Primary w-[130px] sm:w-[180px] h-[35px]  sm:h-[40px] absolute right-4 bottom-2 rounded-full text-Secondary text-sm sm:text-base self-end hover:opacity-75">
            Resume
          </button>
        </div>
      </div>
      <div className="current-course-radio-btns flex self-center mt-6">
        <div className="current-course-radio mx-[6px] rounded-full bg-transparent w-5 h-5 relative shadow-[0px_3px_6px_#00000029]">
          <input
            type="radio"
            id="radio_1"
            checked
            name="current-course"
            className="absolute top-0 w-5 h-5 radio-input"
          />
          <div className="radio-div"></div>
        </div>
        <div className="current-course-radio mx-[6px] rounded-full bg-transparent w-5 h-5 relative shadow-[0px_3px_6px_#00000029]">
          <input
            type="radio"
            id="radio_2"
            name="current-course"
            className="absolute top-0 w-5 h-5 radio-input"
          />
          <div className="radio-div"></div>
        </div>
        <div className="current-course-radio mx-[6px] rounded-full bg-transparent w-5 h-5 relative shadow-[0px_3px_6px_#00000029]">
          <input
            type="radio"
            id="radio_3"
            name="current-course"
            className="absolute top-0 w-5 h-5 radio-input"
          />
          <div className="radio-div"></div>
        </div>
      </div>
    </div>
  );
};

export default CurrentCourse;

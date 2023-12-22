"use client";
import React, { useEffect } from "react";

const ProgressBar = () => {
  const currentCourseProgress = 36;
  useEffect(() => {
    const progressBar = document.querySelector(".progress-bar");

    if (progressBar instanceof HTMLElement) {
      // Set the width dynamically (replace 70 with the actual percentage)
      progressBar.style.width = `${currentCourseProgress}%`;
    }
  }, []);
  return (
    <>
      <div className="progress-bar w-[100px] sm:w-[340px] md:w-[440px] lg:w-[640px] xl:w-[840px] 2xl:w-[1040px]  bg-Quaternary rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-blue-600 h-2.5 rounded-full progress-bar w-0"></div>
      </div>
      <p className="progress-value ml-2 font-bold">{currentCourseProgress}%</p>
    </>
  );
};

export default ProgressBar;

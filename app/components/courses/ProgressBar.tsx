"use client";
import { useState } from "react";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const [currentProgress, setCurrentProgress] = useState(progress);

  return (
    <div className="flex items-center">
      <div className="max-w-[19rem] md:max-w-[1026px] w-full bg-Quaternary rounded-full h-[19px] overscroll-none current_course-wrapper">
        <div
          className="progress-bar bg-Senary h-18 rounded-full"
          style={{ width: `${currentProgress}%`, height: '19px' }}
        ></div>
      </div>
      <p className="progress-value ml-2 font-bold text-3xl">{currentProgress}%</p>
    </div>
  );
};

export default ProgressBar;

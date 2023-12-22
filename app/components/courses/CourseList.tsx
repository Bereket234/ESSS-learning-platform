import React, { useEffect, useState } from "react";
import Course from "../../Course";

interface coursesDataProps {
  coursesData: Array<{
    id: number;
    title: string;
    description: string;
  }>;
}

const CourseList = ({ coursesData }: coursesDataProps) => {
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-1  place-items-center">
      {coursesData.map((course) => (
        <Course key={course.id} {...course} />
      ))}
    </div>
  );
};

export default CourseList;

import Image from "next/image";
import React from "react";
import CourseButton from "./components/courses/CourseButton";

interface CourseProps {
  id: number;
  title: string;
  description: string;
}

const Course = ({ title, description }: CourseProps) => {
  return (
    <div className="card-wrapper flex flex-col p-2 rounded-xl bg-white w-[330px] sm:w-[310px] md:w-[360px] lg:w-[230px] xl:w-[270px] 2xl:w-[350px] shadow-[0px_3px_6px_#00000029]">
      <div className="course-img-container w-full h-15 rounded-xl">
        <Image
          src="/assets/images/imgg.jpg"
          alt={title}
          width={100}
          height={80}
          className="course-img object-cover rounded-2xl"
        />
      </div>
      <h3 className="course-title self-start font-SofiaProBold font-bold my-2">
        {title}
      </h3>
      <p className="course-description self-start text-[13px] text-justify opacity-50 line-clamp-2">
        {description}
      </p>
      <CourseButton style="mt-4" innerText="Enroll for free" />
    </div>
  );
};

export default Course;

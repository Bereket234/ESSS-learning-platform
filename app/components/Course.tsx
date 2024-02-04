import Image from "next/image";
import CourseButton from "./courses/CourseButton";
import styles from "./courses/courses.module.css";

interface CourseProps {
  id: number;
  title: string;
  description: string;
}

const Course = ({ title, description }: CourseProps) => {
  return (
    <div className="flex flex-col p-2 rounded-xl bg-white w-[330px] sm:w-[310px] md:w-[360px] lg:w-[230px] xl:w-[270px] 2xl:w-[350px] shadow-[0px_3px_6px_#00000029]">
      <div className="course-img-container w-full h-15 rounded-xl">
        <Image
          src="/assets/images/imgg.jpg"
          alt={title}
          width={600}
          height={80}
          objectFit="contain"
          className="course-img object-cover rounded-2xl flex-1"
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

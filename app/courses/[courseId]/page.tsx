import { Suspense } from "react";

import { TiHome } from "react-icons/ti";
import { BsDot } from "react-icons/bs";

import SubCourseDescriptionCard from "@/app/components/dynamic-course/SubCourseDescriptionCard";
import { subCoursesData } from "@/types/dynamic-courses/types";
import { getItem } from "@/utils/fetchItem";

const CoursePage = async ({
  params,
}: {
  params: { courseId: string; contentId: string; moduleId: string };
}) => {
  const course = await getItem(
    `http://localhost:8000/api/course/find/${params.courseId}`,
  );
  const subCourses = await getItem(
    `http://localhost:8000/api/subCourse/getSubCourses/${params.courseId}`,
  );

  return (
    <div className="mx-auto max-w-6xl xl:max-w-4xl 2xl:max-w-6xl rounded-3xl text-Primary px-5 py-2">
      <div className="flex sm:gap-3 items-center">
        <TiHome size={40} />

        <BsDot size={30} className="pt-2" />

        <p className="pt-3 font-SofiaProMedium text-base sm:text-2xl text-Primary">
          {course.level}
        </p>
      </div>

      <h2 className="font-SofiaProSemiBold text-2xl sm:text-3xl lg:text-4xl my-4">
        {course.title}
      </h2>

      {subCourses?.map((subCourse: subCoursesData) => (
        <Suspense key={subCourse._id} fallback={<p>Loading...</p>}>
          <SubCourseDescriptionCard
            part={subCourse.part}
            title={subCourse.title}
            subCourseId={subCourse._id}
          />
        </Suspense>
      ))}
    </div>
  );
};

export default CoursePage;

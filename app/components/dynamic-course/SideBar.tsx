"use client";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { moduleData, subCoursesData } from "@/types/dynamic-courses/types";
import SubCoursesCard from "./SubCoursesCard";
import { RootState } from "@/store/store";
import Heading from "./Heading";
import ModuleListCard from "./ModuleListCard";
import {
  useGetModulesBySubcourseIdQuery,
  useGetSubcoursesByCourseIdQuery,
} from "@/store/api";

const SideBar = () => {
  const pathName = usePathname();
  const isSidebar = useSelector((state: RootState) => state.isSidebar.value);
  const params = useParams();

  const {
    data: subCourses,
    isFetching,
    isLoading,
    isError,
  } = useGetSubcoursesByCourseIdQuery(params.courseId);

  const {
    data: modules,
    isFetching: moduleIsFetching,
    isLoading: moduleIsLoading,
    isError: moduleIsError,
  } = useGetModulesBySubcourseIdQuery(params.moduleId);

  return (
    <div
      className={clsx("xl:self-start h-auto overflow-y-auto", {
        "xl:sticky xl:top-0 xl:max-h-screen xl:w-1/3 xl:max-w-lg": isSidebar,
        hidden: !isSidebar,
      })}
    >
      <Heading />

      <div className="xl:max-w-md items-stretch grid grid-cols-2 lg:grid-cols-3 min-[1160px]:grid-cols-4 xl:flex xl:flex-col gap-3 mx-6 pt-5">
        {isError ? (
          <div>Error</div>
        ) : (
          subCourses?.map((subCourse: subCoursesData) => (
            <div
              key={subCourse._id}
              className={clsx("group", {
                "col-span-2 lg:col-span-3 min-[1160px]:col-span-4":
                  !!params.moduleId &&
                  pathName.includes(
                    `/courses/${params.courseId}/${subCourse._id}/${params.moduleId}`,
                  ),
              })}
            >
              <div
                className={`rounded-lg
                ${
                  pathName === `/courses/${params.courseId}/${subCourse._id}` ||
                  (!!params.moduleId &&
                    pathName.includes(
                      `/courses/${params.courseId}/${subCourse._id}/${params.moduleId}`,
                    ))
                    ? "first:bg-Secondary"
                    : "group-hover:bg-Secondary bg-white"
                }
              `}
              >
                <Link href={`/courses/${params.courseId}/${subCourse._id}`}>
                  <SubCoursesCard
                    isLoading={isLoading || isFetching}
                    key={subCourse._id}
                    title={subCourse.title}
                    part={subCourse.part}
                  />
                </Link>
              </div>

              {!!params.moduleId &&
                pathName.includes(
                  `/courses/${params.courseId}/${subCourse._id}/${params.moduleId}`,
                ) &&
                modules?.map((module: moduleData, index: number) =>
                  moduleIsError ? (
                    <div>Error</div>
                  ) : (
                    <ModuleListCard
                      isLoading={moduleIsLoading || moduleIsFetching}
                      key={module._id}
                      id={module._id}
                      title={module.title}
                      inSidebar={true}
                      isFirst={index === 0}
                      isLast={modules && index === modules.length - 1}
                    />
                  ),
                )}
            </div>
          ))
        )}
      </div>

      <hr className="my-5 mx-6 text-Quinary" />
    </div>
  );
};

export default SideBar;

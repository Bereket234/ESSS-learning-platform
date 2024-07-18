import "server-only";

import {
  courseData,
  moduleData,
  subCoursesData,
} from "@/types/dynamic-courses/types";

export const getCourseById = async (id: string): Promise<courseData> => {
  try {
    const res = await fetch(`http://localhost:8000/api/course/find/${id}`);
    const course = await res.json();

    return course;
  } catch (err) {
    console.error(err);
    throw new Error("failed to fetch course");
  }
};

export const getSubCoursesByCourseId = async (
  id: string,
): Promise<subCoursesData[]> => {
  try {
    const res = await fetch(
      `http://localhost:8000/api/subCourse/getSubCourses/${id}`,
    );
    const subCourses = await res.json();

    return subCourses;
  } catch (err) {
    console.error(err);
    throw new Error("failed to fetch course");
  }
};

export const getSubCourseById = async (id: string): Promise<subCoursesData> => {
  try {
    const res = await fetch(`http://localhost:8000/api/subCourse/find/${id}`);
    const subCourse = await res.json();

    return subCourse;
  } catch (err) {
    console.error(err);
    throw new Error("failed to fetch course");
  }
};

export const getModulesBySubCoureseId = async (
  id: string,
): Promise<moduleData[]> => {
  try {
    const res = await fetch(
      `http://localhost:8000/api/module/getModules/${id}`,
    );
    const modules = await res.json();

    return modules;
  } catch (err) {
    console.error(err);
    throw new Error("failed to fetch course");
  }
};

export const getModuleById = async (id: string): Promise<moduleData> => {
  try {
    const res = await fetch(`http://localhost:8000/api/module/find/${id}`);
    const module = await res.json();

    return module;
  } catch (err) {
    console.error(err);
    throw new Error("failed to fetch course");
  }
};

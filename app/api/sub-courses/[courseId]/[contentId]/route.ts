import prisma from "@/prisma";
import { NextResponse } from "next/server";
import connectToDB from "@/utils/connectToDB";
import { subCourseData } from "@/types/subcourses";

export const PUT = async (
  req: Request,
  { params }: { params: { courseId: string; contentId: string } }
) => {
  try {
    const {
      subCourseName,
      subCourseLength,
      description,
      imageUrl,
      status,
      part,
      youtubeVideoUrl,
    }: subCourseData = await req.json();
    await connectToDB();

    const course = await prisma.courses.findFirst({
      where: { id: params.courseId },
    });

    if (!course) {
      return NextResponse.json(
        { message: "No Course Associated With This Subcourse" },
        { status: 401 }
      );
    }

    const updatedSubCourse = await prisma.subCourses.update({
      data: {
        subCourseName,
        subCourseLength,
        description,
        imageUrl,
        status,
        part,
        youtubeVideoUrl,
        courseId: params.courseId,
      },
      where: { id: params.contentId },
    });

    return NextResponse.json({ tweet: updatedSubCourse }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ err: err.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const DELETE = async (
  req: Request,
  { params }: { params: { courseId: string; contentId: string } }
) => {
  try {
    await connectToDB();

    const course = await prisma.courses.findFirst({
      where: { id: params.courseId },
    });

    if (!course) {
      return NextResponse.json(
        { message: "No Course Associated With This Subcourse" },
        { status: 401 }
      );
    }

    const subCourse = await prisma.subCourses.delete({
      where: { id: params.contentId },
    });

    return NextResponse.json({ subCourse }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ err: err.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

import prisma from "@/prisma";
import { NextResponse } from "next/server";
import connectToDB from "@/utils/connectToDB";
import { subCourseData } from "@/types/subcourses";

export const GET = async (
  req: Request,
  { params }: { params: { courseId: string } }
) => {
  try {
    await connectToDB();

    const subCourses = await prisma.subCourses.findMany({
      where: { courseId: params.courseId },
    });

    return NextResponse.json({ subCourses }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ err: err.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const POST = async (
  req: Request,
  { params }: { params: { courseId: string } }
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

    if (
      !subCourseName ||
      !subCourseLength ||
      !description ||
      !imageUrl ||
      !status ||
      !part ||
      !youtubeVideoUrl
    ) {
      return NextResponse.json({ err: "Missing Data" }, { status: 422 });
    }

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

    const newSubcourse = await prisma.subCourses.create({
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
    });

    return NextResponse.json({ newSubcourse }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ err: err.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

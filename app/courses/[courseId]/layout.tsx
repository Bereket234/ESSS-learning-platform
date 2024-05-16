import type { Metadata } from "next";
import "@/app/globals.css";
import Hero from "@/app/components/dynamic-course/Hero";
import SideBar from "@/app/components/dynamic-course/SideBar";
import Heading from "@/app/components/dynamic-course/Heading";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { courseId: string; contentId: string };
}) {
  return (
    <main className="bg-Tertiary">
      {/* hero section that has details of the course */}
      <Hero />

      {/* heading that controls sidebar toggle */}
      <Heading />

      {/* section with course content */}
      <section className="xl:flex">
        {/* sidebar to navigate between sub-courses */}
        <SideBar />

        {/* course content like video */}
        <div className="w-full xl:border-l-2"> {children}</div>
      </section>
    </main>
  );
}

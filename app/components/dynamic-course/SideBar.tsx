"use client";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { cardData } from "@/types/dynamic-courses/types";
import SubCoursesCard from "./SubCoursesCard";
import { RootState } from "@/store/store";
import Heading from "./Heading";
import ModuleListCard from "./ModuleListCard";

const SideBar = () => {
  const pathName = usePathname();
  const isSidebar = useSelector((state: RootState) => state.isSidebar.value);
  const params = useParams();

  const cardData: cardData[] = [
    {
      key: "1",
      part: "1",
      title: "Introduction to space exploration",
      modules: [
        {
          key: "1",
          part: "1",
          title: "The Birth of a System",
          description:
            "we'll begin by delving into humanity's inherent curiosity about the universe. from gazing at the stars to ancient myths, we'll explore how our fascination with space has fueled exploration for centuries.",
        },
        {
          key: "2",
          part: "2",
          title: "The Central Star",
          description:
            "This section will focus on our mighty sun, understanding its role as the gravitational and energetic heart of the solar system. We'll explore its structure, processes, and the impact on the planets.",
        },
        {
          key: "3",
          part: "3",
          title: "A Terrestrial Tour",
          description:
            "Get ready to meet the inner planets! We'll explore the rocky worlds closest to the sun – Mercury, Venus, Earth, and Mars – delving into their unique characteristics, atmospheres, geological features, and potential for harboring life.",
        },
        {
          key: "4",
          part: "4",
          title: "Giants of the Outer Realm",
          description:
            "Brace yourself for the awe-inspiring scale of the gas giants! We'll journey to Jupiter, Saturn, Uranus, and Neptune, exploring their vast atmospheres, ring systems, and intriguing moons.",
        },
        {
          key: "5",
          part: "5",
          title: "Beyond the Giants",
          description:
            "Our solar system isn't just planets. We'll explore the intriguing world of dwarf planets like Pluto, asteroids that reside in the asteroid belt, and the icy comets that originate in the distant Oort cloud.",
        },
        {
          key: "6",
          part: "6",
          title: "The Symphony of Gravity",
          description:
            "This section will shed light on the fascinating dance of these celestial bodies. We'll explore the laws of gravity that govern their movements and the delicate balance within the solar system.",
        },
      ],
    },
    {
      key: "2",
      part: "2",
      title: "The Solar System",
      modules: [
        {
          key: "1",
          part: "1",
          title: "The Birth of a System",
          description:
            "we'll begin by delving into humanity's inherent curiosity about the universe. from gazing at the stars to ancient myths, we'll explore how our fascination with space has fueled exploration for centuries.",
        },
        {
          key: "2",
          part: "2",
          title: "The Central Star",
          description:
            "This section will focus on our mighty sun, understanding its role as the gravitational and energetic heart of the solar system. We'll explore its structure, processes, and the impact on the planets.",
        },
        {
          key: "3",
          part: "3",
          title: "A Terrestrial Tour",
          description:
            "Get ready to meet the inner planets! We'll explore the rocky worlds closest to the sun – Mercury, Venus, Earth, and Mars – delving into their unique characteristics, atmospheres, geological features, and potential for harboring life.",
        },
        {
          key: "4",
          part: "4",
          title: "Giants of the Outer Realm",
          description:
            "Brace yourself for the awe-inspiring scale of the gas giants! We'll journey to Jupiter, Saturn, Uranus, and Neptune, exploring their vast atmospheres, ring systems, and intriguing moons.",
        },
        {
          key: "5",
          part: "5",
          title: "Beyond the Giants",
          description:
            "Our solar system isn't just planets. We'll explore the intriguing world of dwarf planets like Pluto, asteroids that reside in the asteroid belt, and the icy comets that originate in the distant Oort cloud.",
        },
        {
          key: "6",
          part: "6",
          title: "The Symphony of Gravity",
          description:
            "This section will shed light on the fascinating dance of these celestial bodies. We'll explore the laws of gravity that govern their movements and the delicate balance within the solar system.",
        },
      ],
    },
    {
      key: "3",
      part: "3",
      title: "The Inter-Stellar Space",
      modules: [
        {
          key: "1",
          part: "1",
          title: "The Birth of a System",
          description:
            "we'll begin by delving into humanity's inherent curiosity about the universe. from gazing at the stars to ancient myths, we'll explore how our fascination with space has fueled exploration for centuries.",
        },
        {
          key: "2",
          part: "2",
          title: "The Central Star",
          description:
            "This section will focus on our mighty sun, understanding its role as the gravitational and energetic heart of the solar system. We'll explore its structure, processes, and the impact on the planets.",
        },
        {
          key: "3",
          part: "3",
          title: "A Terrestrial Tour",
          description:
            "Get ready to meet the inner planets! We'll explore the rocky worlds closest to the sun – Mercury, Venus, Earth, and Mars – delving into their unique characteristics, atmospheres, geological features, and potential for harboring life.",
        },
        {
          key: "4",
          part: "4",
          title: "Giants of the Outer Realm",
          description:
            "Brace yourself for the awe-inspiring scale of the gas giants! We'll journey to Jupiter, Saturn, Uranus, and Neptune, exploring their vast atmospheres, ring systems, and intriguing moons.",
        },
        {
          key: "5",
          part: "5",
          title: "Beyond the Giants",
          description:
            "Our solar system isn't just planets. We'll explore the intriguing world of dwarf planets like Pluto, asteroids that reside in the asteroid belt, and the icy comets that originate in the distant Oort cloud.",
        },
        {
          key: "6",
          part: "6",
          title: "The Symphony of Gravity",
          description:
            "This section will shed light on the fascinating dance of these celestial bodies. We'll explore the laws of gravity that govern their movements and the delicate balance within the solar system.",
        },
      ],
    },
    {
      key: "4",
      part: "4",
      title: "The Voyager Mission",
      modules: [
        {
          key: "1",
          part: "1",
          title: "The Birth of a System",
          description:
            "we'll begin by delving into humanity's inherent curiosity about the universe. from gazing at the stars to ancient myths, we'll explore how our fascination with space has fueled exploration for centuries.",
        },
        {
          key: "2",
          part: "2",
          title: "The Central Star",
          description:
            "This section will focus on our mighty sun, understanding its role as the gravitational and energetic heart of the solar system. We'll explore its structure, processes, and the impact on the planets.",
        },
        {
          key: "3",
          part: "3",
          title: "A Terrestrial Tour",
          description:
            "Get ready to meet the inner planets! We'll explore the rocky worlds closest to the sun – Mercury, Venus, Earth, and Mars – delving into their unique characteristics, atmospheres, geological features, and potential for harboring life.",
        },
        {
          key: "4",
          part: "4",
          title: "Giants of the Outer Realm",
          description:
            "Brace yourself for the awe-inspiring scale of the gas giants! We'll journey to Jupiter, Saturn, Uranus, and Neptune, exploring their vast atmospheres, ring systems, and intriguing moons.",
        },
        {
          key: "5",
          part: "5",
          title: "Beyond the Giants",
          description:
            "Our solar system isn't just planets. We'll explore the intriguing world of dwarf planets like Pluto, asteroids that reside in the asteroid belt, and the icy comets that originate in the distant Oort cloud.",
        },
        {
          key: "6",
          part: "6",
          title: "The Symphony of Gravity",
          description:
            "This section will shed light on the fascinating dance of these celestial bodies. We'll explore the laws of gravity that govern their movements and the delicate balance within the solar system.",
        },
      ],
    },
    {
      key: "5",
      part: "5",
      title: "How far can we sail the Universe",
      modules: [
        {
          key: "1",
          part: "1",
          title: "The Birth of a System",
          description:
            "we'll begin by delving into humanity's inherent curiosity about the universe. from gazing at the stars to ancient myths, we'll explore how our fascination with space has fueled exploration for centuries.",
        },
        {
          key: "2",
          part: "2",
          title: "The Central Star",
          description:
            "This section will focus on our mighty sun, understanding its role as the gravitational and energetic heart of the solar system. We'll explore its structure, processes, and the impact on the planets.",
        },
        {
          key: "3",
          part: "3",
          title: "A Terrestrial Tour",
          description:
            "Get ready to meet the inner planets! We'll explore the rocky worlds closest to the sun – Mercury, Venus, Earth, and Mars – delving into their unique characteristics, atmospheres, geological features, and potential for harboring life.",
        },
        {
          key: "4",
          part: "4",
          title: "Giants of the Outer Realm",
          description:
            "Brace yourself for the awe-inspiring scale of the gas giants! We'll journey to Jupiter, Saturn, Uranus, and Neptune, exploring their vast atmospheres, ring systems, and intriguing moons.",
        },
        {
          key: "5",
          part: "5",
          title: "Beyond the Giants",
          description:
            "Our solar system isn't just planets. We'll explore the intriguing world of dwarf planets like Pluto, asteroids that reside in the asteroid belt, and the icy comets that originate in the distant Oort cloud.",
        },
        {
          key: "6",
          part: "6",
          title: "The Symphony of Gravity",
          description:
            "This section will shed light on the fascinating dance of these celestial bodies. We'll explore the laws of gravity that govern their movements and the delicate balance within the solar system.",
        },
      ],
    },
    {
      key: "6",
      part: "6",
      title: "Edges of the Universe",
      modules: [
        {
          key: "1",
          part: "1",
          title: "The Birth of a System",
          description:
            "we'll begin by delving into humanity's inherent curiosity about the universe. from gazing at the stars to ancient myths, we'll explore how our fascination with space has fueled exploration for centuries.",
        },
        {
          key: "2",
          part: "2",
          title: "The Central Star",
          description:
            "This section will focus on our mighty sun, understanding its role as the gravitational and energetic heart of the solar system. We'll explore its structure, processes, and the impact on the planets.",
        },
        {
          key: "3",
          part: "3",
          title: "A Terrestrial Tour",
          description:
            "Get ready to meet the inner planets! We'll explore the rocky worlds closest to the sun – Mercury, Venus, Earth, and Mars – delving into their unique characteristics, atmospheres, geological features, and potential for harboring life.",
        },
        {
          key: "4",
          part: "4",
          title: "Giants of the Outer Realm",
          description:
            "Brace yourself for the awe-inspiring scale of the gas giants! We'll journey to Jupiter, Saturn, Uranus, and Neptune, exploring their vast atmospheres, ring systems, and intriguing moons.",
        },
        {
          key: "5",
          part: "5",
          title: "Beyond the Giants",
          description:
            "Our solar system isn't just planets. We'll explore the intriguing world of dwarf planets like Pluto, asteroids that reside in the asteroid belt, and the icy comets that originate in the distant Oort cloud.",
        },
        {
          key: "6",
          part: "6",
          title: "The Symphony of Gravity",
          description:
            "This section will shed light on the fascinating dance of these celestial bodies. We'll explore the laws of gravity that govern their movements and the delicate balance within the solar system.",
        },
      ],
    },
    {
      key: "7",
      part: "7",
      title: "The Quantum World",
      modules: [
        {
          key: "1",
          part: "1",
          title: "The Birth of a System",
          description:
            "we'll begin by delving into humanity's inherent curiosity about the universe. from gazing at the stars to ancient myths, we'll explore how our fascination with space has fueled exploration for centuries.",
        },
        {
          key: "2",
          part: "2",
          title: "The Central Star",
          description:
            "This section will focus on our mighty sun, understanding its role as the gravitational and energetic heart of the solar system. We'll explore its structure, processes, and the impact on the planets.",
        },
        {
          key: "3",
          part: "3",
          title: "A Terrestrial Tour",
          description:
            "Get ready to meet the inner planets! We'll explore the rocky worlds closest to the sun – Mercury, Venus, Earth, and Mars – delving into their unique characteristics, atmospheres, geological features, and potential for harboring life.",
        },
        {
          key: "4",
          part: "4",
          title: "Giants of the Outer Realm",
          description:
            "Brace yourself for the awe-inspiring scale of the gas giants! We'll journey to Jupiter, Saturn, Uranus, and Neptune, exploring their vast atmospheres, ring systems, and intriguing moons.",
        },
        {
          key: "5",
          part: "5",
          title: "Beyond the Giants",
          description:
            "Our solar system isn't just planets. We'll explore the intriguing world of dwarf planets like Pluto, asteroids that reside in the asteroid belt, and the icy comets that originate in the distant Oort cloud.",
        },
        {
          key: "6",
          part: "6",
          title: "The Symphony of Gravity",
          description:
            "This section will shed light on the fascinating dance of these celestial bodies. We'll explore the laws of gravity that govern their movements and the delicate balance within the solar system.",
        },
      ],
    },
  ];

  return (
    <div
      className={clsx("xl:self-start h-auto overflow-y-auto", {
        "xl:sticky xl:top-0 xl:max-h-screen xl:w-1/3 xl:max-w-lg": isSidebar,
        hidden: !isSidebar,
      })}
    >
      <Heading />

      <div className="xl:max-w-md items-stretch grid grid-cols-2 lg:grid-cols-3 min-[1160px]:grid-cols-4 xl:flex xl:flex-col gap-3 mx-6 pt-5">
        {cardData.map((data) => (
          <div
            key={data.key}
            className={clsx({
              "col-span-2 lg:col-span-3 min-[1160px]:col-span-4":
                !!params.moduleId &&
                pathName.includes(
                  `/courses/${params.courseId}/${data.key}/${params.moduleId}`,
                ),
            })}
          >
            <Link
              href={`/courses/${params.courseId}/${data.key}`}
              className={`rounded-lg
                  ${
                    pathName === `/courses/${params.courseId}/${data.key}` ||
                    (!!params.moduleId &&
                      pathName.includes(
                        `/courses/${params.courseId}/${data.key}/${params.moduleId}`,
                      ))
                      ? "bg-Secondary"
                      : "hover:bg-Secondary bg-white"
                  }
              `}
            >
              <SubCoursesCard
                key={data.key}
                title={data.title}
                part={data.part}
              />
            </Link>

            {!!params.moduleId &&
              pathName.includes(
                `/courses/${params.courseId}/${data.key}/${params.moduleId}`,
              ) &&
              data.modules?.map((module, index) => (
                <ModuleListCard
                  key={module.key}
                  title={module.title}
                  part={module.part}
                  inSidebar={true}
                  isFirst={index === 0}
                  isLast={data.modules && index === data.modules.length - 1}
                />
              ))}
          </div>
        ))}
      </div>

      <hr className="my-5 mx-6 text-Quinary" />
    </div>
  );
};

export default SideBar;

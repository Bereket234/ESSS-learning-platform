import { TiHome } from "react-icons/ti";
import { BsDot } from "react-icons/bs";

import SubCourseDescriptionCard from "@/app/components/dynamic-course/SubCourseDescriptionCard";
import { subCourseTypeNoPart } from "@/types/dynamic-courses/types";

const CoursePage = ({
  params,
}: {
  params: { courseId: string; contentId: string; moduleId: string };
}) => {
  const level = "Intermidiate";
  const title = "Space Exploration";

  const subCourses: subCourseTypeNoPart[] = [
    {
      key: "1",
      part: "1",
      title: "Introduction to Space Exploration",
      modules: [
        {
          key: "1",
          title: "A Deep-Rooted Drive",
          description:
            "we'll begin by delving into humanity's inherent curiosity about the universe. from gazing at the stars to ancient myths, we'll explore how our fascination with space has fueled exploration for centuries.",
        },
        {
          key: "2",
          title: "The Space Age",
          description:
            "We'll begin by delving into humanity's inherent curiosity about the universe. From gazing at the stars to ancient myths, we'll explore how our fascination with space has fueled exploration for centuries.",
        },
        {
          key: "3",
          title: "Beyond Earth's Embrace",
          description:
            "We'll delve into the fundamental concepts of spaceflight, exploring the challenges of overcoming gravity and propelling objects into the vast expanse.",
        },
        {
          key: "4",
          title: "Pioneers and Pathways",
          description:
            "Get ready to meet the brave astronauts and brilliant scientists who have paved the way for space exploration. We'll explore the milestones achieved through robotic missions and crewed spaceflights.",
        },
        {
          key: "5",
          title: "The Tools of the Trade",
          description:
            "This section will equip you with the knowledge of the remarkable technologies powering space exploration. We'll explore rockets, probes, satellites, and the incredible instruments used to gather data and navigate the cosmos.",
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
          title: "The Birth of a System",
          description:
            "we'll begin by delving into humanity's inherent curiosity about the universe. from gazing at the stars to ancient myths, we'll explore how our fascination with space has fueled exploration for centuries.",
        },
        {
          key: "2",
          title: "The Central Star",
          description:
            "This section will focus on our mighty sun, understanding its role as the gravitational and energetic heart of the solar system. We'll explore its structure, processes, and the impact on the planets.",
        },
        {
          key: "3",
          title: "A Terrestrial Tour",
          description:
            "Get ready to meet the inner planets! We'll explore the rocky worlds closest to the sun – Mercury, Venus, Earth, and Mars – delving into their unique characteristics, atmospheres, geological features, and potential for harboring life.",
        },
        {
          key: "4",
          title: "Giants of the Outer Realm",
          description:
            "Brace yourself for the awe-inspiring scale of the gas giants! We'll journey to Jupiter, Saturn, Uranus, and Neptune, exploring their vast atmospheres, ring systems, and intriguing moons.",
        },
        {
          key: "5",
          title: "Beyond the Giants",
          description:
            "Our solar system isn't just planets. We'll explore the intriguing world of dwarf planets like Pluto, asteroids that reside in the asteroid belt, and the icy comets that originate in the distant Oort cloud.",
        },
        {
          key: "6",
          title: "The Symphony of Gravity",
          description:
            "This section will shed light on the fascinating dance of these celestial bodies. We'll explore the laws of gravity that govern their movements and the delicate balance within the solar system.",
        },
      ],
    },
    {
      key: "1",
      part: "3",
      title: "Introduction to Space Exploration",
      modules: [
        {
          key: "1",
          title: "A Deep-Rooted Drive",
          description:
            "we'll begin by delving into humanity's inherent curiosity about the universe. from gazing at the stars to ancient myths, we'll explore how our fascination with space has fueled exploration for centuries.",
        },
        {
          key: "2",
          title: "The Space Age",
          description:
            "We'll begin by delving into humanity's inherent curiosity about the universe. From gazing at the stars to ancient myths, we'll explore how our fascination with space has fueled exploration for centuries.",
        },
        {
          key: "3",
          title: "Beyond Earth's Embrace",
          description:
            "We'll delve into the fundamental concepts of spaceflight, exploring the challenges of overcoming gravity and propelling objects into the vast expanse.",
        },
        {
          key: "4",
          title: "Pioneers and Pathways",
          description:
            "Get ready to meet the brave astronauts and brilliant scientists who have paved the way for space exploration. We'll explore the milestones achieved through robotic missions and crewed spaceflights.",
        },
        {
          key: "5",
          title: "The Tools of the Trade",
          description:
            "This section will equip you with the knowledge of the remarkable technologies powering space exploration. We'll explore rockets, probes, satellites, and the incredible instruments used to gather data and navigate the cosmos.",
        },
      ],
    },
    {
      key: "2",
      part: "4",
      title: "The Solar System",
      modules: [
        {
          key: "1",
          title: "The Birth of a System",
          description:
            "we'll begin by delving into humanity's inherent curiosity about the universe. from gazing at the stars to ancient myths, we'll explore how our fascination with space has fueled exploration for centuries.",
        },
        {
          key: "2",
          title: "The Central Star",
          description:
            "This section will focus on our mighty sun, understanding its role as the gravitational and energetic heart of the solar system. We'll explore its structure, processes, and the impact on the planets.",
        },
        {
          key: "3",
          title: "A Terrestrial Tour",
          description:
            "Get ready to meet the inner planets! We'll explore the rocky worlds closest to the sun – Mercury, Venus, Earth, and Mars – delving into their unique characteristics, atmospheres, geological features, and potential for harboring life.",
        },
        {
          key: "4",
          title: "Giants of the Outer Realm",
          description:
            "Brace yourself for the awe-inspiring scale of the gas giants! We'll journey to Jupiter, Saturn, Uranus, and Neptune, exploring their vast atmospheres, ring systems, and intriguing moons.",
        },
        {
          key: "5",
          title: "Beyond the Giants",
          description:
            "Our solar system isn't just planets. We'll explore the intriguing world of dwarf planets like Pluto, asteroids that reside in the asteroid belt, and the icy comets that originate in the distant Oort cloud.",
        },
        {
          key: "6",
          title: "The Symphony of Gravity",
          description:
            "This section will shed light on the fascinating dance of these celestial bodies. We'll explore the laws of gravity that govern their movements and the delicate balance within the solar system.",
        },
      ],
    },
    {
      key: "1",
      part: "5",
      title: "Introduction to Space Exploration",
      modules: [
        {
          key: "1",
          title: "A Deep-Rooted Drive",
          description:
            "we'll begin by delving into humanity's inherent curiosity about the universe. from gazing at the stars to ancient myths, we'll explore how our fascination with space has fueled exploration for centuries.",
        },
        {
          key: "2",
          title: "The Space Age",
          description:
            "We'll begin by delving into humanity's inherent curiosity about the universe. From gazing at the stars to ancient myths, we'll explore how our fascination with space has fueled exploration for centuries.",
        },
        {
          key: "3",
          title: "Beyond Earth's Embrace",
          description:
            "We'll delve into the fundamental concepts of spaceflight, exploring the challenges of overcoming gravity and propelling objects into the vast expanse.",
        },
        {
          key: "4",
          title: "Pioneers and Pathways",
          description:
            "Get ready to meet the brave astronauts and brilliant scientists who have paved the way for space exploration. We'll explore the milestones achieved through robotic missions and crewed spaceflights.",
        },
        {
          key: "5",
          title: "The Tools of the Trade",
          description:
            "This section will equip you with the knowledge of the remarkable technologies powering space exploration. We'll explore rockets, probes, satellites, and the incredible instruments used to gather data and navigate the cosmos.",
        },
      ],
    },
    {
      key: "2",
      part: "6",
      title: "The Solar System",
      modules: [
        {
          key: "1",
          title: "The Birth of a System",
          description:
            "we'll begin by delving into humanity's inherent curiosity about the universe. from gazing at the stars to ancient myths, we'll explore how our fascination with space has fueled exploration for centuries.",
        },
        {
          key: "2",
          title: "The Central Star",
          description:
            "This section will focus on our mighty sun, understanding its role as the gravitational and energetic heart of the solar system. We'll explore its structure, processes, and the impact on the planets.",
        },
        {
          key: "3",
          title: "A Terrestrial Tour",
          description:
            "Get ready to meet the inner planets! We'll explore the rocky worlds closest to the sun – Mercury, Venus, Earth, and Mars – delving into their unique characteristics, atmospheres, geological features, and potential for harboring life.",
        },
        {
          key: "4",
          title: "Giants of the Outer Realm",
          description:
            "Brace yourself for the awe-inspiring scale of the gas giants! We'll journey to Jupiter, Saturn, Uranus, and Neptune, exploring their vast atmospheres, ring systems, and intriguing moons.",
        },
        {
          key: "5",
          title: "Beyond the Giants",
          description:
            "Our solar system isn't just planets. We'll explore the intriguing world of dwarf planets like Pluto, asteroids that reside in the asteroid belt, and the icy comets that originate in the distant Oort cloud.",
        },
        {
          key: "6",
          title: "The Symphony of Gravity",
          description:
            "This section will shed light on the fascinating dance of these celestial bodies. We'll explore the laws of gravity that govern their movements and the delicate balance within the solar system.",
        },
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-6xl xl:max-w-4xl 2xl:max-w-6xl rounded-3xl text-Primary px-5 py-2">
      <div className="flex sm:gap-3 items-center">
        <TiHome size={40} />
        <BsDot size={40} className="pt-2" />
        <p className="pt-3 font-SofiaProMedium text-base sm:text-2xl lg:text-[28px] text-Primary">
          {level}
        </p>
      </div>

      <h2 className="font-SofiaProSemiBold text-2xl sm:text-3xl lg:text-[45px] my-4">
        {title}
      </h2>

      {subCourses.map((subCourse) => (
        <SubCourseDescriptionCard
          part={subCourse.part}
          title={subCourse.title}
          modules={subCourse.modules}
        />
      ))}
    </div>
  );
};

export default CoursePage;

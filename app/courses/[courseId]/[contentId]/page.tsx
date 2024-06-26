import ModuleListCard from "@/app/components/dynamic-course/ModuleListCard";
import { subCourseType } from "@/types/dynamic-courses/types";
import { BsDot } from "react-icons/bs";
import { TiHome } from "react-icons/ti";

const SubCoursePage = ({
  params,
}: {
  params: { courseId: string; contentId: string; moduleId: string };
}) => {
  const currentPage = parseInt(params.contentId) - 1;
  const videos = [
    "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    "https://www.youtube.com/watch?v=9RhWXPcKBI8",
    "https://www.youtube.com/watch?v=PA9iymey_lM",
    "https://www.youtube.com/watch?v=14jlIxVrcvo",
  ];

  const level = "Intermidiate";
  const title = "Space Exploration";

  const subCourses: subCourseType[] = [
    {
      key: "1",
      part: "1",
      title: "Introduction to Space Exploration",
      modules: [
        {
          key: "1",
          part: "1",
          title: "A Deep-Rooted Drive",
          description:
            "we'll begin by delving into humanity's inherent curiosity about the universe. from gazing at the stars to ancient myths, we'll explore how our fascination with space has fueled exploration for centuries.",
        },
        {
          key: "2",
          part: "2",
          title: "The Space Age",
          description:
            "We'll begin by delving into humanity's inherent curiosity about the universe. From gazing at the stars to ancient myths, we'll explore how our fascination with space has fueled exploration for centuries.",
        },
        {
          key: "3",
          part: "3",
          title: "Beyond Earth's Embrace",
          description:
            "We'll delve into the fundamental concepts of spaceflight, exploring the challenges of overcoming gravity and propelling objects into the vast expanse.",
        },
        {
          key: "4",
          part: "4",
          title: "Pioneers and Pathways",
          description:
            "Get ready to meet the brave astronauts and brilliant scientists who have paved the way for space exploration. We'll explore the milestones achieved through robotic missions and crewed spaceflights.",
        },
        {
          key: "5",
          part: "5",
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
      title: "Introduction to Space Exploration",
      modules: [
        {
          key: "1",
          part: "1",
          title: "A Deep-Rooted Drive",
          description:
            "we'll begin by delving into humanity's inherent curiosity about the universe. from gazing at the stars to ancient myths, we'll explore how our fascination with space has fueled exploration for centuries.",
        },
        {
          key: "2",
          part: "2",
          title: "The Space Age",
          description:
            "We'll begin by delving into humanity's inherent curiosity about the universe. From gazing at the stars to ancient myths, we'll explore how our fascination with space has fueled exploration for centuries.",
        },
        {
          key: "3",
          part: "3",
          title: "Beyond Earth's Embrace",
          description:
            "We'll delve into the fundamental concepts of spaceflight, exploring the challenges of overcoming gravity and propelling objects into the vast expanse.",
        },
        {
          key: "4",
          part: "4",
          title: "Pioneers and Pathways",
          description:
            "Get ready to meet the brave astronauts and brilliant scientists who have paved the way for space exploration. We'll explore the milestones achieved through robotic missions and crewed spaceflights.",
        },
        {
          key: "5",
          part: "5",
          title: "The Tools of the Trade",
          description:
            "This section will equip you with the knowledge of the remarkable technologies powering space exploration. We'll explore rockets, probes, satellites, and the incredible instruments used to gather data and navigate the cosmos.",
        },
      ],
    },
    {
      key: "4",
      part: "4",
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
      key: "5",
      part: "5",
      title: "Introduction to Space Exploration",
      modules: [
        {
          key: "1",
          part: "1",
          title: "A Deep-Rooted Drive",
          description:
            "we'll begin by delving into humanity's inherent curiosity about the universe. from gazing at the stars to ancient myths, we'll explore how our fascination with space has fueled exploration for centuries.",
        },
        {
          key: "2",
          part: "2",
          title: "The Space Age",
          description:
            "We'll begin by delving into humanity's inherent curiosity about the universe. From gazing at the stars to ancient myths, we'll explore how our fascination with space has fueled exploration for centuries.",
        },
        {
          key: "3",
          part: "3",
          title: "Beyond Earth's Embrace",
          description:
            "We'll delve into the fundamental concepts of spaceflight, exploring the challenges of overcoming gravity and propelling objects into the vast expanse.",
        },
        {
          key: "4",
          part: "4",
          title: "Pioneers and Pathways",
          description:
            "Get ready to meet the brave astronauts and brilliant scientists who have paved the way for space exploration. We'll explore the milestones achieved through robotic missions and crewed spaceflights.",
        },
        {
          key: "5",
          part: "5",
          title: "The Tools of the Trade",
          description:
            "This section will equip you with the knowledge of the remarkable technologies powering space exploration. We'll explore rockets, probes, satellites, and the incredible instruments used to gather data and navigate the cosmos.",
        },
      ],
    },
    {
      key: "6",
      part: "6",
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
      key: "7",
      part: "7",
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
      key: "8",
      part: "8",
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
  ];

  const subCourse = {
    ...subCourses[currentPage],
    description:
      "Welcome to the incredible adventure of space exploration! Throughout this chapter, we'll embark on a journey to understand humanity's quest to unravel the mysteries of the cosmos. Buckle up as we explore the following. We'll begin by delving into humanity's inherent curiosity about the universe. From gazing at the stars to ancient myths, we'll explore how our fascination with space has fueled exploration for centuries. This section will mark the turning point where dreams became reality. We'll explore the dawn of the Space Age, ignited by advancements in technology and the launch of the first artificial satellite, Sputnik 1.",
  };

  return (
    <div className="mx-auto max-w-6xl xl:max-w-4xl 2xl:max-w-6xl px-4 py-3 w-full text-Primary">
      <div className="flex flex-wrap sm:gap-3 items-center mb-8">
        <TiHome size={40} className="sm:w-10 sm:h-10 w-8 h-8" />

        <BsDot size={40} className="pt-2 sm:w-10 sm:h-10 w-8 h-8" />

        <p className="pt-3 font-SofiaProMedium text-base sm:text-xl text-Primary">
          {level}
        </p>

        <BsDot size={40} className="pt-2 sm:w-10 sm:h-10 w-8 h-8" />

        <p className="pt-3 font-SofiaProMedium text-base sm:text-xl text-Primary">
          {subCourse.title}
        </p>
      </div>

      <h2 className="font-SofiaProSemiBold text-2xl sm:text-3xl my-6">
        {`Sub-Course ${subCourse.part}: ${subCourse.title}`}
      </h2>

      <div className="lg:px-16 md:px-10 px-5 py-3 bg-white border-l-8 rounded-lg border-Primary">
        <h3 className="font-SofiaProSemiBold text-lg sm:text-xl py-5 max-w-[80%] sm:max-w-[60%] border-b">
          About the Sub-Course
        </h3>

        <p className="text-justify font-SofiaProLight text-sm sm:text-base py-3 max-w-4xl">
          {subCourse.description}
        </p>
      </div>

      {subCourse.modules.map((module) => (
        <ModuleListCard
          key={module.key}
          title={module.title}
          part={module.part}
        />
      ))}
    </div>
  );
};

export default SubCoursePage;

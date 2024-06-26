import Quiz from "@/app/components/dynamic-course/Quiz";
import Reader from "@/app/components/dynamic-course/Reader";
import VideoPlayer from "@/app/components/dynamic-course/VideoPlayer";
import { questionsType, subCourseType } from "@/types/dynamic-courses/types";
import { title } from "process";
import { BsDot } from "react-icons/bs";
import { TiHome } from "react-icons/ti";

const modulePage = ({
  params,
  searchParams,
}: {
  params: { courseId: string; contentId: string; moduleId: string };
  searchParams?: { mode?: string };
}) => {
  const currentPage = parseInt(params.contentId) - 1;
  const videos = [
    "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    "https://www.youtube.com/watch?v=9RhWXPcKBI8",
    "https://www.youtube.com/watch?v=PA9iymey_lM",
    "https://www.youtube.com/watch?v=14jlIxVrcvo",
    "https://www.youtube.com/watch?v=9RhWXPcKBI8",
    "https://www.youtube.com/watch?v=PA9iymey_lM",
    "https://www.youtube.com/watch?v=14jlIxVrcvo",
  ];

  const mode = searchParams?.mode;

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

  const level = "Intermidiate";

  const subCourse = subCourses[currentPage];

  const questions: questionsType[] = [
    {
      key: "1",
      question: "What is the main focus of the section 'A Deep-Rooted Drive'?",
      choices: [
        {
          key: "1",
          choice: "The history of space travel technology",
        },
        {
          key: "2",
          choice: "Humanity's natural curiosity about the universe",
        },
        {
          key: "3",
          choice: "The benefits of space exploration for society",
        },
        {
          key: "4",
          choice: "The challenges of space travel",
        },
      ],
    },
    {
      key: "2",
      question:
        "According to the passage, what has sparked human interest in the universe for centuries",
      choices: [
        {
          key: "1",
          choice: "Advanced telescopes and scientific instruments",
        },
        {
          key: "2",
          choice: "The need for resources from other planets",
        },
        {
          key: "3",
          choice: "Observing the stars and celestial movements",
        },
        {
          key: "4",
          choice: "Ancient myths about aliens and spaceships",
        },
      ],
    },
    {
      key: "3",
      question:
        "How does the section suggest that ancient myths and legends are connected to space exploration",
      choices: [
        {
          key: "1",
          choice: "They provide scientific data for astronomers",
        },
        {
          key: "2",
          choice:
            "They reflect humanity's long-standing fascination with the cosmos",
        },
        {
          key: "3",
          choice: "They offfer instuctions on how to build spaceships",
        },
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-6xl xl:max-w-4xl 2xl:max-w-6xl px-4 py-3 w-full text-Primary mb-3">
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

      {/* render page on different modes */}
      <div>
        {(!mode || mode === "video") && (
          <div className="aspect-video max-w-6xl mx-auto rounded-3xl">
            <VideoPlayer vidLink={videos[currentPage]} />
          </div>
        )}

        {!!mode && mode === "reading" && (
          <div className="max-w-6xl mx-auto rounded-3xl">
            <Reader />
          </div>
        )}

        {!!mode && mode === "quiz" && (
          <div className="max-w-6xl mx-auto rounded-3xl">
            <Quiz questions={questions} title={subCourse.title} />
          </div>
        )}
      </div>

      <div className="flex items-center gap-3 sm:gap-9 justify-end mt-8 text-xs md:text-sm lg:text-lg">
        <button className="bg-white text-Primary rounded-[7px] border border-Primary px-2 py-1 sm:py-2 sm:px-4 font-SofiaProRegular">
          Prev. Section
        </button>

        <button className="bg-Primary rounded-[7px] text-white px-2 py-1 sm:py-2 border border-Primary sm:px-4 font-SofiaProRegular">
          Mark as Complete
        </button>

        <button className="bg-white rounded-[7px] text-Primary px-2 py-1 sm:py-2 border border-Primary sm:px-4 font-SofiaProRegular">
          Next Section
        </button>
      </div>
    </div>
  );
};

export default modulePage;

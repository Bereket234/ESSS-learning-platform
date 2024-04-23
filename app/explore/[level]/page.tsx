import Card from "@/app/components/explore/dynamic-explore/Card";

const DynamicExplorePage = ({ params }: { params: { level: string } }) => {
  const cardData = [
    {
      Image: "/assets/images/explore/beginner.png",
      title: "Space Exploration",
      description:
        "Deep dive into the world of space exploration. Get to know the history, missions, and cutting-edge technology...",
    },
    {
      Image: "/assets/images/explore/intermediate.png",
      title: "Space Engineering",
      description:
        "Deep dive into the world of space exploration. Get to know the history, missions, and cutting-edge technology...",
    },
    {
      Image: "/assets/images/explore/advanced.png",
      title: "Cosmology",
      description:
        "Deep dive into the world of space exploration. Get to know the history, missions, and cutting-edge technology...",
    },
    {
      Image: "/assets/images/explore/beginner.png",
      title: "Space Exploration",
      description:
        "Deep dive into the world of space exploration. Get to know the history, missions, and cutting-edge technology...",
    },
    {
      Image: "/assets/images/explore/intermediate.png",
      title: "Space Engineering",
      description:
        "Deep dive into the world of space exploration. Get to know the history, missions, and cutting-edge technology...",
    },
    {
      Image: "/assets/images/explore/advanced.png",
      title: "Cosmology",
      description:
        "Deep dive into the world of space exploration. Get to know the history, missions, and cutting-edge technology...",
    },
    {
      Image: "/assets/images/explore/beginner.png",
      title: "Space Exploration",
      description:
        "Deep dive into the world of space exploration. Get to know the history, missions, and cutting-edge technology...",
    },
    {
      Image: "/assets/images/explore/intermediate.png",
      title: "Space Engineering",
      description:
        "Deep dive into the world of space exploration. Get to know the history, missions, and cutting-edge technology...",
    },
    {
      Image: "/assets/images/explore/advanced.png",
      title: "Cosmology",
      description:
        "Deep dive into the world of space exploration. Get to know the history, missions, and cutting-edge technology...",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap gap-4 md:gap-8 mb-8 p-4 md:p-8 justify-center">
        {cardData.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            image={card.Image}
            description={card.description}
          />
        ))}
      </div>
      <></>
    </>
  );
};

export default DynamicExplorePage;

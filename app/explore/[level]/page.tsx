import Card from "@/app/components/explore/dynamic-explore/Card";

const Page = ({ params }: { params: { level: string } }) => {
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
  ];

  return (
    <>
      <div className="flex gap-11 mb-[424px] p-8 justify-between ">
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

export default Page;

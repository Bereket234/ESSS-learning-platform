import Card from "@app/components/explore/dynamic explore/Card";

export default function Page({ params }: { params: { level: string } }) {
  const cardData = [
    {
      Image: "/assets/images/explore/BeginningPage.png",
      title: "Card 1",
      description: "Description for Card 1",
    },
    {
      Image: "/assets/images/explore/IntermediatePage.png",
      title: "Card 2",
      description: "Description for Card 2",
    },
    {
      Image: "/assets/images/explore/RelativeAdvancedPage.png",
      title: "Card 3",
      description: "Description for Card 3",
    },
  ];

  return (
    <>
      <div>
        {cardData.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            image={card.Image}
            description={card.description}
          />
        ))}
      </div>
    </>
  );
}

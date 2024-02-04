import TopicCard from "./TopicCard";

const cardItems = [
  {
    title: "Auto-Photography",
    imageUrl: "/assets/images/home_page/auto-photography.jpeg",
  },
  {
    title: "Satellite Engineering",
    imageUrl: "/assets/images/home_page/satellite-engineering.jpg",
  },
  {
    title: "Telescope Operation",
    imageUrl: "/assets/images/home_page/telescope-operation.jpg",
  },
  {
    title: "Rocket Science",
    imageUrl: "/assets/images/home_page/rocket-science.jpg",
  },
];

const ExploreSection = () => {
  return (
    <section className="lg:flex min-h-[500px] h-[80vh]">
      <div className="flex bg-Tertiary lg:w-1/2 items-center justify-center flex-1">
        <div className="  flex gap-3 h-40 justify-center items-center lg:flex-none lg:flex-col lg:items-start tracking-wider font-AbolitionTestRegular leading-none [font-size:_clamp(45px,6vw,100px)]  w-2/3">
          <h1 className="uppercase">Find</h1>
          <h1 className="uppercase not-italic lg:italic ml-[-12px]">What Interests</h1>
          <h1 className="uppercase text-Secondary tracking-wider">You</h1>
        </div>
      </div>
      <div className=" h-[80%] lg:h-full lg:w-1/2 gap-10 ">
        <div className="overflow-x-auto h-full grid grid-flow-col md:grid md:grid-rows-2  items-center md:justify-around">

        
        {cardItems.map((card, index) => (
          <TopicCard key={index} title={card.title} imageUrl={card.imageUrl} />
          ))}
          </div>
      </div>
    </section>
  );
};

export default ExploreSection;

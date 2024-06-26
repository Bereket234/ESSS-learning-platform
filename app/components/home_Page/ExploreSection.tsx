import TopicCard from "./TopicCard";
import styles from "./home_page.module.css";
import { cardItems } from "./dummyData";

const ExploreSection = () => {
  // get from backend
  // carditem
  return (
    <section className=" flex flex-col lg:flex-row min-h-[400px] h-[80vh]">
      <div className="flex lg:w-1/3 items-center justify-center flex-1">
        <div className="flex gap-3 w-full h-40 justify-center items-center lg:flex-none lg:flex-col lg:items-start tracking-wider font-AbolitionTestRegular leading-none [font-size:_clamp(35px,6vw,100px)] lg:w-2/3">
          <h1 className="uppercase ">Find</h1>
          <h1 className="uppercase not-italic lg:italic lg:ml-[-12px]">
            What Interests
          </h1>
          <h1 className="uppercase text-Secondary tracking-wider">You</h1>
        </div>
      </div>
      <div className=" h-[50%] md:h-2/3 min-h-[200px] lg:h-full lg:w-2/3 gap-10 ">
        <div
          className={`overflow-x-auto h-full grid grid-flow-col md:grid-rows-2 items-center md:justify-around ${styles.scrollbar_hide}`}
        >
          {cardItems.map((card, index) => (
            <TopicCard
              key={index}
              title={card.title}
              imageUrl={card.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;

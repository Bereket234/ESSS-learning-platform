import Card from "./Card";

const ExploreSection = () => {
  return (
    <section className="flex min-h-[500px] h-[80vh]">
      <div className="flex items-center justify-center bg-slate-500 flex-1">
        <div className="bg-gray-400 font-AbolitionTestRegular leading-none  [font-size:_clamp(45px,6vw,100px)]  w-2/3">
          <h1 className="uppercase ">Find</h1>
          <h1 className="uppercase italic ml-[-12px]">What Interests</h1>
          <h1 className="uppercase text-Secondary tracking-wider">You</h1>
        </div>
      </div>
      <div className="flex flex-1">
        <Card 
        title = "Auto-Photography"
        imageUrl = "" 
        />
      </div>
    </section>
  );
};

export default ExploreSection;

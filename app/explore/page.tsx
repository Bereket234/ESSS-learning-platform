// import Card from "../components/explore/Card";
// export default function Home(){
//   const levels = [
//     {heading: "Begineer", bgUrl: "/assets/images/Explore/beginner.png",
//     frUrl: "/assets/images/Explore/intermediate.png"},
//     {heading: "Begineer",
//   bgUrl: "/assets/images/Explore/beginner.png",
//   frUrl: "/assets/images/Explore/intermediate.png"
// }, {heading: "Begineer",
// bgUrl: "/assets/images/Explore/beginner.png",
// frUrl: "/assets/images/Explore/intermediate.png"
// }]
//   return (
//     <div>
//       {levels.map((level) => (
//         <Card bgImageUrl={level.bgUrl} frontImageUrl={level.frUrl} heading={level.heading}/>
//       ))}
//     </div>

//   );
// }

// pages/index.js
// import CardsContainer from "../components/explore/Card";

const Home = () => {
  return (
    <>
      <div className="h-[151px] bg-Primary mt-0"></div>
      <div className="p-20">
        <div>
          <h1 className="font-SofiaProMedium text-4xl mb-[59px] ">
            Explore Courses based Difficulty
          </h1>
        </div>

        <div>
          <div className="bg-[url(/assets/images/explore/BeginningPage.png)] bg-cover min-h-[291px] max-w-[1723px]  border-solid border-4 mb-[130px] rounded-3xl  border-Primary ">
            <img src="" alt="Image" className="mx-auto" />
            <h2 className="font-SofiaProMedium text-Primary text-[187px] text-right py-6 mr-4">
              Beginner
            </h2>
          </div>

          <div className="bg-[url(/assets/images/explore/IntermediatePage.png)] bg-cover min-h-[250px] max-w-[1723px]  border-solid border-4 mb-[120px] rounded-3xl border-Secondary ">
            <img src="" alt="Image" className="mx-auto" />
            <h2 className="font-SofiaProMedium text-Secondary text-white text-[187px] text-left py-6 ml-6">
              Intermediate
            </h2>
          </div>

          <div className="bg-[url(/assets/images/explore/RelativeAdvancedPage.png)] bg-cover min-h-[250px] max-w-[1723px]  border-solid border-4 mb-[318px] rounded-3xl border-Primary">
            <img src="" alt="Image" className="mx-auto" />
            <h2 className="font-SofiaProMedium text-Primary text-[187px] text-right py-6 mr-4">
              Advanced
            </h2>
          </div>
        </div>
      </div>
      <div className="h-[477px] bg-Secondary mt-0"></div>
    </>
  );
};

export default Home;

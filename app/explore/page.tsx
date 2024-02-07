import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="p-20">
        <div>
          <h1 className="font-SofiaProMedium text-4xl mb-[59px] ">
            Explore Courses based Difficulty
          </h1>
        </div>

        <div>
          <Link href="/explore/Beginner" className="max-w-[1723px] mx-auto">
            <div className="bg-[url(/assets/images/explore/beginning.png)] flex bg-cover items-center justify-end min-h-[110px] max-w-[1723px] mx-auto lg:min-h-[230px] md:min-h-[180px] sm:min-h-[150px]  border-solid border-4 mb-[130px] rounded-3xl  border-Primary ">
              <h2 className="font-SofiaProMedium text-Primary xl:text-[187px] py-6 mr-4 lg:text-9xl md:text-8xl  sm:text-6xl text-4xl">
                Beginner
              </h2>
            </div>
          </Link>

          <Link href="/explore/Intermediate" className="max-w-[1723px] mx-auto">
            <div className="bg-[url(/assets/images/explore/intermediate.png)] flex bg-cover items-center justify-start min-h-[110px] max-w-[1723px] mx-auto lg:min-h-[230px] md:min-h-[180px] sm:min-h-[150px]  border-solid border-4 mb-[120px] rounded-3xl border-Secondary ">
              <h2 className="font-SofiaProMedium text-Secondary  xl:text-[187px] py-6 ml-6 lg:text-9xl md:text-8xl sm:text-6xl text-4xl">
                Intermediate
              </h2>
            </div>
          </Link>

          <Link href="/explore/Advanced" className="max-w-[1723px] mx-auto">
            <div className="bg-[url(/assets/images/explore/advanced.png)] flex bg-cover items-center justify-end min-h-[110px] max-w-[1723px] mx-auto lg:min-h-[230px] md:min-h-[180px] sm:min-h-[150px] border-solid border-4 mb-[318px] rounded-3xl border-Primary">
              <h2 className="font-SofiaProMedium text-Primary  xl:text-[187px] py-6 mr-4 lg:text-9xl md:text-8xl sm:text-6xl text-4xl">
                Advanced
              </h2>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;

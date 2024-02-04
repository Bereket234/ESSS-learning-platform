import Image from "next/image";

const GetCertified = () => {
  return (

      <section className="flex mt-5 justify-center item-center min-h-[500px] h-[60vh]">
        <div className="bg-Primary rounded-xl h-[90%] w-[90%] flex">
          <div className="flex bg-Quinary w-1/2 items-center justify-center flex-1">
            <div className="uppercase  text-Secondary flex justify-center items-center flex-col lg:items-start tracking-wider font-AbolitionTestRegular leading-none [font-size:_clamp(45px,6vw,100px)]  w-2/3">
              <h1>Get</h1>
              <h1>Certified</h1>
              <span >You</span>
            </div>
          </div>
          <div className="h-full w-1/2 gap-10 ">
            <div className="flex justify-center items-center">
            <Image
              src="/assets/images/home_page/Group 108@2x.png"
              height={0}
              width={500}
              alt="logo"
            />
            </div>
          </div>
        </div>
      </section>

  );
};

export default GetCertified;

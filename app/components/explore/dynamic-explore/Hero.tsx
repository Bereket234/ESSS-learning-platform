import Image from "next/image";

const Hero = ({ level }: { level: string }) => {
  const imageUrl = `/assets/images/explore/level/${level}.png`;

  return (
    <section className="relative">
      <div
        className={`bg-[url("/assets/images/explore/level/hero_background.png")] relative rounded-tl-2xl overflow-hidden bg-cover bg-center `}
      >
        <Image
          src={imageUrl}
          alt={`Image for ${level}`}
          width={1932}
          height={489}
        />

        <div className="absolute bottom-0 right-0 pr-16">
          <h2 className="font-SofiaProSemiBold text-Secondary text-[116px] text-left pt-60">
            {level}
          </h2>
          <h3 className="font-SofiaProMedium text-Secondary text-[38px] text-left pt-0 pb-9 mt-0">
            Explore our {level} friendly courses
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;

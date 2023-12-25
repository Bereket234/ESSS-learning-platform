// "use client";
import Image from "next/image";
// import { useState } from "react";

export default function Hero({ level }: { level: string }) {
  const imageUrl = `/assets/images/explore/${level}Page.png`;

  return (
    <section>
      <div>
        <Image
          src={imageUrl}
          alt={`Image for ${level}`}
          width={500}
          height={500}
        />
        <div />
        <h2 className="font-SofiaProMedium text-Secondary text-white text-[187px] text-left py-6 ml-6">
          {level}
        </h2>
        <h3>
          Explore our
          {level}
          friendly courses
        </h3>
      </div>
    </section>
  );
}

// export default Hero

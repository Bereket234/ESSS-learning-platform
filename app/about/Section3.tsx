import Image from "next/image";

export default function Section3() {
  return (
    <div className=" relative flex flex-col text-2xl font-SofiaProSemiBold text-Primary bg-Tertiary">
      <Image
        src="/assets/images/mission.svg"
        width={450}
        height={450}
        alt="mission"
        className="absolute ml-20"
      ></Image>
      <div className="flex w-full justify-end pr-24">
        <p className=" max-w-4xl text-center mt-20 px-10">
          Democratizing space science and technology education. We are committed
          to making the wonders of the cosmos accessible to all, inspiring the
          next generation of astronomers, astrophysicists, and space
          enthusiasts. We strive to provide high-quality educational resources,
          foster inclusivity, and ignite curiosity about the universe.
        </p>
      </div>
      <p className=" max-w-4xl text-center mt-36 pl-20">
        A world where space science is a source of inspiration and knowledge for
        everyone, regardless of their background. We envision 'Learning' as a
        global hub for space science education, where learners of all ages can
        explore the universe, share their discoveries, and become part of a
        thriving space science community.
      </p>
      <Image
        src="assets/images/vision.svg"
        width={450}
        height={450}
        alt="vision"
        className="absolute right-24 top-72"
      ></Image>
      <div className="flex flex-col mt-60">
        <div className="flex justify-center space-x-32 mb-14">
          <p className=" max-w-lg text-center rotate-1">
            <span className="bg-Primary rounded-full px-2 text-Secondary">
              Quality:
            </span>{" "}
            We are dedicated to providing top-quality education content and
            resources, supported by experts in the field.
          </p>
          <Image
            src="/assets/images/values.svg"
            width={450}
            height={450}
            className="absolute left-96 bottom-44"
            alt="values"
          />
          <p className=" max-w-xl text-center">
            <span className="bg-Primary rounded-full px-2 text-Secondary">
              Accessibility:
            </span>{" "}
            We believe in breaking down barriers to space science education,
            ensuring that no one is left behind in the quest for knowledge.
          </p>
        </div>
        <div className="flex justify-center">
          <p className=" max-w-2xl text-center -rotate-1">
            <span className="bg-Primary rounded-full px-2 text-Secondary">
              Colaboration:
            </span>{" "}
            We believe in the power of collaboration, partnering with
            like-minded organizations and experts to expand the reach and impact
            of space science education.
          </p>
          <p className=" max-w-lg text-center pl-10 pt-5 rotate-1">
            <span className="bg-Primary rounded-full px-2 text-Secondary">
              Quality:
            </span>{" "}
            We are dedicated to providing top-quality educational content and
            resources, supported by experts in the field.
          </p>
        </div>
      </div>
    </div>
  );
}

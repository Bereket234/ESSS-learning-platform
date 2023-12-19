import Image from "next/image";

function Section1() {
  return (
    <div className="flex flex-col bg-Tertiary px-4 pt-5 sm:px-5 md:px-10 lg:flex-row ">
      <div
        style={{ lineHeight: 0.85 }}
        className="flex-col lg:flex-1 mt-10 leading-none md:text-4xl text-Primary font-AbolitionTestRegular"
      >
        <p style={{ fontSize: "6.5em" }}>WHO</p>
        <p style={{ fontSize: "6.5em" }}>ARE</p>
        <p style={{ fontSize: "6.5em" }}>WE?</p>
      </div>
      <div className="flex lg:w-3/4 mt-4 pt-5 justify-center items-start lg:pt-1 lg:justify-start lg:px-7">
        <div className="flex flex-col text-center justify-center font-SofiaProMediumItalic text-Primary text-lg md:text-xl">
          <div className="flex flex-col lg:pl-10 pb-5 space-y-4">
            <Image
              src="/assets/images/learning.png"
              height={100}
              width={300}
              objectFit="contain"
              alt="logo"
            />
            <p className="max-w-4xl">
              is a new initiative by the{" "}
              <span className="bg-Secondary rounded-full">
                Ethiopian Space Science Society (ESSS),
              </span>{" "}
              dedicated to making space science and technology education
              accessible to everyone. At ESSS, we're passionate about exploring
              the mysteries of the cosmos and sharing that knowledge with the
              world.
            </p>
          </div>
          <div className="flex items-center">
            <Image
              src="/assets/images/group_pic.png"
              height={1000}
              width={1000}
              objectFit="contain"
              alt="Group Picture"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1

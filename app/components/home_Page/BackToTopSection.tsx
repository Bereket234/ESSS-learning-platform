import Image from "next/image";
import styles from "./home_page.module.css";
import Link from "next/link";

const BackToTopSection = () => {
  return (
    <div className="flex w-full mt-7 justify-end h-[5vh] ">
      <Link
       href={"#heroSection"}
        className={`flex items-center justify-center rounded-2xl p-3 mr-5 hover:translate-y-[-0.2rem] ${
          styles.back_to_top
        }`}
      >
        Back to Top
        <Image
          className=" ml-4 w-7 bottom-5  right-5 "
          src="/assets/images/home_page/union.svg"
          width={100}
          height={100}
          alt="hexagon"
        />
      </Link>
    </div>
  );
};

export default BackToTopSection;

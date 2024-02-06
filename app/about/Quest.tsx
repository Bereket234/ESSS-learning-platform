import Image from "next/image";
import Link from "next/link";
import styles from './About.module.css';

export default function Quest() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="pl-20 py-10 overflow-visible min-w-fit ">
        <Image
          src="/assets/images/about/combined.png"
          alt="picture"
          width={900}
          height={900}
        />
      </div>

      <div
        className= {`flex-col font-AbolitionTestRegular text-4xl text-center text-Primary pt-24 pl-0 ml-0 ${styles.lineHeight}`}
      >
        <p className={styles.questFont}>TAKING</p>
        <p className={styles.questFont}>YOU ON</p>
        <p className={styles.questFont}>A</p>
        <div className="flex items-center justify-center mb-20">
          <Image
            src="/assets/images/about/quest.png"
            alt="picture"
            width={480}
            height={300}
          />
        </div>
        <div className="relative">
          <Link
            href="/"
            className="absolute bottom-0 right-96 bg-Primary text-Secondary py-6 px-10 mx-6 rounded-full font-SofiaProRegular items-center hover:bg-Secondary hover:text-Primary transition-colors min-w-max"
          >
            Get Started
          </Link>
          <Link
            href="/"
            className="absolute bottom-0 right-0 bg-Secondary text-Primary py-6 px-10 rounded-full font-SofiaProRegular items-center hover:bg-Primary hover:text-Secondary transition-colors min-w-max"
          >
            Become A Member
          </Link>
        </div>
      </div>
    </div>
  );
}

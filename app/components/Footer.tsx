import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaTelegram,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <section className="flex flex-col text-Secondary bg-Primary sm:w-full sm:h-[200px] md:w-full md:h-[300px] lg:w-full lg:h-[350px]">
        <div className="flex sm:w-[150px] sm:h-[100px] md:w-[600px] md:h-[150px] lg:w-full lg:h-[200px]">
          {/* About ESSS */}
          <div className="flex flex-col sm:w-[300px] sm:h-[100px] md:w-[400px] md:h-[250px] lg:w-[500px] lg:h-[200px]">
            <Image
              src={"/assets/images/footer/esss-learning.png"}
              alt="Logo"
              width={280}
              height={110}
              className="flex items-center p-2 sm:w-[150px] sm:h-[120px] md:h-[120px] md:w-[250px] lg:h-[150px] lg:w-[250px] mt-6"
            />

            <div className="hidden font-small items-left font-SofiaProExtraLight p-4 md:flex md:w-[450px] md:h-[150px] lg:w-[550px] lg:h-[300px] mx-4">
              <p>
                Learning is a new initiative by the Ethiopian Space Science
                Society (ESSS), dedicated to making space science and technology
                education accessible to everyone. At ESSS, we're passionate
                about exploring the mysteries of the cosmos and sharing that
                knowledge with the world.
              </p>
            </div>
          </div>

          {/* Sections */}
          <div className="flex flex-row px-2 pt-2 mt-4 sm:w-full sm:h-[100px] sm:text-xs md:w-full md:h-[300] md:text-base lg:w-[700px] lg:h-[200px] lg:text-lg font-SofiaProRegular ml-24">
            <div className="flex flex-col items-center justify-center px-8 sm:w-[150px] sm:h-[100px] md:w-[400px] md:h-[150px] lg:w-[300px] lg:h-[150px]">
              <ul className="p-4">
                <li className="py-2">Home</li>
                <li className="py-2">Courses</li>
                <li className="py-2">About</li>
              </ul>
            </div>

            <div className="flex flex-col items-center justify-center px-8 sm:w-[150px] sm:h-[100px] md:w-[400px] md:h-[150px] lg:w-[450px] lg:h-[150px]">
              <ul className="p-4">
                <li className="py-2">ESSS Main Page</li>
                <li className="py-2">About ESSS</li>
                <li className="py-2">Membership</li>
              </ul>
            </div>

            <div className="flex flex-col items-center justify-center px-8 sm:w-[150px] sm:h-[100px] md:w-[400px] md:h-[150px] lg:w-[450px] lg:h-[150px]">
              <ul className="p-4">
                <li className="py-2">ESSS Science</li>
                <li className="py-2">Working Groups</li>
                <li className="py-2">ESSS Branches</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-b-2 border-light border-Secondary p-4 mx-8"></div>

        <div className="flex sm:h-[100px] sm:w-[700px] md:w-[100] md:h-[200px] lg:h-[200px] lg:w-full">
          <div className="flex flex-col w-3/4 justify-between items-end sm:h-[250px] sm:w-[350px] md:w-[400px] md:h-[250px] lg:h-[150px] lg:w-[1000px] ">
            <ul className="font-SofiaProLightItalic text-lg">
              <li className="p-2 text-center">Powered By:</li>
              <li className=" font-SofiaProUltraLight mr-6">
                Ethiopian Space Science Society
              </li>
              <li className="p-2 text-center">ⓒ 2023 | ፳፻፲፮</li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="flex flex-col w-1/4 items-end justify-end sm:w-[350px] sm:h-[50px] md:w-[450px] md:h-[50px] lg:h-[100px] lg:w-[550px] ml-24">
            <div className="flex items-end justify-ceneter SofiaProRegular mr-6">
              @officialess
            </div>
            <div className="flex gap-1 px-6 mb-4 justy-between items-center">
              <Link href="https://www.facebook.com/officialesss">
                <FaFacebook size={15} />
              </Link>
              <Link href="https://www.instagram.com/officialesss/">
                <FaInstagram size={15} />
              </Link>
              <Link href="https://www.youtube.com/c/EthiopianSpaceScienceSociety">
                <FaYoutube size={15} />
              </Link>
              <Link href="https://t.me/officialesss">
                <FaTelegram size={15} />
              </Link>
              <Link href="https://twitter.com/officialesss">
                <FaXTwitter size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

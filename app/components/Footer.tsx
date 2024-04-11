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
      <footer className="text-Secondary bg-Primary">
        <div className="container md:mx-auto px-4 w-full"> 
        <div className="flex flex-col md:flex-row">
          {/* About ESSS */}
          <div className="flex flex-col w-full md:w-1/2 md:mb-0">
            <Image
              src={"/assets/images/footer/esss-learning.png"}
              alt="Logo"
              width={280}
              height={110}
              className="flex items-center md:items-start p-2 mt-6 "
            />

            <div className="hidden font-small items-left font-SofiaProExtraLight p-4 md:flex md:text-sm lg:text-base lg:mx-4">
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
          <div className="flex flex-row sm:w-1/4 md:w-1/2 px-2 pt-2 mt-4 font-SofiaProRegular lg:ml-24 md:mr-12">
            <div className="flex flex-col items-center justify-center sm:px-4 md:px-8 text-xs md:text-sm lg:text-base">
              <ul className="p-4">
                <li className="py-2 whitespace-nowrap">Home</li>
                <li className="py-2 whitespace-nowrap">Courses</li>
                <li className="py-2 whitespace-nowrap">About</li>
              </ul>
            </div>

            <div className="flex flex-col items-center justify-center sm:px-4 md:px-8 text-xs md:text-sm lg:text-base">
              <ul className="p-4">
                <li className="py-2 whitespace-nowrap">ESSS Main Page</li>
                <li className="py-2 whitespace-nowrap">About ESSS</li>
                <li className="py-2 whitespace-nowrap">Membership</li>
              </ul>
            </div>

            <div className="flex flex-col items-center justify-center sm:px-4 md:px-8 text-xs md:text-sm lg:text-base">
              <ul className="p-4">
                <li className="py-2 whitespace-nowrap">ESSS Science</li>
                <li className="py-2 whitespace-nowrap">Working Groups</li>
                <li className="py-2 whitespace-nowrap">ESSS Branches</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-b-2 border-light border-Secondary p-4 mx-8"></div>

        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:w-3/4 justify-between items-center md:items-end md:mr-48">
            <ul className="font-SofiaProLightItalic text-lg">
              <li className="p-2 text-center">Powered By:</li>
              <li className="font-SofiaProUltraLight md:mr-6">
                Ethiopian Space Science Society
              </li>
              <li className="p-2 text-center">ⓒ 2023 | ፳፻፲፮</li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="flex flex-col md:w-1/4 md:items-end items-center md:mt-12">
            <div className="flex items-end justify-ceneter SofiaProRegular md:mr-6">
              @officialess
            </div>
            <div className="flex gap-1 md:px-6 mb-4 justy-between items-center">
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
        </div>
      </footer>
   
  );
};

export default Footer;

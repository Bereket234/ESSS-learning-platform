import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTelegram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col text-Secondary bg-Primary sm:w-[350] sm:h-[50] md:w-[350] md:h-[100] lg:w-[1400] lg:h-[600]">
      <div className="flex sm:w-[300] md:w-[400] lg:w-[900]">
        {/* About ESSS */}
        <div className="flex flex-col w-1/2">
          <div className="flex items-center p-2 sm:w-[50] sm:h-[60] lg:h-[110] lg:w-[280] mt-4">
            <Image
              src={"/assets/images/esss-learning.png"}
              alt="Logo"
              width={280}
              height={110}
            />
          </div>

          <div className="flex font-small items-left font-SofiaProExtraLight p-4 md:w-[300] md:h-[200] lg:w-[600] lg:h-[400]">
            <p>
              Learning is a new initiative by the Ethiopian Space Science
              Society (ESSS), dedicated to making space science and technology
              education accessible to everyone. At ESSS, we're passionate about
              exploring the mysteries of the cosmos and sharing that knowledge
              with the world.
            </p>
          </div>
        </div>

        {/* Lists */}
        <div className="flex flex-row px-2 pt-2 mt-4 sm:w-[250] sm:h-[100] md:w-[400] md:h-[300] lg:w-[900] lg:h-[400] font-SofiaProRegular">
          <div className="flex flex-col flex-nowrap items-center justify-center px-8 sm:w-150 sm:h-100 md:w-250 md:h-150 lg:w-400 lg:h-200">
            <ul className="sm:h-[150] sm:w-[100] md:w-[200] md:h[250] lg:h-[400] lg:w-[300] p-4">
              <li className="py-2">Home</li>
              <li className="py-2">Courses</li>
              <li className="py-2">About</li>
            </ul>
          </div>

          <div className="flex flex-col flex-nowrap items-center justify-center px-8 sm:w-150 sm:h-100 md:w-250 md:h-150 lg:w-400 lg:h-200">
            <ul className="p-4 sm:h-[150] sm:w-[100] md:w-[200] md:h[250] lg:h-[400] lg:w-[300]">
              <li className="py-2">ESSS Main Page</li>
              <li className="py-2">About ESSS</li>
              <li className="py-2">Membership</li>
            </ul>
          </div>

          <div className="flex flex-col flex-nowrap items-center justify-center px-8 sm:w-150 sm:h-100 md:w-250 md:h-150 lg:w-400 lg:h-200">
            <ul className=" p-4 sm:h-[150] sm:w-[100] md:w-[200] md:h[250] lg:h-[400] lg:w-[300] ">
              <li className="py-2">ESSS Science</li>
              <li className="py-2">Working Groups</li>
              <li className="py-2">ESSS Branches</li>
            </ul>
          </div>

          <div className="boarder"></div>
        </div>
      </div>

      <div className="border-b-2 border-light border-Secondary p-4 mx-8"></div>

      <div className="flex sm:h-[150] sm:w-[350] md:w-[400] md:h[250] lg:h-[350] lg:w-[400]">
        <div className="flex flex-col w-3/4 justify-between items-end">
          <ul className="font-SofiaProLightItalic text-lg">
            <li className="p-2 text-center">Powered By:</li>
            <li className=" font-SofiaProUltraLight mr-6">Ethiopian Space Science Society</li>
            <li className="p-2 text-center">ⓒ 2023 | ፳፻፲፮</li>
          </ul>
          
        </div>

        {/* Contacts */}
        <div className="flex flex-col items-end w-1/2 justify-end">
          <div className="text-Secondary flex items-center justify-end SofiaProRegular mr-6">
            @officialess
          </div>
          <div className="text-Secondary flex gap-1 px-6 mb-4 justy-between items-center">
            <FaFacebook size={15} />
            <FaInstagram size={15} />
            <FaYoutube size={15} />
            <FaTelegram size={15} />
            <FaTwitter size={15} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

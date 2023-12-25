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
    <main className="flex flex-col text-Secondary bg-Primary sm:320px md:700px lg:900px">
      <div className="flex sm:300px m:400px lg:900px">
        <div className="flex flex-col w-2/3">
          <div className="flex items-center p-2 lg:900">
            <Image
              src={"/assets/images/ESSS-LOGO.png"}
              alt="Logo"
              width={80.85}
              height={40.16}
            />
          </div>

          <div className="flex w-2/3 font-light items-center font-SofiaProExtraLight p-4 sm-hidden md:400px lg:900px">
            <p>
              Learning is a new initiative by the Ethiopian Space Science
              Society (ESSS), dedicated to making space science and technology
              education accessible to everyone. At ESSS, we're passionate about
              exploring the mysteries of the cosmos and sharing that knowledge
              with the world.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 px-2 pt-2 mt-4 sm-250 md-400 lg:900px mr-8">
          <div className="flex flex-container w-full mx-auto items-center justify-center px-4">
            <ul className="font-SofiaProSemiBold sm:150px md:250px lg:400px p-2">
              <li>Home</li>
              <li>Courses</li>
              <li>About</li>
            </ul>
          </div>

          <div className="flex flex-container w-full mx-auto items-center justify-center px-4 flex-wrap">
            <ul className="font-SofiaProSemiBold p-2">
              <li>ESSS Main Page</li>
              <li>About ESSS</li>
              <li>Membership</li>
            </ul>
          </div>

          <div className="flex flex-container w-full mx-auto items-center justify-center px-4 flex-wrap">
            <ul className="font-SofiaProSemiBold p-2">
              <li>ESSS Science</li>
              <li>Working Groups</li>
              <li>ESSS Branches</li>
            </ul>
          </div>

          <div className="boarder"></div>
        </div>
      </div>

      <div className="border-b-2 border-light border-Secondary p-4 mx-4"></div>

      <div className="grid grid-rows-3 sm:250px lg:800px">
        <div className="flex flex-wrap justify-center flex-3/4 items-center">
          Powered By:
        </div>
        <div className="grid grod-row-2 font-SofiaProUltraLightItalic">
          <div className="flex items-center justify-center font-light">
            Ethiopian Space Science Society
          </div>
          <div className="flex flex-row items-end justify-end">
            <div className="text-Secondary font-SofiaProRegular px-4">
              @officialess
            </div>
            <FaFacebook size={15} color="#E0F869" />
            <FaInstagram size={15} color="#E0F869" />
            <FaYoutube size={15} color="E0F869" />
            <FaTelegram size={15} color="E0F869" />
            <FaTwitter size={15} color="E0F869" />
          </div>
        </div>
        <div className="flex justify-center items-center">ⓒ 2023 | ፳፻፲፮</div>
      </div>
    </main>
  );
};

export default Footer;

import Image from "next/image";

const SignIn = () => {
  return (
    <div className="grid  border grid-cols-3 bg-Tertiary mt-6">
      <div className="grid grid-cols-2 relative">
        <div className="bg-Primary"></div>
        <div className="bg-Tertiary"></div>
        <Image
          src="/assets/images/signin.png"
          alt="Log In"
          width={700}
          height={600}
          className="absolute mt-24"
        />
      </div>

      <div className="flex flex-col justify-between items-start mt-24 p-4 ">
        <div className="flex p-4 ">
          <h1 className="p-6 text-Primary text-2xl font-SofiaProBold">
            Log in to ESSS
          </h1>
          <Image
            src="/assets/images/login-learning.png"
            alt="Learning"
            width={181}
            height={24}
          />
        </div>

        <div className="flex flex-col w-3/4 p-2">
          <button className="flext bg-Secondary rounded-full p-4 text-Primary text-lg font-semibold">
            Signin with Google
          </button>
          <div className="flex items-right justify-center ml-24 text-Primary text-lg font-SofiaProSemiBold p-2">
            or Sign in with email
          </div>
        </div>

        <div className="flex w-full items-start justify-start bg-Tertiary">
          <form>
            <h1 className="flex justify-start font-SofiaSemiBoldPro font-bold text-Primary py-2">
              Username or Email
            </h1>
            <label>
              <input
                type="text"
                id="userName"
                name="user name"
                className="border-Primary rounded w-full p-4"
              />
            </label>

            <h1 className="flex justify-start items-start font-SofiaSemiBoldPro font-bold text-Primary py-2 w-full">
              Password
            </h1>
            <label>
              <input
                type="text"
                id="password"
                name="password"
                className="border-Primary rounded w-full p-4"
              />
            </label>
          </form>
        </div>

        <div className="flex flex-col pt-4 w-3/4 px-2">
          <button className="flext bg-Primary rounded-full p-4 text-Secondary text-lg font-semibold md:w-[400px] lg:w-[500px]">
            Sign In
          </button>
          <div className="flex justify-center text-Primary text-lg font-SofiaProSemiBold ml-4 pt-2">
            Don't have an account?{" "}
            <span className="font-extraBold">Register Now!</span>
          </div>
        </div>

        <div className="border-b-2 border-black p-4 mt-4 md:w-[400px] lg:w-[500px]"></div>

        <div className="flex">
          <div className="flex flex-col items-end justify-center">
            <ul className="font-SofiaProLightItalic text-lg">
              <li className="p-2 text-center">Powered By:</li>
              <li className=" font-SofiaProUltraLight mr-6">
                Ethiopian Space Science Society
              </li>
              <li className="p-2 text-center">ⓒ 2023 | ፳፻፲፮</li>
            </ul>
          </div>
      </div>
    </div>
    </div>
  );
};

export default SignIn;

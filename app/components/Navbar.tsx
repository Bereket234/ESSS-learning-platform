"use client";
import Image from "next/image";
import Link from "next/link";
import { TbWorld } from "react-icons/tb";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [openHamburger, setOpenHamburger] = useState(false);

  const toggelHamburger = () => {
    setOpenHamburger(!openHamburger);
  };

  return (
    <nav className="relative flex container h-18 w-full items-center mx-auto my-3 align-baseline px-5">
      <div className="flex justify-center align-baseline">
        <div className="flex item-center">
          <Image
            src="/assets/images/ESSS-LOGO.png"
            alt="logo"
            width={80}
            height={50}
            objectFit="contain"
          />
        </div>
        <div className="flex item-center pl-5">
          <Image
            src="/assets/images/learning.png"
            height={80}
            width={200}
            objectFit="contain"
            alt="logo"
          />
        </div>
      </div>
      <div className="flex container justify-between">
        <div className="hidden md:flex space-x-6 pl-14 pr-5">
          <Link
            href={"/home"}
            className="text font-bold text-Primary hover:text-Primary/70 lg:text-xl"
          >
            Home
          </Link>
          <Link
            href={"/courses"}
            className="text font-bold text-Primary hover:text-Primary/70 lg:text-xl"
          >
            Courses
          </Link>
          <Link
            href={"/about"}
            className="text font-bold text-Primary hover:text-Primary/70 lg:text-xl"
          >
            About
          </Link>
        </div>
        <div className="flex space-x-6">
          <Link
            href={"/login"}
            className="hidden text font-bold text-Primary md:block hover:text-Primary/70 lg:text-xl"
          >
            Login
          </Link>
          <button className="hidden text font-bold text-Secondary bg-Primary rounded-full px-2 py-1 baseline md:block hover:bg-Primary/70 text-sm lg:text-x">
            Sign Up
          </button>
          <TbWorld className="hidden text-Primary md:block text-3xl" />
        </div>
        <div className="flex justify-between md:hidden">
          <div className="flex space-x-4 pr-4">
            <Link
              href={"/login"}
              className=" text font-bold text-Primary hover:text-Primary/70 lg:text-xl"
            >
              Login
            </Link>
            <button className=" text font-bold text-Secondary bg-Primary rounded-full px-2 py-1 baseline hover:bg-Primary/70 text-sm">
              Sign Up
            </button>
            <TbWorld className="hidden text-Primary md:block text-3xl" />
          </div>
          <button onClick={toggelHamburger} className="flex md:hidden">
            {!openHamburger && (
              <RxHamburgerMenu className="md:hidden text-3xl text-Primary" />
            )}
            {openHamburger && (
              <IoMdClose className="md:hidden text-3xl text-Primary" />
            )}
          </button>
          {openHamburger && (
            <div className="md:hidden">
              <div
                id="menu"
                className="absolute flex flex-col items-center self-end py-6 mt-12 space-y-6 font-bold bg-Tertiary sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
              >
                <Link
                  href={"/home"}
                  className="text font-bold text-Primary hover:text-Primary/70 lg:text-xl"
                >
                  Home
                </Link>
                <Link
                  href={"/courses"}
                  className="text font-bold text-Primary hover:text-Primary/70 lg:text-xl"
                >
                  Courses
                </Link>
                <Link
                  href={"/about"}
                  className="text font-bold text-Primary hover:text-Primary/70 lg:text-xl"
                >
                  About
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

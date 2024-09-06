"use client";
import Image from "next/image";
import logo from "./../../../public/assets/images/logo.svg";
import burgerButton from "./../../../public/assets/images/burger_button.svg";
import crossButton from "./../../../public/assets/images/cross_button.svg";
import NavButtons from "./NavButtons";

import { useState } from "react";

export default function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <nav className="w-full shadow-custom bg-primary h-[6.5rem] lg:h-[9rem] xl:h-[11.25rem]">
      <div className="container flex items-center justify-between h-full ">
        <Image
          src={logo}
          className="mr-9 sm:mr-0 h-[49px] w-[49px] md:h-[75px] md:w-[75px]  lg:h-[99px] lg:w-[99px]"
          alt="logo"
        />
        {/* buttons */}
        <div className=" hidden lg:block grow">
          <NavButtons />
        </div>

        {/* burger button  */}
        <div className="block lg:hidden">
          <button
            onClick={() => {
              setShowMobileNav(true);
            }}
            className="text-black"
          >
            <Image
              src={burgerButton}
              alt="burger button "
              height={23}
              width={35}
            />
          </button>
        </div>

        {/* mobile nav buttons */}
        {showMobileNav && (
          <div className="fixed block lg:hidden  top-0 right-0 left-0">
            <div className="bg-primary flex flex-col p-[25px] w-full justify-center">
              <div className="logo_and_crossw-full flex items-center justify-between">
                <Image src={logo} className="h-[44px] w-[44px] " alt="logo" />
                <button
                  onClick={() => {
                    setShowMobileNav(false);
                  }}
                >
                  <Image
                    src={crossButton}
                    alt="burger button "
                    height={23}
                    width={23}
                  />
                </button>
              </div>

              {/* nav buttons */}
              <div className="mt-9">
                <NavButtons />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

"use client";
import Image from "next/image";
import logo from "./../../../public/assets/images/logo.svg";
import burgerButton from "./../../../public/assets/images/burger_button.svg";
import crossButton from "./../../../public/assets/images/cross_button.svg";
import NavButtons from "./NavButtons";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { useState } from "react";

export default function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const router = useRouter();
  var handleNavClick = function (url) {
    setShowMobileNav(false);
    router.push(url);
  }

  return (
    <nav className="w-full shadow-custom bg-primary h-[5rem] lg:h-[8rem] xl:h-[9rem]">
      <div className="container flex items-center justify-between h-full ">
        {/* go to / route on logo click */}
        <Link href="/">
          <Image
            src={logo}
            className="mr-2 lg:mr-4 h-[49px] w-[49px] md:h-[75px] md:w-[75px]  lg:h-[99px] lg:w-[99px]"
            alt="logo"
          />
        </Link>
        {/* buttons */}
        <div className=" hidden lg:block grow">
          <NavButtons handleNavClick={handleNavClick} />
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
          <div className="fixed block lg:hidden z-40  top-0 right-0 left-0">
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
                <NavButtons  handleNavClick={handleNavClick}/>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

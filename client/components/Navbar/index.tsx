"use client";
import React, { useEffect } from "react";
import SClogosvg from "/public/greylogo.svg";
import Contact from "/public/icons/mail.svg";
import Event from "/public/icons/event.svg";
import HomeDark from "/public/icons/Home_dark.svg";
import Join from "/public/icons/joinus.svg";
import Team from "/public/icons/teams.svg";
import Link from "next/link";
import Hamburger from "@/components/Hamburger/index";
const navItemTextStyle =
  "text-small leading-none -rotate-90 origin-top-left translate-y-[100%] !leading-none";
const navItemBorderStyle =
  "relative border border-gray-600 h-14 w-12 overflow-hidden";
const logoPositionStyle =
  "absolute bottom-0 right-0 stroke-primary_text group-hover:stroke-white z-10 duration-500";
const orangeSlideStyle =
  "absolute bg-pop_orange border-t-primary_text border-t h-1/3 w-full -bottom-[100%] group-hover:bottom-0 duration-500";

const Navbar: React.FC = () => {
  // useEffect(() => {
  //   if (window.innerWidth > 768) { // Only run the code if the viewport is wider than 768px
  //     let lastScrollStop = window.scrollY;
  //     const navbar =
  //       document.getElementById("navbar") || document.createElement("div");
  //     window.addEventListener("scroll", function () {
  //       var scrollTop = window.scrollY || document.documentElement.scrollTop;
  //       if (scrollTop > lastScrollStop && scrollTop > 80) {
  //         navbar.style.top = "-100%";
  //       } else {
  //         navbar.style.top = "0";
  //       }
  //       lastScrollStop = scrollTop;
  //     });
  //   }
  // });

  return (
    <>
    <div
      id="navbar"
      className=" h-[76px] w-full border-b-[0.5px] border-primary_text fixed bg-background z-10 py-2 px-4 duration-[600ms]"
    >
      <div className="flex justify-between h-full items-center">
        {/*need to add the hamburger here*/}
        <SClogosvg />

        <div className="hidden md:flex ">
          <Link href="/">
            <div className="flex space-x-1 group">
              <div className={navItemBorderStyle}>
                <HomeDark className={logoPositionStyle} />
                <div className={orangeSlideStyle}></div>
              </div>
              <p className={navItemTextStyle}>Home</p>
            </div>
          </Link>

          <Link href="/teams">
            <div className="flex space-x-1 group">
              <div className={navItemBorderStyle}>
                <Team className={logoPositionStyle} />
                <div className={orangeSlideStyle}></div>
              </div>
              <span className={navItemTextStyle}>Teams</span>
            </div>
          </Link>

          <Link href="/events">
            <div className="flex space-x-1 group">
              <div className={navItemBorderStyle}>
                <Event className={`${logoPositionStyle} right-0.5`} />
                <div className={orangeSlideStyle}></div>
              </div>
              <span className={navItemTextStyle}>Events</span>
            </div>
          </Link>

          <Link href="/#contact">
            <div className="flex space-x-1 group">
              <div className={navItemBorderStyle}>
                <Contact className={`${logoPositionStyle} right-0.5`} />
                <div className={orangeSlideStyle}></div>
              </div>
              <span className={navItemTextStyle}>Contact</span>
            </div>
          </Link>

          <Link href="#">
            <div className="flex space-x-1 group">
              <div className={navItemBorderStyle}>
                <Join className={`${logoPositionStyle} bottom-0.5 right-1`} />
                <div className={orangeSlideStyle}></div>
              </div>
              <span className={navItemTextStyle}>Join Us</span>
            </div>
          </Link>
        </div>
        <Hamburger />
      </div>
      
    </div>
    
    </>
  );
};

export default Navbar;

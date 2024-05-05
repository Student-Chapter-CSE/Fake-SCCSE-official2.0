"use client";
import React from "react";
import SClogosvg from "@/public/sclogo.svg";
import Home from "@/public/icons/Home_light.svg";
import Team from "@/public/icons/teams.svg";
import Event from "@/public/icons/event.svg";
import Contact from "@/public/icons/mail.svg";
import Join from "@/public/icons/joinus.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="h-[72px] w-full border-b-[0.5px] border-primary_text fixed bg-background z-10 py-2 ">
        <div className="hidden md:flex justify-between items-center  pr-12">
          {/*need to add the hamburger here*/}

          <SClogosvg />

          <div className="flex items-center space-x-10">
            <Link href="#hero">
              <div className="flex relative space-x-1">
                <div className="border border-gray-600 space-x-1 h-14 p-6 rounded relative">
                  <div className="border-y-2 border-gray-600 " />

                  <Home className="absolute bottom-0 right-0" />

                  <p className="absolute bottom-1 pb-3 left-10 transform -rotate-90 text-xs  ">
                    Home
                  </p>
                </div>
              </div>
            </Link>
            <Link href="#about">
              <div className="flex relative space-x-1">
                <div className="border border-gray-600 space-x-1 h-14 p-6 rounded relative">
                  <Team className="absolute bottom-0 right-0" />

                  <p className="absolute bottom-1 pb-3 left-10 transform -rotate-90 text-xs  ">
                    Aboutus
                  </p>
                </div>
              </div>
            </Link>
            <Link href="#events">
              <div className="flex relative space-x-1">
                <div className="border border-gray-600 space-x-1 h-14 p-6 rounded relative">
                  <Event className="absolute bottom-0 right-0" />

                  <p className="absolute bottom-1 pb-3 left-10 transform -rotate-90 text-xs  ">
                    Events
                  </p>
                </div>
              </div>
            </Link>
            <Link href="#contact">
              <div className="flex relative space-x-1">
                <div className="border border-gray-600  h-14 p-6 rounded relative">
                  <Contact className="absolute bottom-0 right-0" />

                  <p className="absolute bottom-2 pb-4 left-10 transform -rotate-90 text-[0.6rem]  ">
                    ContactUs
                  </p>
                </div>
              </div>
            </Link>
            <Link href="#">
              <div className="flex relative space-x-1">
                <div className="border border-gray-600 space-x-1 h-14 p-6 rounded relative">
                  <Join className="absolute bottom-0 right-0" />

                  <p className="absolute bottom-2 pb-3 left-10 transform -rotate-90 text-xs  ">
                    JoinUs
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

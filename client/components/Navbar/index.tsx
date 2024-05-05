import React from "react";
import SClogosvg from "/public/sclogo.svg";
import Contact from "/public/icons/mail.svg";
import Event from "/public/icons/event.svg";
import Home from "/public/icons/Home_light.svg";
import Join from "/public/icons/joinus.svg";
import Team from "/public/icons/teams.svg";
import Link from "next/link";

const navItemTextStyle = "transform text-xs -rotate-90"
const navItemBorderStyle = "relative border border-gray-600 h-14 p-6 rounded"
const logoPositionStyle = "absolute bottom-0 right-0"

const Navbar: React.FC = () => {
  return (
    <div className="h-[72px] w-full border-b-[0.5px] border-primary_text fixed bg-background z-10 py-2 px-4">
      <div className="hidden md:flex justify-between">
        {/*need to add the hamburger here*/}
        <SClogosvg />

        <div className="flex">
          <Link href="#hero">
            <div className="flex">
              <div className={navItemBorderStyle}>
                <Home className={logoPositionStyle} />
              </div>
              <span className={navItemTextStyle}>Home</span>
            </div>
          </Link>

          <Link href="#about">
            <div className="flex">
              <div className={navItemBorderStyle}>
                <Team className={logoPositionStyle} />
              </div>
              <span className={navItemTextStyle}>About Us</span>
            </div>
          </Link>

          <Link href="#events">
            <div className="flex">
              <div className={navItemBorderStyle}>
                <Event className={`${logoPositionStyle} right-0.5`} />
              </div>
              <span className={navItemTextStyle}>Events</span>
            </div>
          </Link>

          <Link href="#contact">
            <div className="flex">
              <div className={navItemBorderStyle}>
                <Contact className={`${logoPositionStyle} right-0.5`} />
              </div>
              <span className={navItemTextStyle}>Contact Us</span>
            </div>
          </Link>

          <Link href="#">
            <div className="flex">
              <div className={navItemBorderStyle}>
                <Join className={`${logoPositionStyle} bottom-0.5 right-1`} />
              </div>
              <span className={navItemTextStyle}>Join Us</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

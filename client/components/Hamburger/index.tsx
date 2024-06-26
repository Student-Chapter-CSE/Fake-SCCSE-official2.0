import React from "react";
import { useState } from "react";
import SClogosvg from "@/public/greylogo.svg"
import Link from "next/link";
import Burger from "@/public/icons/HAMBURGER.svg";
import Cross from "@/public/icons/Cross.svg";
import { useEffect } from "react";
const Hamburger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div id="navbar" className="fixed top-0 left-0 w-full z-50 md:hidden">
      

      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" fixed top-5 right-5 z-50  "
      >
        
          {isOpen ? (
            // "X" icon
            <Cross
            
            />
          ) : (
            //hamburger icon
            <Burger
            />
          )}
        
      </button>

      <div
        className={`md:hidden fixed flex flex-col bg-background items-center font-bold text-secondary_text justify-center top-0 right-0 h-full w-[70%] z-20 transform transition-transform duration-200 ease-in-out font-antonio text-[30px] ${
          isOpen ? "animate-slide-in delay-200" : "translate-x-full"
        } md:translate-x-0 md:static md:transition-none`}
      >
        <Link
          href="/"
          className="py-3 transition-colors duration-200 "
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          href="/teams"
          className="py-3 delay-400 transition-colors duration-200 "
          onClick={() => setIsOpen(false)}
        >
          Teams
        </Link>
        <Link
          href="/events"
          className="py-3 delay-600 transition-colors duration-200 "
          onClick={() => setIsOpen(false)}
        >
          Events
        </Link>
        <Link
          href="/#contact"
          className="py-3 delay-800 transition-colors duration-200 "
          onClick={() => setIsOpen(false)}
        >
          Contact Us
        </Link>
        <Link
          href="#"
          className="py-3 delay-1000 transition-colors duration-200 "
          onClick={() => setIsOpen(false)}
        >
          Join Us
        </Link>
      </div>
    </div>
  );
};

export default Hamburger;
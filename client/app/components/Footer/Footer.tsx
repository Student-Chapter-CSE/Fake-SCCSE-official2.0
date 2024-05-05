import React from "react";
import RoundMarquee from "@/public/roundmarquee.svg";
import AOTsvg from "@/public/whitelogo.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-fit flex flex-col bg-primary_text items-center justify-center pt-12 gap-11 px-4 text-body text-gray-200 font-light">
      <hr className="border-b-[0.5px] border-secondary_text my-4 w-[70%]" />
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-5 md:gap-0">
        <div className="flex flex-col items-center">
          <AOTsvg className="w-48" />
          IEI Students&apos; Chapter CSE (AOT)
        </div>
        <div className="flex flex-col gap-5">
          <Link href="">Teams </Link>
          <Link href="">Events</Link>
          <Link href="">Join Us </Link>
        </div>
        <div className="flex flex-row gap-5">
          <div className="flex flex-col gap-5">
            <span className=" ">Evolve Inspire Guidance </span>
            <span className=" ">Evolve Inspire Guidance </span>
          </div>
          <div className="h-20vh flex items-end">
            <RoundMarquee className="animate-spin-slow flex items-end w-20" />
          </div>
        </div>
      </div>
      <h4 className=" font-montserrat text-white ">
        &copy; IEI Students&apos; Chapter CSE (AOT), 2024
      </h4>
    </div>
  );
};

export default Footer;

import React from "react";
import RoundMarquee from "/public/roundmarquee.svg";
import AOTsvg from "/public/whitelogo_new.svg";
import Link from "next/link";

const LINKS = [
  { name: "Teams", href: "/teams" },
  { name: "Events", href: "/events" },
  { name: "Join Us", href: "#" },
];

const Footer: React.FC = () => {
  return (
    <div className="w-[100svw] h-fit flex flex-col bg-primary_text items-center justify-center pt-12 gap-11 px-4 text-body text-gray-200 font-light">
      <hr className="border-b-[0.5px] border-secondary_text my-4 w-[70%]" />
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-5 md:gap-0">
        <div className="flex flex-col items-center">
          <AOTsvg className="w-48" />
          {/* IEI Students&apos; Chapter CSE (AOT) */}
        </div>
        <div className="flex flex-col gap-5">
          {LINKS.map((item, idx) => (
            <Link key={idx} href={item.href}>
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-row gap-5">
          <div className="flex flex-col gap-5">
            <span>Evolve Inspire Guidance </span>
            <span>Learn Connect Grow </span>
          </div>
          <div className="h-20vh flex items-end">
            <RoundMarquee className="animate-spin-slow flex items-end w-20" />
          </div>
        </div>
      </div>
      <h4 className="text-white">
        &copy; IEI Students&apos; Chapter CSE (AOT), {new Date().getFullYear()}
      </h4>
    </div>
  );
};

export default Footer;

import React from "react";
import Arrow from "/public/icons/arrowUpRight.svg";
import HeaderTitle from "../HeaderTitle";
import Link from "next/link";
import Button from "@/components/Button/index";
const socialLinkStyle =
  "text-secondary_text text-[1rem]  flex gap-2 items-center hover:text-primary_text hover:font-medium";
const contactInputStyle =
  "appearance-none block w-full bg-background border-b-[0.5px] border-black text-secondary_text  py-5 px-5 leading-tight focus:outline-none  caret-pop_orange focus:border-pop_orange focus:border-b";

const ContactUs: React.FC = () => {
  return (
    <div
      id="contact"
      className="relative w-full items-center justify-center text-body font-montserrat"
    >
      <HeaderTitle
        title="CONTACT"
        subtitle="US"
        content="We are a group of students from (SCCSE)"
        subtitleFontSize="2.5rem"
      />
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row md:items-start items-center justify-center w-[70%] border-t-[0.5px] border-primary_text gap-20 pt-5 pb-40 ">
          <h4 className="  text-secondary_text ">
            Write to us for any queries or collaborations
          </h4>
          <form className="w-full max-w-lg items-center justify-center">
            <div className="flex flex-col gap-8">
              <input
                className={contactInputStyle}
                id="grid-first-name"
                type="text"
                placeholder="Your Name"
              />
              <input
                className={contactInputStyle}
                id="grid-last-name"
                type="email"
                placeholder="Your Email"
              />
              <textarea
                className={`${contactInputStyle} resize-none`}
                id="message"
                placeholder="Enter your message"
              />
              <div className="flex justify-end">
                <Button title="SEND" />
              </div>
            </div>
          </form>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center w-[70%] border-t-[0.5px] border-primary_text gap-14 pt-5 pb-40">
          <h4 className=" text-secondary_text ">
            Follow us on our socials, get connected and involved in the
            community
          </h4>
          <div className="w-full flex flex-col items-end justify-center px-4 py-2 gap-3">
            <Link
              href="https://x.com/ieiaot?s=20"
              target="_blank"
              className={socialLinkStyle}
            >
              X<Arrow />
            </Link>
            <Link
              href="https://www.facebook.com/sccseaot"
              target="_blank"
              className={socialLinkStyle}
            >
              Facebook
              <Arrow />
            </Link>
            <Link
              href="https://www.linkedin.com/company/sccseaot/"
              target="_blank"
              className={socialLinkStyle}
            >
              LinkedIn
              <Arrow />
            </Link>
            <Link
              href="https://www.instagram.com/sccse_aot/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
              target="_blank"
              className={socialLinkStyle}
            >
              Instagram
              <Arrow />
            </Link>
            <Link
              href="mailto:sccseaot@gmail.com"
              target="_blank"
              className={socialLinkStyle}
            >
              sccseaot@gmail.com
              <Arrow />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

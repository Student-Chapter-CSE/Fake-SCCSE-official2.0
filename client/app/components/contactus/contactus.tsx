import React from "react";
import Headertitle from "../Headertitle/Headertitle";

const Contactus = () => {
  return (
    <div className="relative w-full max-h-fit items-center justify-center">
      <Headertitle
        title="CONTACT"
        subtitle="US"
        content="We are a group of students from (SCCSE)"
        subtitleFontSize="2.5rem"
      />
      <div className="flex flex-col justify-center items-center">
        <hr className="border-b-[0.5px] border-black my-4 w-[951px]" />
        <div className="flex flex-col md:flex-row items-start justify-center w-[951px] gap-20 pt-5 pb-40 ">
          <h4 className="text-[1rem] font-montserrat text-secondary_text ">
            Write to us for any queries or collaborations
          </h4>
          <form className="w-full max-w-lg items-center justify-center">
            <div className="flex flex-wrap -mx-3 mb-6">
              <input
                className="appearance-none block w-full bg-background border-b-[0.5px] border-black text-secondary_text  py-5 px-5 mb-3 leading-tight focus:outline-none font-montserrat "
                id="grid-first-name"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="appearance-none block w-full bg-background border-b-[0.5px] border-black py-5 px-5 leading-tight focus:outline-none  text-secondary_text font-montserrat "
                id="grid-last-name"
                type="email"
                placeholder="Your Email"
              />
              <textarea
                className="appearance-none block w-full bg-background border-b-[0.5px] border-black py-5 px-5 leading-tight focus:outline-none text-secondary_text font-montserrat "
                id="message"
                placeholder="Enter your message"
              />
            </div>
          </form>
        </div>
        <hr className="border-b-[0.5px] border-black my-4 w-[951px]" />
        <div className="flex flex-col md:flex-row items-start justify-center w-[951px] gap-20 pt-5 pb-40 px-0">
          <h4 className="text-[1rem] font-montserrat text-secondary_text ">
            Follow us on our socials, get connected and involved in the
            community
          </h4>
          <div className="w-full flex flex-col max-w-lg items-end justify-center left-0">
            <a href="#" className="text-secondary_text text-[1rem] font-montserrat">Facebook</a>
            <a href="#" className="text-secondary_text text-[1rem] font-montserrat">LinkedIn</a>
            <a href="#" className="text-secondary_text text-[1rem] font-montserrat">Instagram</a>
            <a href="#" className="text-secondary_text text-[1rem] font-montserrat">X</a>
            <a href="#" className="text-secondary_text text-[1rem] font-montserrat">sccseaot@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;

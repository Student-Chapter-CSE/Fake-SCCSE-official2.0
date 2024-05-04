import React from "react";
import Headertitle from "../Headertitle/Headertitle";
import Image from "next/image";
import RoundMarquee from "@/public/roundmarquee.svg";
const Aboutus: React.FC = () => {
  return (
    
    <div className="relative w-full h-fit items-center justify-center">
      <Headertitle
        title="ABOUT"
        subtitle="US"
        content="We are a group of students from (SCCSE)"
        subtitleFontSize="2.5rem"
      />
      <div className="flex flex-col justify-center items-center ">
        <hr className="border-b-[0.5px] border-black my-4 w-[951px]" />

        <div className="flex flex-row items-start justify-center w-[951px] pt-5 pb-40 gap-72 ">
          <h4 className="text-[1rem] font-montserrat text-secondary_text ">
            Brief about us
          </h4>
          <div className="w-full flex flex-row max-w-lg item-start justify-center gap-2 left-0">
            <h4 className="text-[1rem] font-montserrat text-secondary_text ">
              (01)
            </h4>

            <div className="text-[1rem] font-montserrat text-secondary_text ">
              Hey Folks, we are a college community, committed to promoting
              knowledge and values to people who look up to us! We work
              together, to gain skills and enjoy our college life by
              participating in events and doing something productive! Our Tech
              Team promotes development and innovation. Consisting of talented
              and enthusiastic students, we actively engage in learning new
              technologies and applying them for the betterment of ourselves and
              Students&apos; Chapter! The Public Relations (PR) Team ensures
              effective communication and outreach within the student community
              and beyond. We are proud to have a PR Team with a variety of
              skills and plethora of qualities! Our Design Team helps us in
              various types of design, be it UI/UX or swags, captions, posters.
              The members of this team are really enthusiastic about working
              together in a community!
            </div>
          </div>
        </div>

        <div className="flex flex-row items-start justify-center w-[951px] pt-5 pb-40 gap-72 ">
          <h4 className="text-[1rem] font-montserrat text-secondary_text ">
            Till now we have
          </h4>
          <div className="w-full flex flex-row max-w-lg item-start gap-2 left-0 -ml-6">
            <h4 className="text-[1rem] font-montserrat text-secondary_text ">
              (02)
            </h4>
            <div className="text-[1rem] font-montserrat text-secondary_text ">
              <div className="flex flex-row">
                <span className="font-montserrat text-pop_orange">250+</span>
                <span className="font-montserrat"> Community members</span>
              </div>
              <div className="flex flex-row">
                <span className="font-montserrat text-pop_orange">50+</span>
                <span className="font-montserrat"> Events</span>
              </div>
              <div className="flex flex-row">
                <span className="font-montserrat text-pop_orange">3000+</span>
                <span className="font-montserrat"> Supporters</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-b-[0.5px] border-black my-4 w-[951px]" />
        <div className="flex flex-row pt-5">
          <div className="flex flex-col ">
            <div className="flex flex-row gap-2">
            <Image src="/hod_img.webp" alt="HOD" width={300} height={400} />
            <div className='h-20vh flex items-end'>
                        <RoundMarquee className='animate-spin-slow flex items-end' />
                    </div>
            </div>
            <div className="font-montserrate text-primary_text mt-5 ">
            Prof. Prasenjit Das,<br/> Faculty Advisor,<br/>  IEI Students' Chapter CSE(AOT)
          </div>
          
          </div>
          <div className="w-full flex flex-row max-w-lg item-start gap-2 ">
            <h4 className="text-[1rem] font-montserrat text-secondary_text ">
              (03)
            </h4>

            <div className="text-[1rem] font-montserrat text-secondary_text ">
            As the head of IEI Students&apos; Chapter CSE (AOT), I warmly welcome you! Our chapter is a dynamic hub for aspiring engineers to connect, collaborate, and grow. Through engaging events and projects, we aim to nurture your passion for computer science and engineering. Join us as we explore and innovate together!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;

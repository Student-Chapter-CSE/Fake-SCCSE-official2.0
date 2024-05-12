import React from "react";
import HeaderTitle from "../HeaderTitle";
import Image from "next/image";
import RoundMarquee from "/public/roundmarquee.svg";

const AboutUs: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full h-fit items-center justify-center text-body"
      data-scroll-container
    >
      <div data-scroll data-scroll-sticky data-scroll-target="#about" className="w-full sticky">
        <HeaderTitle
          title="ABOUT"
          subtitle="US"
          content="We are a group of students from (SCCSE)"
          subtitleFontSize="2.5rem"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-16">
        <div className="flex flex-col gap-10 pb-16 items-center text-secondary_text">
          <div className="flex flex-col md:flex-row justify-between w-[80%] md:w-[70%] gap-4 border-t-[0.5px] border-primary_text pt-12">
            <h4 data-scroll data-scroll-delay="0.4" data-scroll-speed="0.2">Brief about us</h4>
            <div data-scroll data-scroll-delay="1" data-scroll-speed="0.2" className="flex gap-2 md:w-1/2 w-full">
              <h4>(01)</h4>
              <p>
                Hey Folks, we are a college community, committed to promoting
                knowledge and values to people who look up to us! We work
                together, to gain skills and enjoy our college life by
                participating in events and doing something productive! Our Tech
                Team promotes development and innovation. Consisting of talented
                and enthusiastic students, we actively engage in learning new
                technologies and applying them for the betterment of ourselves
                and Students&apos; Chapter! The Public Relations (PR)
                Team ensures Students&apos; Chapter! The Public Relations (PR)
                Team ensures effective communication and outreach within the
                student community and beyond. We are proud to have a PR Team
                with a variety of skills and plethora of qualities! Our Design
                Team helps us in various types of design, be it UI/UX or swags,
                captions, posters. The members of this team are really
                enthusiastic about working together in a community!
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between w-[80%] md:w-[70%] gap-4">
            <h4 data-scroll data-scroll-delay="0.4" data-scroll-speed="0.2">Till now we have</h4>
            <div data-scroll data-scroll-delay="1" data-scroll-speed="0.2" className="flex gap-2 md:w-1/2 w-full">
              <h4>(02)</h4>
              <div>
                <div className="flex">
                  <span className="text-pop_orange">250+&nbsp;</span>
                  <span>Community members</span>
                </div>
                <div className="flex">
                  <span className="text-pop_orange">50+&nbsp;</span>
                  <span>Events</span>
                </div>
                <div className="flex">
                  <span className="text-pop_orange">3000+&nbsp;</span>
                  <span>Supporters</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row pt-12 border-t-[0.5px] border-primary_text w-[80%] md:w-[70%] text-secondary_text">
          <div className="flex flex-col md:w-1/2 items-center md:items-start">
            <div className="flex gap-2 justify-center md:justify-start">
              <div className="w-48 h-60 relative [transform:rotateY(180deg)] overflow-hidden">
                <Image
                  src="/hod_img.webp"
                  alt="HOD"
                  fill
                  style={{ objectFit: "cover" }}
                  className="translate-x object-left"
                  unoptimized
                  quality={100}
                />
              </div>
              <div
                className="flex items-end">
                <RoundMarquee className="animate-spin-slow flex items-end w-10" />
              </div>
            </div>
            <div className="text-primary_text mt-5 w-[70%]">
              Prof. Prasenjit Das,
              <br /> Faculty Advisor,
              <br /> IEI Students&apos; Chapter CSE(AOT)
            </div>
          </div>
          <div className="md:w-1/2 w-full flex gap-2 mt-10">
            <h4>(03)</h4>
            <p>
              As the head of IEI Students&apos; Chapter CSE (AOT), I warmly
              welcome you! Our chapter is a dynamic hub for aspiring engineers
              to connect, collaborate, and grow. Through engaging events and
              projects, we aim to nurture your passion for computer science and
              engineering. Join us as we explore and innovate together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

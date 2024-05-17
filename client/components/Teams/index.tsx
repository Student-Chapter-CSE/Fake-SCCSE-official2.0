
import Image from "next/image";
import React from "react";
import HeaderTitle from "../HeaderTitle";
import Card from "../Card";
import Footer from "../Footer";

import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Team_header from "@/public/Teamheader.svg";
import Link from 'next/link'
import {
  ManagementTeam,
  TechTeam,
  PrTeam,
  DesignTeam,
  Conveners,
  PhotographyTeam,
} from "@/public/data/index";
import TeamsPhotoAnimation from "../TeamsPhotoAnimation";



const Index = () => {
  return (
    <div className="bg-background text-sm flex flex-col items-end overflow-hidden">
      <div className="flex flex-col md:flex-row  md:justify-end gap-40 md:gap-4 pt-24 md:pt-32 w-[80%] lg:w-[70%] pr-24">
        <div className="flex overflow-hidden ">
          <TeamsPhotoAnimation />
        </div>

        <div className="font-light text-large text-primary_text text-end flex justify-center">
          <div className="flex flex-col pt-20 w-[25vmax] justify-end">
            <Team_header />

            <div className="font-normal text-[.9rem]  tracking-wider h-fit ">
              Lets meet the wizards/mages the community
            </div>
          </div>
        </div>
      </div>

      <HeaderTitle
        title="CORE"
        subtitle="TEAM"
        content="The backbone,The undisputable dominators"
        subtitleFontSize="1.5rem"
      />

      <div className="flex flex-col-reverse sm:flex-row  items-end w-[80%] lg:w-[70%] pr-24">
        <div className="flex flex-col space-y-4 sm:space-y-40 mt-4 sm:mt-0 sm:mr-4">
          <p className="flex justify-end sm:pr-4 text-right">The management team</p>
          <div className="flex justify-end">
            <p className="text-right text-wrap ">
              Transparency, determination, dedication, trust and companionship
              defines the management tenure 2024.
            </p>
          </div>
        </div>
        <Image
          src="/Frame 100.png"
          alt="management team"
          height={200}
          width={400}
        />
      </div>


      <div className="flex justify-end pr-24 mt-20 w-full">
        <div className="bg-white pl-8 pr-12  py-6 mt-12 flex flex-col justify-center items-end gap-2">
          <div className="h-[220px] w-fit">
            <div className="relative ">
              <Image
                priority
                src="https://utfs.io/f/921b9059-a9b0-4c4c-bce1-38f57fb5432d-cea5qo.avif"
                alt="convenor"
                height={200}
                width={150}
              />

              <div className="absolute flex flex-col h-full top-0 right-0 translate-x-[100%]">


                <div className="flex flex-col gap-2 px-2 ">
                  <Link href="#" className="w-fit text-gray-400 hover:text-secondary_orange duration-300">
                    <FaFacebook size={16} />
                  </Link>

                  <Link href="https://www.instagram.com/in_dealing_dead_03/" className="w-fit text-gray-400 hover:text-secondary_orange duration-300">
                    <IoLogoInstagram size={16} />
                  </Link>

                  <Link href="#" className="w-fit text-gray-400 hover:text-secondary_orange duration-300">
                    <FaTwitter size={16} />
                  </Link>

                  <Link href="https://www.linkedin.com/in/aratrik-bandyopadhyay-14755a222/" className="w-fit text-gray-400 hover:text-secondary_orange duration-300">
                    <FaLinkedin size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <h1 className="text-orange-400 font-bold">
              Convenor
            </h1>
            <h1 className="">Aratrik Bandopadhaya</h1>
          </div>
        </div>
      </div>

      {/* core members */}
      <div className="w-full flex justify-center pr-24">
        <div className="justify-end flex flex-wrap gap-20 w-fit">
          {ManagementTeam.map((member, index) => (
            <Card key={index} name={member.name} photo={member.img} designation={member.designation}
              instagram={member.instagram} facebook={member.facebook} twitter={member.twitter} linkedin={member.linkedin}
            />
          ))}
        </div>
      </div>

      <HeaderTitle
        title="DESIGN"
        subtitle="TEAM"
        content="Aestheticism,beauty and gracefulness"
        subtitleFontSize="1.25rem"
      />
      <div className="justify-end flex flex-wrap gap-20 w-fit pr-24">
        {DesignTeam.map((member, index) => (
          <Card key={index} name={member.name} photo={member.img}
            designation={member.designation}
            instagram={member.instagram} facebook={member.facebook} twitter={member.twitter} linkedin={member.linkedin}
          />
        ))}
      </div>

      <HeaderTitle
        title="TECH"
        subtitle="TEAM"
        content="Charisma,Perception and Ingeniousness"
        subtitleFontSize="1.25rem"
      />
      <div className="justify-end flex flex-wrap gap-20 w-fit pr-24">
        {TechTeam.map((member, index) => (
          <Card key={index} name={member.name} photo={member.img}
            designation={member.designation}
            instagram={member.instagram} facebook={member.facebook} twitter={member.twitter} linkedin={member.linkedin} />
        ))}
      </div>

      <HeaderTitle
        title="PR & MARKETING"
        subtitle="TEAM"
        content="Pros at the art of mind manipulation"
        subtitleFontSize="1.25rem"
      />
      <div className="justify-end flex flex-wrap gap-20 w-fit pr-24">
        {PrTeam.map((member, index) => (
          <Card key={index} name={member.name} photo={member.img}
            designation={member.designation}
            instagram={member.instagram} facebook={member.facebook} twitter={member.twitter} linkedin={member.linkedin}
          />
        ))}
      </div>

      <HeaderTitle
        title="PHOTOGRAPHY"
        subtitle="TEAM"
        content="Click,Set and Flash"
        subtitleFontSize="1.25rem"
      />

      <div className="justify-end flex flex-wrap gap-20 w-fit pr-24">
        {PhotographyTeam.map((member, index) => (
          <Card key={index} name={member.name} photo={member.img}
            designation={member.designation}
            instagram={member.instagram} facebook={member.facebook} twitter={member.twitter} linkedin={member.linkedin}
          />
        ))}
      </div>



      <HeaderTitle
        title="PREVIOUS CONVENORS"
        subtitle=""
        content="Community influencers"
        subtitleFontSize="1.25rem"
      />

      <div className="justify-end flex flex-wrap gap-20 w-fit pr-24">
        {Conveners.map((member, index) => (
          <Card key={index} name={member.name} photo={member.img}
            designation={member.designation}
            instagram={member.instagram} facebook={member.facebook} twitter={member.twitter} linkedin={member.linkedin}
          />
        ))}
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Index;

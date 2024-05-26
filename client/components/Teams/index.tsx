"use client";
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
import Link from "next/link";

import {
  ManagementTeam,
  TechTeam,
  PrTeam,
  DesignTeam,
  Conveners,
  PhotographyTeam,
} from "@/public/data/index";
import TeamsPhotoAnimation from "../TeamsPhotoAnimation";
import Team from "@/public/Group 310.png";
const coreteam = "cd7e03bb-84b6-4f4b-80f7-bbfb4fafe891-1tktb.avif";

const Index = () => {
  return (
    <div className="bg-background text-sm flex flex-col items-center ">
      <div className="flex md:justify-end  justify-center w-full ">
        <div className="w-[31rem] h-[20rem] pt-28 md:mr-28 ">
          <Image
            src={Team}
            alt="header"
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>

      <HeaderTitle
        title="CORE"
        subtitle="TEAM"
        content="The backbone,The undisputable dominators"
        subtitleFontSize="text-[1.2rem]"
        margin="my-36"
        padding="pl-28 md:pl-36"
        subpadding={"pr-2 pb-8"}
      />

      <div className="w-fit flex flex-col-reverse sm:flex-row items-center md:items-end md:w-[80%] lg:w-[70%] px-6 md:px-0">
        <div className="flex flex-col space-y-4 sm:space-y-40 mt-4 sm:mt-0 sm:mr-4">
          <p className="flex justify-end sm:pr-4 text-right font-montserrat">
            The management team
          </p>
          <div className="flex justify-end">
            <p className="text-right text-wrap font-montserrat ">
              Transparency, determination, dedication, trust and companionship
              defines the management tenure 2024.
            </p>
          </div>
        </div>
        <Image
          src={`https://utfs.io/f/${coreteam}`}
          alt="management team"
          objectFit="cover"
          height={200}
          width={400}
        />
      </div>

      <div className="flex justify-end pr-20 md:pr-24 mt-20 w-full">
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
                  <Link
                    href="#"
                    className="w-fit text-gray-400 hover:text-secondary_orange duration-300"
                  >
                    <FaFacebook size={16} />
                  </Link>

                  <Link
                    href="https://www.instagram.com/in_dealing_dead_03/"
                    className="w-fit text-gray-400 hover:text-secondary_orange duration-300"
                  >
                    <IoLogoInstagram size={16} />
                  </Link>

                  <Link
                    href="#"
                    className="w-fit text-gray-400 hover:text-secondary_orange duration-300"
                  >
                    <FaTwitter size={16} />
                  </Link>

                  <Link
                    href="https://www.linkedin.com/in/aratrik-bandyopadhyay-14755a222/"
                    className="w-fit text-gray-400 hover:text-secondary_orange duration-300"
                  >
                    <FaLinkedin size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <h1 className="text-orange-400 font-bold">Convenor</h1>
            <h1 className="">Aratrik Bandopadhaya</h1>
          </div>
        </div>
      </div>

      {/* core members */}
      <div className="w-full flex justify-center pr-20 md:pr-24">
        <div className="justify-end flex flex-wrap gap-20 w-fit">
          {ManagementTeam.map((member, index) => (
            <Card
              key={index}
              name={member.name}
              photo={member.img}
              designation={member.designation}
              instagram={member.instagram}
              facebook={member.facebook}
              twitter={member.twitter}
              linkedin={member.linkedin}
            />
          ))}
        </div>
      </div>

      <HeaderTitle
        title="DESIGN"
        subtitle="TEAM"
        content="Aestheticism,beauty and gracefulness"
        subtitleFontSize="text-[1.2rem]"
        margin="my-36"
        padding="pl-24 md:pl-36"
        subpadding={"pr-2 pb-8"}
      />
      <div className="justify-end flex flex-wrap gap-20 w-fit pr-20 md:pr-24">
        {DesignTeam.map((member, index) => (
          <Card
            key={index}
            name={member.name}
            photo={member.img}
            designation={member.designation}
            instagram={member.instagram}
            facebook={member.facebook}
            twitter={member.twitter}
            linkedin={member.linkedin}
          />
        ))}
      </div>

      <HeaderTitle
        title="TECH"
        subtitle="TEAM"
        content="Charisma,Perception and Ingeniousness"
        subtitleFontSize="text-[1.2rem]"
        margin="my-36"
        padding="pl-24 md:pl-36"
        subpadding={"pr-2 pb-8"}
      />
      <div className="justify-end flex flex-wrap gap-20 w-fit pr-20 md:pr-24">
        {TechTeam.map((member, index) => (
          <Card
            key={index}
            name={member.name}
            photo={member.img}
            designation={member.designation}
            instagram={member.instagram}
            facebook={member.facebook}
            twitter={member.twitter}
            linkedin={member.linkedin}
          />
        ))}
      </div>

      <HeaderTitle
  title="PR &   MARKETING"
  subtitle="TEAM"
  content="Pros at the art of mind manipulation"
  titleFontSize="text-[2.1rem] md:text-[4rem]" // Use a smaller font size on small screens
  subtitleFontSize="text-[1.3rem] md:text-[1.2rem]"
  margin="my-36"
  padding="pl-10 md:pl-36"
  subpadding={"pt-2 md:pt-0 pr-16 md:pr-1 pb-10 pl-14 md:pl-0"}
/>
      <div className="justify-end flex flex-wrap gap-20 w-fit pr-20 md:pr-24">
        {PrTeam.map((member, index) => (
          <Card
            key={index}
            name={member.name}
            photo={member.img}
            designation={member.designation}
            instagram={member.instagram}
            facebook={member.facebook}
            twitter={member.twitter}
            linkedin={member.linkedin}
          />
        ))}
      </div>

      <HeaderTitle
        title="PHOTOGRAPHY"
        subtitle="TEAM"
        content="Click,Set and Flash"
        titleFontSize="text-[3rem] md:text-[4rem]"
        subtitleFontSize="text-[1rem] md:text-[1.2rem]"
        margin="my-36"
        padding="pl-10 md:pl-36"
        subpadding={"pr-2 md:pr-2 pb-3 md:pb-8"}
      />

      <div className="justify-end flex flex-wrap gap-20 w-fit pr-20 md:pr-24">
        {PhotographyTeam.map((member, index) => (
          <Card
            key={index}
            name={member.name}
            photo={member.img}
            designation={member.designation}
            instagram={member.instagram}
            facebook={member.facebook}
            twitter={member.twitter}
            linkedin={member.linkedin}
          />
        ))}
      </div>

      <HeaderTitle
        title="PREVIOUS CONVENORS"
        subtitle=""
        content="Community influencers"
        titleFontSize="text-[2rem] md:text-[4rem]"
        subtitleFontSize=""
        margin="my-36"
        padding="pl-10 md:pl-36"
      />

      <div className="justify-end flex flex-wrap gap-20 w-fit pr-20 md:pr-24">
        {Conveners.map((member, index) => (
          <Card
            key={index}
            name={member.name}
            photo={member.img}
            designation={member.designation}
            instagram={member.instagram}
            facebook={member.facebook}
            twitter={member.twitter}
            linkedin={member.linkedin}
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

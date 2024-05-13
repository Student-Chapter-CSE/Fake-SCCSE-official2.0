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
import { motion } from "framer-motion";
import Team_header from "@/public/Teamheader.svg";

import {
  ManagementTeam,
  TechTeam,
  PrTeam,
  DesignTeam,
  PreviousTeam,
} from "@/public/data/index";

const Index = () => {
  return (
    <div className="bg-background">
      <div className="flex   flex-col md:flex-row  justify-between w-full  gap-4 pt-32 space-x-64">
        <div className="flex flex-row gap-0 position-relative h-48 overflow-hidden ml-48">
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 1.5, delay: 0.8 }}
            className="absolute left-0 ml-[10%]"
          >
            <Image src="/Base.png" alt="header" width={250} height={200} />
          </motion.div>
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 1.5, delay: 0.4 }}
            className="absolute left-52 ml-[10%]" 
          >
            <Image src="/Base.png" alt="header" width={250} height={200} />
          </motion.div>
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 1.5, delay: 0.2 }}
            className="absolute left-96 ml-[10%]" 
          >
            <Image src="/Base.png" alt="header" width={250} height={200} />
          </motion.div>
        </div>

        <div className="pr-[8%]">
          <div className="font-anton font-light text-large text-primary_text text-end  ">
            <div className="flex flex-col space-y-8 pt-16">
              <Team_header />

              <div className="font-normal font-montserrat text-[.9rem]  tracking-wider h-fit ">
                Lets meet the wizards/mages the community
              </div>
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

      <div className="flex flex-row">
        <div className="flex flex-col space-y-40">
          <p className="flex justify-end pr-4">The management team</p>
          <div className="flex justify-end">
            <p className="w-1/2   ">
              Transparency,determination,dedication,trust,and companionship
              defines the management tenure 2024
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

      <div className="flex flex-row  justify-end pr-24 mt-20 ">
        <div className="border border-black h-[23rem] w-[18rem] mt-12 flex justify-center items-center relative">
          <Image
            src="/20681554-bb6c-4387-a020-ab0f1b8f86a1-adq5wx.avif"
            alt="convenor"
            height={400}
            width={200}
          />

          <div className="flex flex-col justify-between space-y-36 ">
            <h1 className="text-orange-400 text-xl text-bold transform rotate-90 flex justify-start absolute top-16 right-0  ">
              Convenor
            </h1>

            <div className="space-y-4 ml-1">
              <FaFacebook color="orange" size={25} />
              <IoLogoInstagram color="orange" size={25} />
              <FaTwitter size={25} color="orange" />
              <FaLinkedin color="orange" size={25} />
            </div>
          </div>
          <div className="absolute bottom-0">
            <h1 className="text-xl ">Aratrik Bandopadhaya</h1>
          </div>
        </div>
      </div>

      {/* core members */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pr-10 pl-32">
        {ManagementTeam.map((member, index) => (
          <Card key={index} name={member.name} photo={member.img} />
        ))}
      </div>

      <HeaderTitle
        title="DESIGN"
        subtitle="TEAM"
        content="Aestheticism,beauty and gracefulness"
        subtitleFontSize="1.25rem"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pr-10 pl-32">
        {DesignTeam.map((member, index) => (
          <Card key={index} name={member.name} photo={member.img} />
        ))}
      </div>

      <HeaderTitle
        title="TECH"
        subtitle="TEAM"
        content="Charisma,Perception and Ingeniousness"
        subtitleFontSize="1.25rem"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pr-10 pl-32">
        {TechTeam.map((member, index) => (
          <Card key={index} name={member.name} photo={member.img} />
        ))}
      </div>

      <HeaderTitle
        title="PR & MARKETING"
        subtitle="TEAM"
        content="Pros at the art of mind manipulation"
        subtitleFontSize="1.25rem"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pr-10 pl-32">
        {PrTeam.map((member, index) => (
          <Card key={index} name={member.name} photo={member.img} />
        ))}
      </div>

      <HeaderTitle
        title="PHOTOGRAPHY"
        subtitle="TEAM"
        content="Click,Set and Flash"
        subtitleFontSize="1.25rem"
      />

      <HeaderTitle
        title="PREVIOUS CONVENORS"
        subtitle=""
        content="Community influencers"
        subtitleFontSize="1.25rem"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pl-4">
        {PreviousTeam.map((member, index) => (
          <Card key={index} name={member.name} photo={member.img} />
        ))}
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Index;

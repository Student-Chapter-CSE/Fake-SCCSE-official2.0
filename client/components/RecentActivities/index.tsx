"use client";
import React, { useEffect,useState } from "react";
import Button from "../Button";
import Headertitle from "../HeaderTitle";
import Image from "next/image";
import Link from 'next/link';
import { eventsData } from "@/public/data";
import {motion, useScroll, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
export interface CardProps {
  width?: number;
  height?: number;
  subText?: string;
  Text?: string;
  align?: string;
  date?:string;
  month?:string;
  year?:string;
  img?:string;
  gap?:string;
}

const recent=eventsData.filter((event)=>event.category==="recent").slice(0,2);


const Recent: React.FC = () => {
  return (
    <div id="events" className=" w-full flex flex-col lg:items-end phone:items-center">
      <Headertitle
        title="RECENT"
        subtitle="ACTIVITIES"
        content="We are a group of students from (SCCSE)"
        subtitleFontSize="10px"
        margin="my-36"
        padding="pl-12"
      />
      <div className="w-fit h-fit items-center justify-center">
        <div className="">
          <div className="flex flex-col gap-16">
            {/* <Card width={300} height={400} />
            <Card width={300} height={400} /> */}
            {
              recent.map((item, index) => {
                const dateObj = new Date(item.date);
                const day = String(dateObj.getUTCDate()).padStart(2, '0');
                const month = dateObj.toLocaleString('default', { month: 'short' });
                const year = String(dateObj.getUTCFullYear());
                return (
                  <Card
                    key={index}
                    width={300}
                    height={400}
                    Text={item.heading}
                    subText={item.content}
                    align="start"
                    date={day}
                    month={month}
                    year={year}
                    img={item.img}
                    gap={item.gap}
                  />
                );
              })
            }
          </div>
          {/* <div className="flex justify-end w-full mt-24">
            <Link href="/events" passHref>
              <Button title="VIEW ALL" />
            </Link>
          </div> */}
          <div className=" h-fit lg:w-[50.5rem] md:w-[42rem] phone:w-[17.5rem] mt-[6rem]">
              <div className="flex  justify-end w-full  ">
                <Link href="/events" passHref>
                  <Button title="VIEW ALL" />
                </Link>
              </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export const Card: React.FC<CardProps> = ({
  gap,
  img,
  date,
  month,
  year,
  width = 300,
  height = 400,
  subText = "Some content about the event",
  Text = "TechQuisitive 3.0",
  align = "center",
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [hasAnimated, setHasAnimated] = useState(false);
  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start("visible");
      setHasAnimated(true);
    }
  }, [controls, inView]);

  return (
    <div
      className={`w-full h-full xl:w-full lg:w-[68rem] md:w-[48rem] flex flex-col items-end justify-end md:flex-row lg:items-start phone:items-center md:gap-10 phone:gap-5`}
    >
      <div
        className={`md:w-[20rem] phone:flex-col-reverse sm:flex-col xl:h-[45rem] mxl:h-[40rem] lg:ml-0 flex flex-col lg:w-full sm:w-[20rem] md:h-[20rem] lg:h-[20rem] sm:h-fit md:items-end sm:items-end justify-between`}
      >
        <motion.h1
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", duration: 4, delay: 0.2 },
          },
          hidden: {
            opacity: 0,
            x: "-100px",
          },
        }}
        className="lg:text-[1.1rem] xl:text-[3rem] mxl:text-[2.5rem] md:text-[1.4rem] sm:text-[0.7rem] justify-end phone:items-center flex text-primary_text font-montserrat">
          {subText}
        </motion.h1>
        <div>
          <motion.p
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              x: 0,
              transition: { type: "spring", duration: 1.5, delay: 0.2 },
            },
            hidden: {
              opacity: 0,
              x: "-100px",
            },
          }}
          className="md:text-[3.7rem] xl:text-[6rem] mxl:text-[5.5rem] justify-end flex text-primary_text font-anton lg:text-[3.4rem] sm:text-[1.7rem]">
            {Text}
          </motion.p>
        </div>
      </div>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
          hidden: { opacity: 0, scale: 0.8 },
        }}
      className="relative xl:w-[80rem] mxl:w-[75rem] mxl:h-[40rem] xl:h-[45rem] md:h-[22rem] mphone:h-[10rem] lg:w-[40rem] h-full sm:w-[20rem] sm:h-[15rem] lphone:w-[15rem] lphone:h-[15rem] phone:w-[10rem] phone:h-[7rem]">
        <Image src={`https://utfs.io/f/${img}`} alt="Event Image" fill className="object-contain" />
      </motion.div>
      <div className="flex xl:h-[45rem] xl:mr-10 flex-col lphone:w-[15rem] phone:w-[10rem] md:w-fit md:h-[22rem] phone:items-end md:items-start md:text-start phone:text-end lg:h-[20rem]">
        <motion.h1
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", duration: 4, delay: 0.2 },
          },
          hidden: {
            opacity: 0,
            x: "-100px",
          },
        }}
        className="lg:w-[15rem] xl:text-[6rem] mxl:text-[5rem] text-primary_text font-anton lg:text-[2.4rem] sm:text-[2.5rem]">
          {month}
        </motion.h1>
        <hr className="border-b-[0.5px] border-black w-[44px]" />
        <motion.h1
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", duration: 1.5, delay: 0.2 },
          },
          hidden: {
            opacity: 0,
            x: "-100px",
          },
        }}
        className="lg:w-[15rem] xl:text-[6.8rem] mxl:text-[5rem] text-secondary_orange font-anton lg:text-[3rem] sm:text-[1.7rem]">
          {date} th
        </motion.h1>
      </div>
    </div>
  );
};

export default Recent;

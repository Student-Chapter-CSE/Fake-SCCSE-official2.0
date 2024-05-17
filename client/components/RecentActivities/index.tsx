import React from "react";
import Button from "../Button";
import Headertitle from "../HeaderTitle";
import Image from "next/image";
import Link from 'next/link'
import { log } from "console";

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

const Recent: React.FC = () => {
  return (
    <div id="events" className=" w-full flex flex-col items-center">
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
            <Card width={300} height={400} />
            <Card width={300} height={400} />
          </div>
          {/* <div className="flex justify-end w-full mt-24">
            <Link href="/events" passHref>
              <Button title="VIEW ALL" />
            </Link>
          </div> */}
          <div className=" h-fit ">
              <div className="flex justify-end w-full mt-24">
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

export const Card: React.FC<CardProps> = ({gap, img,date,month,year, width = 300, height = 400,subText="Some content about the event",Text="TechQuisitive 3.0",align="center" }) => {
  console.log(gap)
  return (
    <div className={`w-fit h-fit xl:w-full  flex flex-col md:flex-row lg:items-start phone:items-center  gap-5`}>
      <div className={` xl:h-[45rem] mxl:h-[40rem]   lg:ml-0 flex flex-col lg:w-full  sm:w-[20rem] md:h-[10rem] lg:h-[20rem] sm:h-fit md:items-end sm:items-end justify-between  `}>
        <h1 className=" lg:text-[1.1rem] xl:text-[3rem] mxl:text-[2.5rem] md:text-[.9rem] sm:text-[0.7rem] justify-end flex text-primary_text font-montserrat">
          {subText}
        </h1>
        <div>
        <p className="md:text-[1.1rem] xl:text-[6rem] mxl:text-[5.5rem] justify-end flex text-primary_text font-anton lg:text-[3.4rem] sm:text-[1.7rem]">
          {Text}
        </p>  
        </div>
      </div>
      <div className="relative xl:w-[80rem] mxl:w-[75rem] mxl:h-[40rem] xl:h-[45rem] md:h-[22rem] mphone:h-[10rem]  lg:w-[40rem] lg:h-[20rem] sm:w-[20rem] sm:h-[15rem] lphone:w-[15rem] lphone:h-[15rem] phone:w-[10rem] phone:h-[7rem]">
      <Image src={`https://utfs.io/f/${img}`} alt="HOD" fill />
      </div>
      {/*Replace this Frame100.png with the recent activities picture */}
      <div className=" flex xl:h-[45rem] xl:mr-10  flex-col lphone:w-[15rem] phone:w-[10rem] md:w-fit md:h-[10rem] phone:items-end md:items-start md:text-start phone:text-end h-full">
        <h1 className="lg:w-[15rem]  xl:text-[6rem] mxl:text-[5rem]  text-primary_text font-anton lg:text-[2.4rem]  sm:text-[1.2rem] ">{month}</h1>
        <hr className="border-b-[0.5px] border-black w-[44px]" />
        <h1 className="lg:w-[15rem]  xl:text-[6.8rem] mxl:text-[5rem] text-secondary_orange font-anton lg:text-[3rem]   sm:text-[1.7rem]">{date} th</h1>
      </div>
    </div>
  );
};

export default Recent;

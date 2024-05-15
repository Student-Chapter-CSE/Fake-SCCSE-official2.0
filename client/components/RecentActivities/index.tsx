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
    <div id="events" className="flex flex-col w-full items-center">
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
          <div className="flex justify-end w-full mt-24">
            <Link href="/events" passHref>
              <Button title="VIEW ALL" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Card: React.FC<CardProps> = ({gap, img,date,month,year, width = 300, height = 400,subText="Some content about the event",Text="TechQuisitive 3.0",align="center" }) => {
  console.log(gap)
  return (
    <div className={`flex flex-col md:flex-row items-center md:items-${align} justify-center  gap-5`}>
      <div className={`flex flex-col w-full h-full flex-grow ${gap}  bg-red-400 `}>
        <div>
        <h1 className="text-primary_text font-montserrat">
          {subText}
        </h1>
        </div>
        <div>
        <p className="text-primary_text font-anton text-[2rem] ">
          {Text}
        </p>  
        </div>
      </div>
      <Image src={`https://utfs.io/f/${img}`} alt="HOD" width={width} height={height} />
      {/*Replace this Frame100.png with the recent activities picture */}
      <div className=" flex flex-col">
        <h1 className="text-primary_text font-anton text-[2rem] ">{month}</h1>
        <hr className="border-b-[0.5px] border-black w-[44px]" />
        <h1 className=" text-secondary_orange font-anton text-[2rem] ">{date} th</h1>
      </div>
    </div>
  );
};

export default Recent;

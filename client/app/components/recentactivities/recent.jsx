import React from "react";
import Headertitle from "../Headertitle/Headertitle";
import Image from "next/image";
const recent = () => {
  return (
    <div className="relative w-full h-fit items-center justify-center">
      <Headertitle
        title="RECENT"
        subtitle="ACTIVITIES"
        content="We are a group of students from (SCCSE)"
        subtitleFontSize="10px"
      />
      <div className="flex flex-col gap-7 ">
        <Card />
        <Card />
      </div>
      <hr />
    </div>
  );
};

const Card = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-5 ">
      <div className="flex flex-col gap-24">
        <h1 className="text-primary_text font-montserrat ">
          Some content about the event
        </h1>
        <p className="text-primary_text font-anton text-[2rem] ">
          TechQuisitive 3.0
        </p>
      </div>
      <Image src="/Frame 100.png" alt="HOD" width={300} height={400} />
      {/*Replace this Frame100.png with the recent activities picture */}
      <div className="flex flex-col">
        <h1 className="text-primary_text font-anton text-[2rem] ">May</h1>
        <hr className="border-b-[0.5px] border-black w-[44px]" />
        <h1 className=" text-secondary_orange font-anton text-[2rem] ">20</h1>
      </div>
    </div>
  );
};

export { Card };
export default recent;

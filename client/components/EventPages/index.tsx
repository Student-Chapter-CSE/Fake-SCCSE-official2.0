import React from 'react';
import Footer from '../Footer';
import Image from 'next/image';
import HeaderTitle from '../HeaderTitle';
import { HeaderTitleProps } from '../HeaderTitle';
import { CardProps } from '../RecentActivities';
import {Card} from '../RecentActivities';
import { useEffect, useState } from 'react';

interface SectionsProps extends HeaderTitleProps {
  width?: number;
  height?: number;
  subText?: string;
  Text?: string;
  align?: string;
  margin?:string|number;
  padding?:string|number;
}



const Sections =({title,subtitle,subtitleFontSize,color,content,width,height,subText,Text,align,margin,padding}:SectionsProps)=>{
  return(
    <>
      
      <div className='w-full flex justify-center '>
        <div className=' w-[80%] border-b-2 my-0 pl-0 border-black'>
          <HeaderTitle
                title={title}
                subtitle={subtitle}
                subtitleFontSize={subtitleFontSize}
                color={color}
                content={content}
                margin={margin}
                padding={padding}
          />
        </div>
      </div>

      <br />
      <br />
      <div className='w-full flex flex-col  sm:justify-center  gap-[10rem] sm:items-center'>
        <Card width={width} height={height} Text={Text} subText={subText} align={align} />
        <Card width={width} height={height} Text={Text} subText={subText} align={align}  />
        <Card width={width} height={height} Text={Text} subText={subText} align={align} />
      </div>
    </>
  )
}

const IndexPage = () => {
  return (
    <div className="relative w-full  h-fit  bg-background">
      {/* Image Section and Text Section */}
      <div className="w-full pt-24 flex justify-center">
        <div>
            <div className=' text-mlarge font-anton font-light text-primary_text flex justify-end phone:text-large '>EVENTS</div>
            <div className="font-normal font-montserrat text-[.9rem] tracking-wider h-fit pb-20 flex justify-end phone:text-small">
              Indomitable and Captivating
            </div>
          <div className='sm:w-[25rem] sm:h-[12.5rem] md:w-[35rem] md:h-[20rem] lg:w-[50rem] lg:h-[25rem] xl:w-[60rem] xl:h-[30rem] phone:w-[18rem] phone:h-[8rem] relative '>
            <Image src="/Frame 100.png" alt="" fill />
          </div>
          <div className="text-end phone:text-small phone:">
            <div>Alluring and Charming. Student Chapter Cse is a</div>
            <div>Brand</div>
          </div>
          <br />
        </div>
      </div>
      <br />

      <Sections
        title="UPCOMING"
        subtitle="EVENTS"
        subtitleFontSize="text-[1.5rem]"
        color="transparent"
        content=""
        width={300}
        height={400}
        Text=""
        align="start"
        margin=""
        padding=""
      />
      <br />

      {/* Upcoming Events Section */}
      <Sections 
        title="RECENT"
        subtitle="ACTIVITIES"
        subtitleFontSize="text-[1.5rem]"
        color="transparent"
        content=""
        width={300}
        height={400}
        subText="Some content about the event"
        Text="TechQuisitive 3.0"
        align="start"
        margin=""
        padding=""
      />
      <br />
      

      <Sections 
        title="PAST"
        subtitle="EVENTS"
        subtitleFontSize="text-[1.5rem]"
        color="transparent"
        content=""
        width={300}
        height={400}
        align="start"
        margin=""
        padding=""
      />
      <br />
      <br />
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default IndexPage;

import React from 'react';
import Footer from '../Footer';
import Image from 'next/image';
import HeaderTitle from '../HeaderTitle';
import { HeaderTitleProps } from '../HeaderTitle';
import { CardProps } from '../RecentActivities';
import {Card} from '../RecentActivities';

interface SectionsProps extends HeaderTitleProps {
  width?: number;
  height?: number;
  subText?: string;
  Text?: string;
  align?: string;
}



const Sections =({title,subtitle,subtitleFontSize,color,content,width,height,subText,Text,align}:SectionsProps)=>{
  return(
    <>
      <div className="w-fit h-fit ml-[10rem]">
        <HeaderTitle
          title={title}
          subtitle={subtitle}
          subtitleFontSize={subtitleFontSize}
          color={color}
          content={content}
        />
      </div>
      {/* Container Section */}
      <hr className="w-[70rem] mt-[-10rem] ml-[15rem] border-t-[.08rem] border-black " />

      <br />
      <div className='w-full flex flex-col justify-center gap-[10rem]'>
        <Card width={width} height={height} Text={Text} subText={subText} align={align}/>
        <Card width={width} height={height} Text={Text} subText={subText} align={align}  />
        <Card width={width} height={height} Text={Text} subText={subText} align={align} />
      </div>
    </>
  )
}

const IndexPage = () => {
  return (
    <div className="relative w-full h-fit bg-background">
      
      {/* Header Section */}
      <div className="w-[80rem] ml-16 h-fit pt-8">
        <div className="font-anton font-light text-mlarge text-primary_text text-end pr-20">
          <div>
            <div className='pt-24'>EVENTS</div>
            <div className="font-normal font-montserrat text-[.9rem] tracking-wider h-fit pb-20">
              Indomitable and Captivating
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full flex justify-center">
        <div>
          <div>
            <Image src="/Frame 100.png" alt="" width={1000} height={800} />
          </div>
          <div className="text-end">
            <br />
            Alluring and Charming. Student Chapter Cse is a <br /> Brand
          </div>
        </div>
      </div>

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
      />

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
      />
      

      <Sections 
        title="PAST"
        subtitle="EVENTS"
        subtitleFontSize="text-[1.5rem]"
        color="transparent"
        content=""
        width={300}
        height={400}
        align="start"
      />
      <br />
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default IndexPage;



import React from 'react';
import Footer from '../Footer';
import Image from 'next/image';
import HeaderTitle from '../HeaderTitle';
import { Card } from '../RecentActivities';
import Navbar from '../Navbar';
import { HeaderTitleProps } from '../HeaderTitle';

interface SectionsProps extends HeaderTitleProps {
  width?: number;
  height?: number;
}


const Sections =({title,subtitle,subtitleFontSize,color,content,width,height}:SectionsProps)=>{
  return(
    <>
      <div className="w-full h-fit ml-[10rem]">
        <HeaderTitle
          title={title}
          subtitle={subtitle}
          subtitleFontSize={subtitleFontSize}
          color={color}
          content={content}
        />
      </div>
      <br />
      {/* Container Section */}
      <hr className="w-[70rem] mt-[-10rem] ml-[15rem] border-t-[.08rem] border-black " />

      <br />
      <div className='w-full flex flex-col justify-center gap-[10rem]'>
        <Card width={width} height={height} />
        <Card width={width} height={height} />
        <Card width={width} height={height} />
      </div>
    </>
  )
}

const IndexPage = () => {
  return (
    <div className="relative w-full h-full bg-background">
      <Navbar />
      {/* Header Section */}
      <div className="w-[80rem] ml-16 h-fit mt-[4.75rem] pt-8">
        <div className="font-anton font-light text-mlarge text-primary_text text-end pr-20">
          EVENTS
          <div className="font-normal font-montserrat text-[1.2rem] tracking-wider h-fit pb-20">
            Indomitable and Captivating
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
        width={600}
        height={600}
      />

      {/* Upcoming Events Section */}
      

      <Sections 
        title="PAST"
        subtitle="EVENTS"
        subtitleFontSize="text-[1.5rem]"
        color="transparent"
        content="We are a group of students from (SCCSE)"
        width={600}
        height={600}
      />
      <br />
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default IndexPage;

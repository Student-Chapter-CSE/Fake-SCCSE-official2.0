'use client';
import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import Image from 'next/image';
import HeaderTitle from '../HeaderTitle';
import { HeaderTitleProps } from '../HeaderTitle';
import { Card } from '../RecentActivities';
import { eventsData } from '@/public/data';

interface SectionsProps extends HeaderTitleProps {
  width?: number;
  height?: number;
  subText?: string;
  Text?: string;
  align?: string;
  margin?: string | number;
  padding?: string | number;
  date?: string;
  month?: string;
  year?: string;
  img?: string;
}

const Sections: React.FC<SectionsProps> = ({
  title,
  subtitle,
  subtitleFontSize,
  color,
  content,
  width,
  height,
  subText,
  Text,
  align,
  margin,
  padding,
  date,
  month,
  year,
  img
}) => {
  const [filteredData, setFilteredData] = useState<any[]>([]);

  useEffect(() => {
    const filtered = eventsData.filter((item) => item.category.toLowerCase() === title.toLowerCase());
    setFilteredData(filtered);
  }, [title]);
  //w-full flex flex-col justify-end  sm:justify-center gap-[10rem] sm:items-center
  return (
    <>
      <div className='w-full flex justify-center'>
        <div className='w-[80%] border-b-2 border-black'>
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
      <div className='w-full flex flex-col lg:items-end sm:items-center gap-[10rem]'>
        {filteredData.map((item, index) => {
          const dateObj = new Date(item.date);
          console.log(dateObj);
          
          const day = String(dateObj.getUTCDate()).padStart(2, '0');
          const month = String(dateObj.toString().split(' ')[1]);
          const year = String(dateObj.getUTCFullYear());

          return (
            <Card
              key={index}
              width={width}
              height={height}
              Text={item.heading}
              subText={item.content}
              align={align}
              date={day}
              month={month}
              year={year}
              img={item.img}
              gap={item.gap}
            />
          );
        })}
      </div>
    </>
  );
};

const IndexPage = () => {
  return (
    <div className="relative w-full h-fit bg-background ">
      {/* Image Section and Text Section */}
      <div className="w-full pt-24 flex justify-center">
        <div>
          {/* */}
          <div className='w-full  h-fit flex items-end lg:justify-end phone:justify-center'>
            <div className='w-[20rem]  h-[10rem]    flex items-end relative '>
              <Image src='/icons/events.svg' alt='' fill />
            </div> 
          </div>
          <div className="font-normal font-montserrat text-[.9rem] tracking-wider h-fit pb-20 flex lg:justify-end phone:justify-center phone:text-small">
            Indomitable and Captivating
          </div>
          <div className=' mxl:w-[60rem] mxl:h-[35rem] sm:w-[25rem] sm:h-[12.5rem] md:w-[35rem] md:h-[20rem] lg:w-[50rem] lg:h-[25rem] xl:w-[60rem] xl:h-[30rem] phone:w-[18rem] phone:h-[8rem] relative'>
            <Image src="" alt="" fill />
          </div>
          <div className="text-end phone:text-small">
            <div>Alluring and Charming. Student Chapter CSE is a</div>
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
        align="start"
        margin=""
        padding=""
      />
      <br />

      {/* Recent Activities Section */}
      <Sections 
        title="RECENT"
        subtitle="ACTIVITIES"
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

'use client';
import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import Image from 'next/image';
import HeaderTitle from '../HeaderTitle';
import { HeaderTitleProps } from '../HeaderTitle';
import { Card } from '../RecentActivities';
import { eventsData } from '@/public/data';
import { motion } from 'framer-motion';


interface EventData {
  category: string;
  date: string;
  heading: string;
  content: string;
  img: string;
  gap?: string;
}

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
      <div className='w-full flex flex-col lg:items-end phone:items-center gap-[10rem]'>
        {filteredData.map((item, index) => {
          
          const dateObj = new Date(item.date);
          const day = String(dateObj.getUTCDate()).padStart(2, '0');
          const month = dateObj.toLocaleString('default', { month: 'short' });
          const year = String(dateObj.getUTCFullYear());
          //console.log(item);
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

const IndexPage: React.FC = () => {
  return (
    <div className="relative w-full h-fit bg-background">
      {/* Image Section and Text Section */}
      <div className="w-full pt-24 flex justify-center">
        <div>
        <motion.div
            initial={{ x: '-100px', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', duration: 1.5, delay: 0.8 }}
            className='w-full h-fit flex items-end md:justify-end phone:justify-center'
          >
            <div className='w-[20rem] h-[10rem] flex items-end relative'>
              <Image src='/icons/events.svg' alt='Events Icon' fill />
            </div>
          </motion.div>
          <div className="font-normal font-montserrat text-[.9rem] tracking-wider h-fit pb-20 flex lg:justify-end phone:justify-center phone:text-small">
            Indomitable and Captivating
          </div>
          <div className='mxl:w-[60rem] mxl:h-[38.4rem] sm:w-[25rem] sm:h-[16rem] md:w-[35rem] md:h-[22.4rem] lg:w-[50rem] lg:h-[32rem] xl:w-[60rem] xl:h-[38.4rem] phone:w-full phone:h-[13rem] relative'>
            <Image src="/Event-main.png" alt="" fill />
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

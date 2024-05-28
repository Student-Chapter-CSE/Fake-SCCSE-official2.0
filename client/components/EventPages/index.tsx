"use client";
import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Image from "next/image";
import HeaderTitle from "../HeaderTitle";
import { HeaderTitleProps } from "../HeaderTitle";
import { Card } from "../RecentActivities";
import { eventsData } from "@/public/data";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Events from "/public/events.svg";

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
  subpadding,
  date,
  month,
  year,
  img,
  titleFontSize,
}) => {
  const [filteredData, setFilteredData] = useState<any[]>([]);

  useEffect(() => {
    const filtered = eventsData.filter(
      (item) => item.category.toLowerCase() === title.toLowerCase()
    );
    setFilteredData(filtered);
  }, [title]);
  return (
    <>
      <div className="w-full  flex justify-center">
        <div className="lphone:w-[80%]   border-b-2 border-black">
          <HeaderTitle
            title={title}
            subtitle={subtitle}
            subtitleFontSize={subtitleFontSize}
            color={color}
            content={content}
            margin={margin}
            padding={padding}
            subpadding={subpadding}
            titleFontSize={titleFontSize}
          />
        </div>
      </div>
      <br />
      <div className="w-full flex flex-col lg:items-end phone:items-center gap-[10rem]">
        {filteredData.map((item, index) => {
          const dateObj = new Date(item.date);
          const day = String(dateObj.getUTCDate()).padStart(2, "0");
          const month = dateObj.toLocaleString("default", { month: "short" });
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
    <div className="relative w-full h-fit bg-background">
      {/* Image Section and Text Section */}
      <div className="w-full pt-24 flex justify-center">
        <div>
          <motion.div
            initial={{ x: "-100px", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1.5, delay: 0.8 }}
            className="w-full h-fit flex items-end md:justify-end phone:justify-center"
          >
            <div
              style={{ objectFit: "cover" }}
              className="phone:mt-4 sm:mt-0  scale-[1.2]  lg:w-[30rem] phone:w-[20rem]  flex items-end relative"
            >
              <Events />
            </div>
          </motion.div>
          <br />
          <br />
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
              visible: {
                opacity: 1,
                scale: 1,
                transition: { delay: 2.1, duration: 0.5 },
              },
              hidden: { opacity: 0, scale: 0.8 },
            }}
            className="mxl:w-[60rem] phone:mt-8 sm:mt-0 mxl:h-[35rem] sm:w-[25rem] sm:h-[12.5rem] md:w-[35rem] md:h-[20rem] lg:w-[50rem] lg:h-[30rem] xl:w-[60rem] xl:h-[30rem] phone:w-full phone:h-[12rem] relative"
          >
            <Image src="/icons/collage1.avif" alt="" fill />
          </motion.div>
          <div className="text-end phone:text-small lphone:opacity-100 phone:opacity-0 ">
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
        titleFontSize="text-[3.5rem] md:text-[5rem]"
        subtitleFontSize="text-[0.7rem] md:text-[1.2rem]"
        color="transparent"
        date=""
        content=""
        width={300}
        height={400}
        align="start"
        margin="1remadd ."
        padding="-1.5rem"
        subpadding="pr-10"
      />
      <br />

      {/* Recent Activities Section */}
      <Sections
        title="RECENT"
        subtitle="EVENTS"
        titleFontSize="text-[5rem]"
        subtitleFontSize="text-[1rem]"
        color="transparent"
        content=""
        width={300}
        height={400}
        align="start"
        margin="1rem"
        padding="-1.5rem"
        subpadding="pl-1 pb-10"
      />
      <br />

      <Sections
        title="PAST"
        subtitle="EVENTS"
        titleFontSize="text-[6rem]"
        subtitleFontSize="text-[1.2rem]"
        color="transparent"
        content=""
        width={300}
        height={400}
        align="start"
        margin="1rem"
        padding="-1.5rem"
        subpadding="pr-12"
      />
      <br />
      <br />
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default IndexPage;

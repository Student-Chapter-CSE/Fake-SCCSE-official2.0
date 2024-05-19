import { log } from "console";
import React from "react";

export interface HeaderTitleProps {
  title: string;
  subtitle: string;
  content: string;
  subtitleFontSize: string;
  size?:string|number;
  color?:string;
  margin?:string|number;
  padding?:string|number;
};

const HeaderTitle: React.FC<HeaderTitleProps> = ({
  title,
  subtitle,
  content,
  subtitleFontSize,
  size="full",
  color="white",
  margin,
  padding,
}) => {
  return (
    <div className={`w-full   flex flex-col md:flex-row  bg-${color} ${margin} ${padding}   md:h-36 phone:h-fit  pt-9 md:pt-10 `} >
      <div className="flex flex-row">
        <h1 id="" className="text-[3.5rem] xl:text-[9rem] mxl:text-[7rem] md:text-[4rem] phone:text-medium lphone:text-[2.5rem] font-anton text-primary_text leading-[0.9] tracking-wider">
          {title}
        </h1>
        <h1
          style={{ fontSize: subtitleFontSize }}
          className="font-poppins w-fit h-fit mt-8 phone:text-[.6rem] lphone:text-[.9rem] font-semibold text-primary_text   transform -rotate-90 leading-none"
        >
          {subtitle}
        </h1>
      </div>
      <h4 className="text-small md:text-[1rem]  text-primary_text pt-5 md:pt-10">
        {content}
      </h4>
    </div>
  );
};

export default HeaderTitle;
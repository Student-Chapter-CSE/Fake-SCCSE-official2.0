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
  subpadding?:string|number;
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
  subpadding,
}) => {
  return (
    <div className={`w-full flex flex-col md:flex-row  bg-${color} ${margin} ${padding}   md:h-36 phone:h-fit  pt-9 md:pt-10 `} >
      <div className="flex flex-row w-fit h-fit">
        <h1 className="w-fit h-fit text-[3.5rem] xl:text-[9rem] mxl:text-[7rem] md:text-[4rem] phone:text-medium lphone:text-[2.5rem] font-anton text-primary_text leading-[0.9] tracking-wider">
          {title}
        </h1>
        <h1
          
          className={` ${subtitleFontSize} font-poppins font-bold w-fit h-fit text-primary_text ${subpadding} py-0 transform -rotate-90 `}
        >
          {subtitle}
        </h1>
      </div>
      <h4 className="text-small md:text-[1rem]  text-primary_text pt-1 md:pt-10 pb-3 md:pb-0">
        {content}
      </h4>
    </div>
  );
};

export default HeaderTitle;
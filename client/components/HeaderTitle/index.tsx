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
    <div className="w-full flex flex-col md:flex-row my-36 bg-white h-full sm:pl-20 pt-9 md:py-10 items-end">
      <div className="flex">
        <h1 className="text-[3rem] md:text-[4rem] font-anton text-primary_text leading-[0.9] tracking-wider text-right">
          {title}
        </h1>
        <h1
          style={{ fontSize: subtitleFontSize }}
          className="font-poppins font-semibold text-primary_text px-2 sm:pl-12 transform -rotate-90 leading-none text-center w-fit"
        >
          {subtitle}
        </h1>
      </div>
      <h4 className="text-small md:text-[1rem] text-primary_text pt-5 md:pt-10 px-6 sm:px-0">
        {content}
      </h4>
    </div>
  );
};

export default HeaderTitle;

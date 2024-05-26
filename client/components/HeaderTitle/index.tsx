import { log } from "console";
import React from "react";

export interface HeaderTitleProps {
  title: string;
  subtitle: string;
  content: string;
  subtitleFontSize: string|number;
  size?:string|number;
  color?:string;
  margin?:string|number;
  padding?:string|number;
  subpadding?:string|number;
  titleFontSize?: string; // Add the 'titleFontSize' property
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
  titleFontSize="text-[4rem]",
}) => {
  return (
    <div className={`w-full flex flex-col md:flex-row  bg-${color} ${margin} ${padding}   md:h-36 phone:h-fit  pt-9 md:pt-10 `} >
      <div className="flex flex-row w-fit h-fit justify-center md:justify-start pb-7 md:pb-0">
        <h1 className={`w-fit h-fit  ${titleFontSize}  font-anton text-primary_text leading-[0.9] tracking-wider`}>
        {/* xl:text-[9rem] mxl:text-[7rem] md:text-[4rem] phone:text-medium lphone:text-[2.5rem] */}
          {title}
        </h1>
        <h1
          style={{fontSize:subtitleFontSize,marginTop:margin,marginLeft:padding}}
          className={` font-poppins font-bold w-fit h-fit text-primary_text  py-0 mmx-[-1.9rem] transform -rotate-90 `}
        >
          {subtitle}
        </h1>
      </div>
      <h4
        style={{fontSize:subtitleFontSize,marginTop:margin,marginLeft:padding}}
      className="hidden md:block text-small md:text-[1rem] text-primary_text pt-1 md:pt-10 pb-3 md:pb-0">
  {content}
</h4>
    </div>
  );
};

export default HeaderTitle;
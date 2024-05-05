import React from "react";
import BlackArrowSvg from "/public/icons/blackarrowright.svg";
import WhiteArrowSvg from "/public/icons/whitearrowright.svg";

type ButtontitleProps = {
  title: string;
};

const Button: React.FC<ButtontitleProps> = ({ title }) => {
  return (
    <div className="flex border-primary_text border-[0.5px] w-[50%] md:w-[20%] items-center justify-center relative overflow-hidden group">
      <div className="w-[70%] font-semibold pl-5">{title}</div>
      <div className="relative ml-3 pt-1 w-[30%]">
        <div className="absolute inset-0 bg-pop_orange transform translate-x-full group-hover:translate-x-0 transition-transform duration-200 ease-in-out z-10" />
        <div className="relative inset-0 flex items-center justify-center">
          <BlackArrowSvg className="h-5 w-5 z-10 group-hover:hidden" />
          <WhiteArrowSvg className="h-5 w-5 z-10 hidden group-hover:block" />
        </div>
      </div>
    </div>
  );
};

export default Button;

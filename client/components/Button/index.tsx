import React from "react";
import BlackArrowSvg from "/public/icons/blackarrowright.svg";
import WhiteArrowSvg from "/public/icons/whitearrowright.svg";

type ButtontitleProps = {
  title: string;
};

const Button: React.FC<ButtontitleProps> = ({ title }) => {
  return (
    <div className="flex border-primary_text border-[0.5px] w-fit overflow-hidden items-center justify-center relative  group text-small">
      <div className="w-[70%] font-semibold pl-5 text-nowrap">{title}</div>
      <div className="relative ml-3 p-2 w-[30%]">
        <div className="absolute inset-0 bg-pop_orange transform translate-x-full group-hover:translate-x-0 transition-transform duration-200 ease-in-out z-4" />
        <div className="relative inset-0 flex items-center justify-center w-fit">
          <BlackArrowSvg className=" z-4 group-hover:hidden" />
          <WhiteArrowSvg className=" z-4 hidden group-hover:block" />
        </div>
      </div>
    </div>
  );
};

export default Button;

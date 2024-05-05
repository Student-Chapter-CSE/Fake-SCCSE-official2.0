import React from "react";

type HeaderTitleProps = {
  title: string;
  subtitle: string;
  content: string;
  subtitleFontSize: string;
};

const HeaderTitle: React.FC<HeaderTitleProps> = ({ title, subtitle, content, subtitleFontSize }) => {
  return (
    <div className="w-full flex my-36 bg-white h-36 pl-20 items-center">
      <h1 className="text-[4rem] font-anton text-primary_text leading-[0.9] tracking-wider">
        {title}
      </h1>
      <h1 style={{ fontSize: subtitleFontSize }} className="font-poppins font-semibold text-primary_text leading-[0.9] tracking-wider transform -rotate-90 -ml-4">
        {subtitle}
      </h1>
      <h4 className="text-[1rem] font-montserrat text-primary_text leading-[0.9] pt-10 tracking-wider">
        {content}
      </h4>
    </div>
  );
};

export default HeaderTitle;

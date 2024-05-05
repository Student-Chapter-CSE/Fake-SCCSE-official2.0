import React from "react";

type HeadertitleProps = {
  title: string;
  subtitle: string;
  content: string;
  subtitleFontSize: string;
};

const Headertitle: React.FC<HeadertitleProps> = ({
  title,
  subtitle,
  content,
  subtitleFontSize,
}) => {
  return (
    <div className="w-full flex flex-col md:flex-row my-36 bg-white h-36 pl-20 py-10">
      <div className="flex flex-row">
      <h1 className="text-2xl md:text-[4rem] font-anton text-primary_text leading-[0.9] tracking-wider">
        {title}
      </h1>
      <h1
        style={{ fontSize: subtitleFontSize }}
        className="font-poppins font-semibold text-primary_text leading-[0.9] tracking-wider transform -rotate-90 -ml-4 md:ml-0"
      >
        {subtitle}
      </h1>
      </div>
      <h4 className="text-xs md:text-[1rem] font-montserrat text-primary_text leading-[0.9] pt-10 tracking-wider">
        {content}
      </h4>
      
    </div>
  );
};

export default Headertitle;

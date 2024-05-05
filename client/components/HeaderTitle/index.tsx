import React from "react";

type HeaderTitleProps = {
  title: string;
  subtitle: string;
  content: string;
  subtitleFontSize: string;
};

const HeaderTitle: React.FC<HeaderTitleProps> = ({
  title,
  subtitle,
  content,
  subtitleFontSize,
}) => {
  return (
    <div className="w-full flex flex-col md:flex-row my-36 bg-white h-36 pl-20 pt-9 md:pt-10">
      <div className="flex flex-row">
        <h1 className="text-[3.5rem] md:text-[4rem] font-anton text-primary_text leading-[0.9] tracking-wider">
          {title}
        </h1>
        <h1
          style={{ fontSize: subtitleFontSize }}
          className="font-poppins font-semibold text-primary_text leading-[0.9] md:pl-12 transform -rotate-90"
        >
          {subtitle}
        </h1>
      </div>
      <h4 className="text-small md:text-[1rem] font-montserrat text-primary_text pt-5 md:pt-10">
        {content}
      </h4>
    </div>
  );
};

export default HeaderTitle;

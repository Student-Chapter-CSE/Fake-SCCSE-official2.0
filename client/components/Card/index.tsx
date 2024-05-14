import React from "react";

import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  name: string;
  photo: string;
  designation: string;
  instagram: string;
  facebook: string;
  twitter: string;
  linkedin: string;
}

const Card: React.FC<CardProps> = ({
  name,
  photo,
  designation,
  instagram,
  facebook,
  twitter,
  linkedin,
}) => {
  return (
    <>
      <div className="bg-white h-[20rem] w-[16rem] mt-12 flex justify-center items-center relative">
        <Image src="/ara.jpeg" alt="convenor " height={380} width={180} />
        <div className="flex flex-col justify-between space-y-36 ">
          <h1 className="text-orange-400 text-sm text-bold transform rotate-90 flex justify-start absolute top-[-16] right-[-1.5]   ">
            {designation}
          </h1>
          <div className="space-y-2 ml-4">
            <div>
              {facebook ? (
                <a href={facebook}>
                  <FaFacebook color="orange" size={22} />
                </a>
              ) : (
                <FaFacebook color="orange" size={22} />
              )}
            </div>

            <div>
              {instagram ? (
                <a href={instagram}>
                  <IoLogoInstagram color="orange" size={22} />
                </a>
              ) : (
                <IoLogoInstagram color="orange" size={22} />
              )}
            </div>

            <div>
              {twitter ? (
                <a href={twitter}>
                  <FaTwitter size={22} color="orange" />
                </a>
              ) : (
                <FaTwitter size={22} color="orange" />
              )}
            </div>

            <div>
              {linkedin ? (
                <a href={linkedin}>
                  <FaLinkedin size={22} color="orange" />
                </a>
              ) : (
                <FaLinkedin size={22} color="orange" />
              )}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0">
          <h1 className="text-l ">{name}</h1>
        </div>
      </div>
    </>
  );
};

export default Card;

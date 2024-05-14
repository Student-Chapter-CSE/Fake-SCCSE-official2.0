import React from "react";

import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";


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
      <div className="bg-white  mt-12 flex pl-10 pt-10  justify-center items-center relative">
        <Image src={`https://utfs.io/f/${photo}`} alt="convenor "  height={380} width={180} />
        <div className="flex flex-col justify-between space-y-36 ">
          <h1 className="text-orange-400 text-sm text-bold transform rotate-90 flex justify-start    ">
            {designation}
          </h1>
          <div className="space-y-2 ml-4">
            <div>
              {facebook ? (
                <a href={facebook}>
                  <FaFacebook className="text-gray-400 hover:text-secondary_orange duration-200" size={22} />
                </a>
              ) : (
                <FaFacebook className="text-gray-400 hover:text-secondary_orange duration-200" size={22} />
              )}
            </div>

            <div>
              {instagram ? (
                <a href={instagram}>
                  <IoLogoInstagram className="text-gray-400 hover:text-secondary_orange duration-200" size={22} />
                </a>
              ) : (
                <IoLogoInstagram className="text-gray-400 hover:text-secondary_orange duration-200" size={22} />
              )}
            </div>

            <div>
              {twitter ? (
                <a href={twitter}>
                  <FaTwitter size={22} className="text-gray-400 hover:text-secondary_orange duration-200" />
                </a>
              ) : (
                <FaTwitter size={22} className="text-gray-400 hover:text-secondary_orange duration-200" />
              )}
            </div>

            <div>
              {linkedin ? (
                <a href={linkedin}>
                  <FaLinkedin size={22} className="text-gray-400 hover:text-secondary_orange duration-200" />
                </a>
              ) : (
                <FaLinkedin size={22} className="text-gray-400 hover:text-secondary_orange duration-200" />
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

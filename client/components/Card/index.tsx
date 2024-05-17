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
      <div className="bg-white pl-8 pr-12 py-6 mt-12 flex flex-col justify-center items-start gap-2 w-fit">
        <div className="flex h-[220px] w-fit">
          <div className="relative">
            <Image
              src={`https://utfs.io/f/${photo}`}
              alt="convenor"
              height={200}
              width={150}
              quality={20}
            />

            <div className="absolute flex flex-col gap-2 h-full top-0 right-0 translate-x-[100%]">

              <div className="flex flex-col gap-2 px-2 ">
                <Link href={facebook.length>0?facebook:"#"} className="w-fit text-gray-400 hover:text-secondary_orange duration-300">
                  <FaFacebook size={16} />
                </Link>

                <Link href={instagram.length>0?instagram:"#"} className="w-fit text-gray-400 hover:text-secondary_orange duration-300">
                  <IoLogoInstagram size={16} />
                </Link>

                <Link href={twitter.length>0?twitter:"#"} className="w-fit text-gray-400 hover:text-secondary_orange duration-300">
                  <FaTwitter size={16} />
                </Link>

                <Link href={linkedin.length>0?linkedin:"#"} className="w-fit text-gray-400 hover:text-secondary_orange duration-300">
                  <FaLinkedin size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="text-orange-400 font-bold">
            {designation}
          </h1>
          <h1 className="">{name}</h1>
        </div>
      </div>
    </>
  );
};

export default Card;

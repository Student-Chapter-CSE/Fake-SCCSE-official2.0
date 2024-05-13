import React from 'react'

import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from 'next/image';

interface CardProps {
  name: string;
  photo: string;
}

const Card: React.FC<CardProps> = ({name,photo}) => {

  return (
    <>
        
<div className='border border-black h-[23rem] w-[18rem] mt-12 flex justify-center items-center relative'>
   <Image src='/ara.jpeg'  alt='convenor '  height={400} width={200} />
   <div className='flex flex-col justify-between space-y-36 '>

   <h1 className='text-orange-400 text-xl text-bold transform rotate-90 flex justify-start absolute top-16 right-0  '></h1>

   <div className='space-y-4 ml-1'>
   <FaFacebook color='orange' size={25}/>
   <IoLogoInstagram color='orange' size={25}/>
   <FaTwitter size={25} color='orange'/>
   <FaLinkedin  color='orange' size={25}/>
   </div>
   </div>
   <div className='absolute bottom-0'>
   <h1 className='text-xl '>{name}</h1>

   </div>
  </div>

      
    </>
  )
}

export default Card

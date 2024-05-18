"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
const img="2019bbe0-f3c1-47f9-b4d5-ce8c3d867d6b-9wuybl.avif";
const img2="7ab4334f-f0a1-4976-805f-2e7df0a7acde-9wuybj.avif";
const img3="05ab0933-86db-4dfc-8d19-c2c925a5ba51-y0w5qv.avif ";
const TeamsPhotoAnimation = () => {
    return (
        <div className='w-full items-center justify-center'>
            <div
  className="absolute left-0 ml-[10%] w-[16.5vmax] h-[20rem] overflow-hidden"
>
  <Image 
    src={`https://utfs.io/f/${img3}`} 
    alt="header"
    layout="fill"
    objectFit="cover"
    objectPosition="center"
  />
</div>
            <motion.div
                 initial={{ left:0 }}
                 animate={{ left: "5rem" }}
                 transition={{ type: "spring", duration: 1, delay: 0.2 }}
                className="absolute left-0 ml-[10%] w-[16.5vmax]"
            >
                <div className='absolute w-[18rem] h-[20rem] '>
                <Image src={`https://utfs.io/f/${img2}`} alt="header" fill
                style={{ objectFit: "cover" }}  />
                    </div>
            </motion.div>
            <motion.div
                initial={{ left:0 }}
                animate={{ left: "10rem" }}
                transition={{ type: "spring", duration: 1, delay: 0.1 }}
                className="absolute left-0 ml-[10%] w-[16.5vmax]"
            >
                <div className='absolute w-[15rem] h-[20rem]'>
                <Image src={`https://utfs.io/f/${img}`} 
                alt="header" 
                fill
                style={{ objectFit: "cover" }}  />
                </div>
            </motion.div>
        </div>
    )
}

export default TeamsPhotoAnimation
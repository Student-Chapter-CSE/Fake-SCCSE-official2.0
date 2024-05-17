"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
const TeamsPhotoAnimation = () => {
    return (
        <div className='w-full'>
            <div
                className="absolute left-0 ml-[10%] w-[16.5vmax]"
            >
                <Image src="/Base.png" alt="header" width={250} height={200} />
            </div>
            <motion.div
                 initial={{ left:0 }}
                 animate={{ left: "5rem" }}
                 transition={{ type: "spring", duration: 1, delay: 0.2 }}
                className="absolute left-0 ml-[10%] w-[16.5vmax]"
            >
                <Image src="/Base.png" alt="header" width={250} height={200} />
            </motion.div>
            <motion.div
                initial={{ left:0 }}
                animate={{ left: "10rem" }}
                transition={{ type: "spring", duration: 1, delay: 0.1 }}
                className="absolute left-0 ml-[10%] w-[16.5vmax]"
            >
                <Image src="/Base.png" alt="header" width={250} height={200} />
            </motion.div>
        </div>
    )
}

export default TeamsPhotoAnimation
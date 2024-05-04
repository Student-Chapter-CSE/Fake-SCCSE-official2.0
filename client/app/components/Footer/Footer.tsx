import React from 'react'
import Image from 'next/image'
import RoundMarquee from "@/public/roundmarquee.svg";
const Footer = () => {
  return (
    <div className='w-full h-fit flex flex-col bg-primary_text items-center justify-center pt-12 gap-11'>
        <hr className="border-b-[0.5px] border-white my-4 w-[951px]" />
         <div className='flex flex-col md:flex-row gap-96 -mt-10'>{/*make this div flex column in responsive*/}
            <div className='flex flex-col -mt-10'>
            <Image 
            src='/sclogo.svg'
            alt='SC-LOGO'
            width={200}
            height={300}
            color='white'
            
            />
            <div className="text-[1rem] font-montserrat text-white ">
             IEI Students’ Chapter CSE (AOT)
          </div>
            </div>
            <div className='flex flex-col gap-5'>
                <a href=''><span className='text-[1rem] text-white text-montsterat '>Teams </span></a>
                <a href=''><span className='text-[1rem] text-white text-montsterat '>Events </span></a>
                <a href=''><span className='text-[1rem] text-white text-montsterat '>Join Us </span></a>
            </div>
            <div className='flex flex-row gap-5'>
            <div className='flex flex-col gap-5'>
                <span className='text-[1rem] text-white text-montsterat '>Evolve Inspire Guidance </span>
                <span className='text-[1rem] text-white text-montsterat '>Evolve Inspire Guidance </span>
                
            </div>
            <div className='h-20vh flex items-end'>
                        <RoundMarquee className='animate-spin-slow flex items-end' />
                    </div>
            </div>
        </div>
        <h4 className="text-[1rem] font-montserrat text-white ">
            &copy; IEI Students’ Chapter CSE (AOT), 2024
          </h4>
    </div>
  )
}

export default Footer
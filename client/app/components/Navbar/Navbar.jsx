'use client'

import React from 'react'

import Image from 'next/image'
import { CiHome } from "react-icons/ci";
import { RiTeamLine } from "react-icons/ri";
import { IoTicketOutline } from "react-icons/io5";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { LuMessageSquarePlus } from "react-icons/lu";

const Navbar = () => {
  return (
    <>
       
        
       <div className="h-[72px] w-full border-b-[0.5px] border-primary_text fixed bg-background z-10  flex items-center justify-between pr-12 ">
       <Image
      src="/sclogo.svg"
      width={100}
      height={100}
      alt="Picture of the author"
      className='bg-transparent'
      />
        <div className='flex items-center space-x-10'>
      
      
      
        <div className='flex relative space-x-1'>
  <div className="border border-gray-600 space-x-1 h-14 p-6 rounded relative">
   
<div className='border-y-2 border-gray-600 '/>

  <CiHome className='absolute bottom-0 right-0'/>

    
  
    <p className='absolute bottom-1 pb-3 left-10 transform -rotate-90 text-xs  '>Home</p>
  </div>
</div>





{/*   
<div className='flex relative space-x-1'>
  <div className="border border-gray-600 space-x-1 h-14 p-6 rounded relative">
    <div className='icon h-1/4 border-t-4 border-gray-600'></div>
    
  
  </div>
  <div className='flex items-center
  absolute bottom-1 pb-3 left-10 transform -rotate-90 space-x-1'>
  <p className=' text-xs'>Contact</p>
    <p className='text-xs'>Us</p>
  </div>
</div> */}






<div className='flex relative space-x-1'>
  <div className="border border-gray-600 space-x-1 h-14 p-6 rounded relative">
  <RiTeamLine className='absolute bottom-0 right-0'/>
  
    <p className='absolute bottom-1 pb-3 left-10 transform -rotate-90 text-xs  '>Teams</p>
  </div>
</div>
<div className='flex relative space-x-1'>
  <div className="border border-gray-600 space-x-1 h-14 p-6 rounded relative">
  <IoTicketOutline className='absolute bottom-0 right-0'/>
  
    <p className='absolute bottom-1 pb-3 left-10 transform -rotate-90 text-xs  '>Events</p>
  </div>
</div>

<div className='flex relative space-x-1'>
  <div className="border border-gray-600  h-14 p-6 rounded relative">
  <MdOutlinePermContactCalendar className='absolute bottom-0 right-0'/>
  
    <p className='absolute bottom-2 pb-4 left-10 transform -rotate-90 text-[0.6rem]  '>ContactUs</p>
  </div>
</div>


<div className='flex relative space-x-1'>
  <div className="border border-gray-600 space-x-1 h-14 p-6 rounded relative">
  <LuMessageSquarePlus className='absolute bottom-0 right-0'/>
  
    <p className='absolute bottom-2 pb-3 left-10 transform -rotate-90 text-xs  '>JoinUs</p>
  </div>
</div>

        

        
        </div>
       </div>
    </>
  )
}

export default Navbar

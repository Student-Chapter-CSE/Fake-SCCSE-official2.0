import React from 'react'
import Headertitle from '../Headertitle/Headertitle'
const contactus = () => {
  return (
    <div className='relative w-full h-[45vh] items-center justify-center'>
    <Headertitle 
     title="CONTACT" 
     subtitle="US" 
     content="We are a group of students from (SCCSE)"
     subtitleFontSize='3rem'
   />
   
   <hr className="border-t-2 border-black my-4"/>
 </div>
  )
}

export default contactus
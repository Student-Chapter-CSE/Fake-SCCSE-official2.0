import React from 'react'
import Headertitle from '../Headertitle/Headertitle'
const recent = () => {
  return (
    <div className='relative w-full h-[45dvh] items-center justify-center'>
    <Headertitle 
     title="RECENT" 
     subtitle="ACTIVITIES" 
     content="We are a group of students from (SCCSE)"
     subtitleFontSize='10px'
   />
   <hr/>
 </div>
  )
}

export default recent
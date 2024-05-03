import React from 'react'
import Headertitle from '../Headertitle/Headertitle'
const Aboutus: React.FC  = () => {
  return (
    <div className='relative w-full h-[45dvh] items-center justify-center'>
       <Headertitle 
        title="ABOUT" 
        subtitle="US" 
        content="We are a group of students from (SCCSE)"
        subtitleFontSize='3rem'
      />
      <hr/>
    </div>
  )
}

export default Aboutus
import React from 'react'
import Headertitle from '../Headertitle/Headertitle'
const Aboutus: React.FC  = () => {
  return (
    // make the height h-fit when you will add the content
    <div className='relative w-full h-[45dvh] items-center justify-center'>
       <Headertitle 
        title="ABOUT" 
        subtitle="US" 
        content="We are a group of students from (SCCSE)"
        subtitleFontSize='2.5rem'
      />
      <hr/>
    </div>
  )
}

export default Aboutus
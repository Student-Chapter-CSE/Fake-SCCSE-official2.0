import Image from 'next/image';
import React from 'react';
import HeaderTitle from '../HeaderTitle';

const Index = () => {
  return (
    <div className='pb-20'>

    
     <div className="flex   flex-col md:flex-row  justify-between w-full  gap-4 pt-48 space-x-64">

     <div className='flex'>
      
      <div className='transform rotate-90  '>
        <Image src="/Frame 100.png" alt='header' width={350} height={300} />
        </div>
      
     </div>
      
      <div className='pr-[8%]'>
      <div className="font-anton font-light text-large text-primary_text text-end ">
          <div>
            <div >TEAMS</div>
            <div className="font-normal font-montserrat text-[.9rem] tracking-wider h-fit ">
              Lets meet the wizards/mages the community
            </div>
          </div>
        </div>
      </div>

      
     </div>

     <HeaderTitle
          title="CORE"
          subtitle="TEAM"
          content="The backbone,The undisputable dominators"
          subtitleFontSize="1.5rem"
        />
    
    <div className='flex flex-row'>

    
    <div className='flex flex-col space-y-40'>

    <p className='flex justify-end pr-4'>The management team</p>
    <div className='flex justify-end'>

    <p className='w-1/2   '>Transparency,determination,dedication,trust,and companionship defines the management tenure 2024</p>
    </div>
    </div>
    <Image src="/Frame 100.png" alt='management team' height={200} width={400} />
    </div>
    </div>
  );
};

export default Index;

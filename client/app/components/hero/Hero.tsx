import React from 'react'
import RoundMarquee from '@/public/roundmarquee.svg'
import Maruqee from '@/app/components/marquee/Maruqee';
const Hero = () => {
    return (
        <section className='relative w-full h-screen flex flex-col items-end font-montserrat text-body pt-24 px-10 text-right'>
            <div className='flex gap-8 h-full'>
                <div className='flex flex-col items-end h-full justify-between w-full'>
                    <div className='flex gap-8 items-center'>
                        <div className='w-1/2 flex flex-col justify-between h-[45dvh]'>
                            <div className='flex flex-col gap-2 items-end'>
                                <h1>The oldest and most <span className='text-pop_orange'>active</span> students community in</h1>
                                <h1 className='font-semibold'>Academy of Technology</h1>
                            </div>
                            <div className='flex flex-col gap-2 items-end'>
                                <h1>Inspiring, Guiding, Evolving</h1>
                                <h1 className=''>Since 2018</h1>
                            </div>
                        </div>
                        <div className='w-[512px] h-full border border-red-400'></div>
                    </div>
                    <h1 className="text-[16vmax] font-anton text-primary_text leading-[0.9] tracking-wider text-right text-nowrap">IEI&apos; SC CSE</h1>
                </div>

                <div className="w-1/6 h-full flex flex-col">
                    <div className='h-[45dvh] flex items-end'>
                        <RoundMarquee className='animate-spin-slow flex items-end' />
                    </div>
                    <div className='h-[40dvh] flex items-end'>

                        <h2 className='text-[16px] text-nowrap'>Maintaining the legacy.</h2>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-[30dvh] left-0'>
                <Maruqee />
            </div>
        </section>
    )
}

export default Hero
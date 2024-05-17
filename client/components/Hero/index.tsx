"use client"
import React from "react";
import RoundMarquee from "/public/roundmarquee.svg"
import Maruqee from "../Marquee";
import Image from "next/image";
import { useEffect } from "react";
const bg = "0dd8e831-2dec-4a9f-90a8-74edc70af0d9-y6aw6c.jpg"
const Hero: React.FC = () => {
    useEffect(() => {
   
        (
          async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default;
            const locomotiveScroll = new LocomotiveScroll();
          }
        )()
    }, [])
    
    return (
        <section data-scroll-container id="hero" className="relative w-full h-[100svh] flex flex-col items-center lg:items-end text-body pt-32 md:pt-48 lg:pt-24 px-10 text-right overflow-hidden">
            <div className="flex gap-8 h-full">
                <div data-scroll-section className="flex flex-col items-center lg:items-end h-full justify-between w-full">
                    <div className="flex gap-8 items-center flex-col-reverse lg:flex-row">
                        <div className="flex gap-4 lg:gap-8 justify-end">
                            <div className="flex flex-col lg:justify-between lg:h-[45dvh] gap-4">
                                <div className="flex flex-col gap-2 items-end">
                                    <h1>The oldest and most <span className="text-pop_orange">active</span> students community in</h1>
                                    <h1 className="font-semibold">Academy of Technology</h1>
                                </div>
                                <div className="flex flex-col gap-2 items-end">
                                    <h1>Inspiring, Guiding, Evolving</h1>
                                    <h1 className="">Since 2018</h1>
                                </div>
                            </div>
                            <RoundMarquee className="animate-spin-slow flex items-end w-20 lg:hidden" />
                        </div>
                        <div className="lg:w-[35vw] w-full lg:h-[45vh] h-[30vh] relative">
                        <Image 
                        priority 
                        src="https://utfs.io/f/0dd8e831-2dec-4a9f-90a8-74edc70af0d9-y6aw6c.jpg" 
                        fill 
                        alt="SC Team image"
                        className="filter saturate-50"
                        ></Image>
                        <div className="bg-secondary_orange/40 h-[40%] absolute z-10 w-full top-[50%] -translate-y-[50%]"></div>
                        </div>
                    </div>
                    <h1 data-scroll data-scroll-speed="-0.2" className="text-[11vmax] md:text-[16vmax] font-anton text-primary_text leading-[0.9] tracking-wider text-right text-nowrap">IEI SC CSE</h1>
                </div>

                <div className="w-1/6 h-full flex-col hidden lg:flex">
                    <div className="h-[45dvh] flex items-end">
                        <RoundMarquee className="animate-spin-slow items-end w-20" />
                    </div>
                    <div className="h-[40dvh] flex items-end">
                        <h2 className="text-[16px] text-nowrap">Maintaining the legacy.</h2>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-28 md:bottom-44 lg:bottom-[32dvh] left-0">
                <Maruqee />
            </div>
        </section>
    )
}

export default Hero
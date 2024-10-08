"use client"
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Recent from "@/components/RecentActivities";
import React, { use, useEffect, useLayoutEffect, useState } from "react";
import Chatbot from "@/components/Chatbot/index"

export default function Home() {
  useEffect(() => {

    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll({
          smooth: true,
          smartphone:{
            smooth: true,
          },
          tablet:{
            smooth: true,
            breakpoint:0,
          }
        });
      }
    )()
  }, [])

  return (
    <main className="min-h-[100svh] bg-background text-primary_text">
      <Navbar />
      <Hero />
      <AboutUs />
      <Recent />
      <ContactUs />
      <Chatbot/>
      <Footer />
    </main>
  );
};


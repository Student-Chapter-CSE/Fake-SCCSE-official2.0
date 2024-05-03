import Navbar from "@/app/components/Navbar/Navbar";
import Hero from "@/app/components/hero/Hero";
import Aboutus from "./components/Aboutus/Aboutus";
import Recent from "./components/recentactivities/recent";
import Contactus from "./components/contactus/contactus";
export default function Home() {
  return (
    <main className="min-h-screen bg-background text-primary_text ">
      <Navbar/>
      <Hero/>
      <Aboutus/>
      <Recent/>
      <Contactus/>
    </main>
  );
};
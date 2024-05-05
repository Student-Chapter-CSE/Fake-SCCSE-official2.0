import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Recent from "@/components/RecentActivities";

export default function Home() {
  return (
    <main className="min-h-[100svh] bg-background text-primary_text ">
      {/* <Navbar/> */}
      <Hero/>
      <AboutUs/>
      <Recent/>
      <ContactUs/>
      <Footer/>
    </main>
  );
};
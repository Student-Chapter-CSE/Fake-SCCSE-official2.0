import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-background flex gap-4 text-primary_text ">
      <div className="w-full flex pt-7 bg-white h-56 gap-1 pl-20 items-center">
        <h1 className="text-[4rem] font-anton text-primary_text leading-[0.9] tracking-wider">ABOUT</h1>
        <h1 className="text-[3rem] font-poppins font-semibold text-primary_text leading-[0.9] tracking-wider transform -rotate-90 ">US</h1>
        <h4 className="text-[1rem] font-montserrat text-primary_text leading-[0.9] pt-10 tracking-wider">We are a group of students from  (SCCSE) </h4>
        </div>
    </main>
  );
}
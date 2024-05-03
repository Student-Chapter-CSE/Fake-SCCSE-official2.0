import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
export default function Home() {
  return (
    <main className="w-full min-h-screen bg-background flex gap-4 text-primary_text ">
      <Navbar/>
    </main>
  );
}
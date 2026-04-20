import Sidebar from "./_components/Sidebar";
import background from "@/assets/images/background.png"
import Image from "next/image";
import Gartenzwerg from "./_components/Gartenzwerg";
import gartenzwerg_default from "@/assets/images/Gartenzwerge/Gartenzwerg_Default.png"
import gartenzwerg_schubkarren from "@/assets/images/Gartenzwerge/Gartenzwerg_Schubkarren.png"

export default function Home() {
  return (
    <div className="grid grid-cols-[1fr_300px] h-full">
      <div className="relative w-full h-full flex items-center justify-center">
        <Gartenzwerg image={gartenzwerg_default} />
        <Image src={background} className="absolute w-full h-full select-none" alt="" />
      </div>
      <Sidebar />
    </div>
  );
}

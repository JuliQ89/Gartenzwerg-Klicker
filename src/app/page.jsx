import Sidebar from "./_components/Sidebar";
import background from "@/assets/images/background.png";
import Image from "next/image";
import Gartenzwerg from "./_components/Gartenzwerg";
import gartenzwerg_default from "@/assets/images/Gartenzwerge/Gartenzwerg_Default.png";
import ScherbenCounter from "./_components/ScherbenCounter";

export default function Home() {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_300px] h-screen">
      <div className="relative z-0 w-full h-screen flex items-center justify-center">
        <div className="absolute w-full h-full">
          <div className="absolute w-full h-full bg-[rgba(0,0,0,0.2)]"></div>
          <Image
            src={background}
            className="w-full h-full select-none"
            alt=""
          />
        </div>
        <ScherbenCounter />
        <Gartenzwerg image={gartenzwerg_default} />
      </div>

      <Sidebar />
    </div>
  );
}

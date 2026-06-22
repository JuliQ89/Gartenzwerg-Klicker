"use client";

import Sidebar from "./_components/Sidebar";
import background_default from "@/assets/images/Backgrounds/Background_Default.png";
import Image from "next/image";
import Gartenzwerg from "./_components/Gartenzwerg";
import gartenzwerg_default from "@/assets/images/Gartenzwerge/Gartenzwerg_Default.png";
import ScherbenCounter from "./_components/ScherbenCounter";
import useUpgradeStore from "@/store/useUpgradeStore";
import { useEffect, useState } from "react";

export default function Home() {
  const upgradeList = useUpgradeStore((state) => state.upgradeList);
  const [backgroundImage, setBackgroundImage] = useState(background_default);
  const [gartenzwergImage, setGartenzwergImage] = useState(gartenzwerg_default);

  useEffect(() => {
    const buyedUpgrades = upgradeList
      .filter((upgrade) => upgrade.buyed === true)
      .sort((a, b) => a.id - b.id);
    if (buyedUpgrades.length === 0) return;
    const latestUpgrade = buyedUpgrades[buyedUpgrades.length - 1];
    setBackgroundImage(latestUpgrade.background_image);
    setGartenzwergImage(latestUpgrade.gartenzwerg_image);
  }, [upgradeList]);

  return (
    <div className="grid grid-cols-[minmax(0,1fr)_300px] h-screen">
      <div className="relative z-0 w-full h-screen flex items-center justify-center">
        <div className="absolute w-full h-full">
          <div className="absolute w-full h-full bg-[rgba(0,0,0,0.2)]"></div>
          <Image
            src={backgroundImage}
            className="select-none object-cover w-full h-full"
            loading="eager"
            alt=""
          />
        </div>
        <ScherbenCounter />
        <Gartenzwerg image={gartenzwergImage} />
      </div>

      <Sidebar />
    </div>
  );
}

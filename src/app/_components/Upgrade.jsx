"use client";

import React, { useState } from "react";
import Image from "next/image";
import useKlickerStore from "@/store/useKlickerStore";
import scherbe from "@/assets/images/Scherbe.png";
import UpgradeTooltip from "./UpgradeTooltip";

const Upgrade = ({
  title,
  costs,
  image,
  type,
  anzahl,
  possession,
  tooltipDescription,
  buyed,
  id,
}) => {
  const buyUpgrade = useKlickerStore((state) => state.buyUpgrade);
  const scherbenAnzahl = useKlickerStore((state) => state.scherbenAnzahl);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  const handleMouseEnter = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setTooltipPosition({
      top: rect.top + rect.height / 2,
      left: rect.left - 40,
    });

    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  const onUpgrade = () => {
    buyUpgrade(costs, type, anzahl, id);
  };

  const buyable = costs <= scherbenAnzahl;

  return (
    <div className="relative w-full">
      <UpgradeTooltip
        title={title}
        costs={costs}
        buyedCount={possession}
        description={tooltipDescription}
        isVisible={isTooltipVisible}
        position={tooltipPosition}
        buyed={buyed}
      />
      <button
        onClick={onUpgrade}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`w-full flex gap-1.5 ${buyable ? "bg-[rgba(175,175,175,0.6)] opacity-100" : "bg-[rgba(50,50,50,0.8)] opacity-60"} rounded-sm border border-[rgba(100,100,100,0.8)] p-3 cursor-pointer ring-2 ring-offset-0 ring-transparent hover:ring-offset-2 hover:ring-[rgb(50,50,50)]  transition-all`}
      >
        <div className="w-12 h-12 rounded-full">
          <Image
            src={image}
            alt=""
            className="rounded-[inherit] object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-white font-medium text-xl">
            {buyed ? title : "???"}
          </h2>
          <div className="flex items-center">
            <p
              className={`font-semibold text-md ${buyable ? "text-emerald-600" : "text-rose-600"}`}
            >
              {costs}
            </p>
            <Image src={scherbe} alt="" className="w-8" />
          </div>
        </div>
      </button>
    </div>
  );
};

export default Upgrade;

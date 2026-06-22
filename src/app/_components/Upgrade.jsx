"use client";

import React, { useState } from "react";
import Image from "next/image";
import useKlickerStore from "@/store/useKlickerStore";
import scherbe from "@/assets/images/Scherbe.png";
import UpgradeTooltip from "./UpgradeTooltip";
import { IoMdLock } from "react-icons/io";
import formatNumber from "@/utils/formatScherbenAnzahl";

const Upgrade = ({
  title,
  costs,
  upgrade_image,
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
        upgrade_image={upgrade_image}
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
        className={`w-full ${buyable ? "bg-[#ead9bf] border-gold opacity-100" : "bg-[#ebddc7] border-[#e6d1b1] opacity-60"} rounded-lg border-2 p-3 cursor-pointer ring-2 ring-offset-0 ring-transparent hover:ring-offset-2 hover:ring-forestgreen transition-all`}
      >
        <div className="w-full flex justify-between items-center gap-4">
          <div className="w-full flex gap-1.5">
            <div
              className={`w-14 h-14 aspect-square rounded-full ${buyable ? "border-gold" : "border-[#e6d1b1]"}  border-2`}
            >
              <Image
                src={upgrade_image}
                alt=""
                className="rounded-[inherit] object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col items-start">
              <h2 className="text-primary font-semibold font-merriweather text-lg">
                {buyed ? title : "???"}
              </h2>
              <div className="flex items-center">
                <p
                  className={`font-semibold font-merriweather text-md ${buyable ? "text-forestgreen" : "text-koralred"}`}
                >
                  {formatNumber(costs)}
                </p>
                <Image src={scherbe} alt="" className="w-8" />
              </div>
            </div>
          </div>

          {!buyed && (
            <div>
              <IoMdLock size={20} className="text-primary" />
            </div>
          )}
        </div>
      </button>
    </div>
  );
};

export default Upgrade;

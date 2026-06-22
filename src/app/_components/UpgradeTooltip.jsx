"use client";

import scherbe from "@/assets/images/Scherbe.png";
import useKlickerStore from "@/store/useKlickerStore";
import Image from "next/image";

const UpgradeTooltip = ({
  upgrade_image,
  title,
  costs,
  buyedCount,
  description,
  isVisible,
  position,
  buyed,
}) => {
  const scherbenAnzahl = useKlickerStore((state) => state.scherbenAnzahl);

  const buyable = costs <= scherbenAnzahl;

  return (
    <div
      role="tooltip"
      style={{ top: `${position.top}px`, left: `${position.left}px` }}
      className={`${isVisible ? "visible" : "invisible"} min-w-90 w-fit fixed -translate-x-full -translate-y-1/2 z-99999 px-5 py-2.5 rounded-lg backdrop-blur-sm bg-[rgba(15,31,20,0.8)] border-2 border-gold rounded-base shadow-xs transition-transform`}
    >
      <div className="w-full flex gap-4">
        <div className="w-14 h-14 aspect-square rounded-full border-2 border-gold">
          <Image
            src={upgrade_image}
            alt=""
            className="rounded-[inherit] object-cover w-full h-full"
          />
        </div>

        <div className="flex items-start justify-between gap-5 w-full">
          <div className="flex flex-col gap-1">
            <h2 className="font-semibold font-merriweather text-lg text-[#fffaf0]">
              {buyed ? title : "???"}
            </h2>
            <div className="flex items-center justify-center rounded-sm px-1 py-0.5 bg-[rgba(200,200,200,0.5)] backdrop-blur-sm text-[#fffaf0] text-sm w-fit min-w-10">
              Im Besitz: {buyedCount}
            </div>
          </div>

          <div className="flex">
            <p
              className={`font-semibold font-merriweather text-md ${buyable ? "text-forestgreen" : "text-koralred"}`}
            >
              {costs}
            </p>
            <Image src={scherbe} alt="" className="w-8" />
          </div>
        </div>
      </div>

      <ul className="mt-2">
        <li className="text-[#c5c0b4]">{description}</li>
      </ul>
    </div>
  );
};

export default UpgradeTooltip;

"use client";

import scherbe from "@/assets/images/Scherbe.png";
import useKlickerStore from "@/store/useKlickerStore";
import Image from "next/image";

const UpgradeTooltip = ({
  title,
  costs,
  buyedCount,
  description,
  isVisible,
}) => {
  const scherbenAnzahl = useKlickerStore((state) => state.scherbenAnzahl);

  const buyable = costs <= scherbenAnzahl;

  return (
    <div
      role="tooltip"
      className={`${isVisible ? "visible" : "invisible"} min-w-62.5 w-fit absolute top-1/2 right-[calc(100%+40px)] -translate-y-1/2 z-50 px-5 py-2.5 rounded-sm bg-slate-900 border border-default rounded-base shadow-xs transition-all`}
    >
      <div className="flex items-start justify-between gap-5 w-full">
        <div className="flex flex-col">
          <h2 className="font-semibold text-lg text-white">{title}</h2>
          <div className="flex items-center justify-center rounded-sm px-1 py-0.5 bg-gray-300 text-slate-800 text-sm w-fit min-w-10">
            Im Besitz: {buyedCount}
          </div>
        </div>

        <div className="flex">
          <p
            className={`font-semibold text-md ${buyable ? "text-emerald-600" : "text-rose-600"}`}
          >
            {costs}
          </p>
          <Image src={scherbe} alt="" className="w-8" />
        </div>
      </div>

      <ul>
        <li className="text-gray-200">{description}</li>
      </ul>
    </div>
  );
};

export default UpgradeTooltip;

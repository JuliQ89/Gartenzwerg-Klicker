"use client";

import scherbe from "@/assets/images/Scherbe.png";
import useKlickerStore from "@/store/useKlickerStore";

const UpgradeTooltip = ({ title, costs, buyedCount, description }) => {
  const scherbenAnzahl = useKlickerStore((state) => state.scherbenAnzahl);

  const buyable = costs <= scherbenAnzahl;

  return (
    <div
      role="tooltip"
      class="absolute z-10 px-3 py-2 bg-slate-800 border border-default rounded-base shadow-xs"
    >
      <div className="flex items-center justify-between w-full">
        <h2>{title}</h2>
        <div className="flex items-center">
          <p
            className={`font-semibold text-md ${buyable ? "text-emerald-600" : "text-rose-600"}`}
          >
            {costs}
          </p>
          <Image src={scherbe} alt="" className="w-8" />
        </div>
      </div>

      <ul>
        <li>{buyedCount}</li>
        <li>{description}</li>
      </ul>
    </div>
  );
};

export default UpgradeTooltip;

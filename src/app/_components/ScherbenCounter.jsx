"use client";

import React, { useEffect } from "react";
import useKlickerStore from "@/store/useKlickerStore";
import Image from "next/image";
import scherbe from "@/assets/images/Scherbe.png";
import formatNumber from "@/utils/formatScherbenAnzahl";

const ScherbenCounter = () => {
  const scherbenAnzahl = useKlickerStore((state) => state.scherbenAnzahl);
  const hasInterval = useKlickerStore((state) => state.hasInterval);
  const intervalVergroesserung = useKlickerStore(
    (state) => state.intervalVergroesserung,
  );
  const scherbenAnzahlVergroesern = useKlickerStore(
    (state) => state.scherbenAnzahlVergroesern,
  );

  useEffect(() => {
    if (!hasInterval) return;
    const interval = setInterval(() => {
      scherbenAnzahlVergroesern(intervalVergroesserung);
    }, 1000);
    return () => clearInterval(interval);
  }, [hasInterval, intervalVergroesserung]);

  return (
    <div className="flex gap-0.5 items-center justify-center absolute z-10 top-4 right-4 px-4 py-2 bg-creme broder-2 border-gold border-2 shadow-xl rounded-xl">
      <span className="text-primary font-semibold font-merriweather text-lg">
        {formatNumber(scherbenAnzahl)}
      </span>
      <Image src={scherbe} alt="" className="w-12" />
    </div>
  );
};

export default ScherbenCounter;

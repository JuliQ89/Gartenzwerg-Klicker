"use client"

import React from "react";
import useKlickerStore from "@/store/useKlickerStore";
import Image from "next/image";
import scherbe from "@/assets/images/Scherbe.png"

const ScherbenCounter = () => {
  const scherbenAnzahl = useKlickerStore((state) => state.scherbenAnzahl);

  return (
    <div className="flex gap-1.5 items-center justify-center absolute z-10 top-0 right-0 px-6 py-3 bg-slate-200 shadow-xl rounded-bl-xl border-2 border-[rgba(255,255,255,0.5)]">
      <span className="text-slate-800 font-semibold text-lg">{scherbenAnzahl}</span>
      <Image src={scherbe} alt="" className="w-12" />
    </div>
  );
};

export default ScherbenCounter;
 
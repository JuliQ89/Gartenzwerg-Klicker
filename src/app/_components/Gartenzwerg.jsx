"use client";

import Image from "next/image";
import useKlickerStore from "@/store/useKlickerStore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Gartenzwerg = ({ image }) => {
  const gartenzwergRef = useRef(null);

  const { contextSafe } = useGSAP({ scope: gartenzwergRef });

  const scherbenAnzahlVergroesern = useKlickerStore(
    (state) => state.scherbenAnzahlVergroesern,
  );
  const klickVergroeserung = useKlickerStore(
    (state) => state.klickVergroeserung,
  );

  const handleClick = contextSafe(() => {
    scherbenAnzahlVergroesern(klickVergroeserung);

    const gartenzwerg = gartenzwergRef.current;
    if (!gartenzwerg) return;

    gsap.killTweensOf(gartenzwerg);
    gsap
      .timeline()
      .to(gartenzwerg, { scale: 0.9, duration: 0.06, ease: "power2.out" })
      .to(gartenzwerg, { scale: 1.06, duration: 0.08, ease: "power2.out" })
      .to(gartenzwerg, {
        scale: 1,
        duration: 0.22,
        ease: "elastic.out(1, 0.45)",
      });
  });

  return (
    <div
      ref={gartenzwergRef}
      onClick={handleClick}
      onContextMenu={(e) => e.preventDefault()}
      className="z-10 cursor-pointer scale-100"
    >
      <Image src={image} height={250} alt="" />
    </div>
  );
};

export default Gartenzwerg;

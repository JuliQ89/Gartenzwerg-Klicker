"use client";

import Image from "next/image";
import useKlickerStore from "@/store/useKlickerStore";

const Gartenzwerg = ({ image }) => {
  const scherbenAnzahlVergroesern = useKlickerStore(
    (state) => state.scherbenAnzahlVergroesern,
  );
  const klickVergroeserung = useKlickerStore(
    (state) => state.klickVergroeserung,
  );

  const onGartenzwergKlick = () => {
    scherbenAnzahlVergroesern(klickVergroeserung);
  };

  return (
    <div
      className="z-10 cursor-pointer scale-100 transition-all ease-in duration-200 hover:scale-105"
      onClick={onGartenzwergKlick}
    >
      <Image src={image} height={250} alt="" />
    </div>
  );
};

export default Gartenzwerg;

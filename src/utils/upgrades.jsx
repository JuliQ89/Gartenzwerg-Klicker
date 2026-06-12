"use client";

import gartenzwerg_schubkarren from "@/assets/images/Upgrades/Gartenzwerg_Schubkarren.png";
import gartenzwerg_scherbenmaschine from "@/assets/images/Upgrades/Gartenzwerg_Scherbenmaschine.png";
import gartenzwerg_heckenschere from "@/assets/images/Upgrades/Gartenzwerg_Heckenschere.png";
import gartenzwerg_handwerker from "@/assets/images/Upgrades/Gartenzwerg_Handwerker.png";
import gartenzwerg_elefant from "@/assets/images/Upgrades/Gartenzwerg_Elefant.png";
import gartenzwerg_saphir from "@/assets/images/Upgrades/Gartenzwerg_Saphir.png";
import gartenzwerg_mine from "@/assets/images/Upgrades/Gartenzwerg_Mine.png";
import UPGRADE_TYPES from "./upgradeTypes";

const upgradeList = [
  {
    image: gartenzwerg_schubkarren,
    costs: 15,
    anzahl: 1,
    possession: 0,
    title: "Schubkarren",
    type: UPGRADE_TYPES.KLICK,
    tooltipDescription: "Lorem ipsum dolor sit amet",
    buyed: false,
    id: 1,
  },
  {
    image: gartenzwerg_heckenschere,
    costs: 100,
    anzahl: 1,
    possession: 0,
    title: "Heckenschere",
    type: UPGRADE_TYPES.INTERVAL,
    tooltipDescription: "Lorem ipsum dolor sit amet",
    buyed: false,
    id: 2,
  },
  {
    image: gartenzwerg_handwerker,
    costs: 1000,
    anzahl: 1,
    possession: 0,
    title: "Handwerker",
    type: UPGRADE_TYPES.KLICK,
    tooltipDescription: "Lorem ipsum dolor sit amet",
    buyed: false,
    id: 3,
  },
  {
    image: gartenzwerg_elefant,
    costs: 10000,
    anzahl: 1,
    possession: 0,
    title: "Elefant",
    type: UPGRADE_TYPES.KLICK,
    tooltipDescription: "Lorem ipsum dolor sit amet",
    buyed: false,
    id: 4,
  },
  {
    image: gartenzwerg_saphir,
    costs: 50000,
    anzahl: 1,
    possession: 0,
    title: "Saphir",
    type: UPGRADE_TYPES.KLICK,
    tooltipDescription: "Lorem ipsum dolor sit amet",
    buyed: false,
    id: 5,
  },
  {
    image: gartenzwerg_mine,
    costs: 250000,
    anzahl: 1,
    possession: 0,
    title: "Mine",
    type: UPGRADE_TYPES.KLICK,
    tooltipDescription: "Lorem ipsum dolor sit amet",
    buyed: false,
    id: 6,
  },
  {
    image: gartenzwerg_scherbenmaschine,
    costs: 1000000,
    anzahl: 10,
    possession: 0,
    title: "ScherbenMaschine",
    type: UPGRADE_TYPES.INTERVAL,
    tooltipDescription: "Lorem ipsum dolor sit amet",
    buyed: false,
    id: 7,
  },
];

export default upgradeList;

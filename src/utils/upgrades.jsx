"use client";

import upgrade_schubkarren from "@/assets/images/Upgrades/Upgrade_Schubkarren.png";
import upgrade_heckenschere from "@/assets/images/Upgrades/Upgrade_Heckenschere.png";
import upgrade_handwerker from "@/assets/images/Upgrades/Upgrade_Handwerker.png";
import upgrade_mine from "@/assets/images/Upgrades/Upgrade_Mine.png";
import upgrade_rubin from "@/assets/images/Upgrades/Upgrade_Rubin.png";
import upgrade_saphir from "@/assets/images/Upgrades/Upgrade_Saphir.png";
import upgrade_elefant from "@/assets/images/Upgrades/Upgrade_Elefant.png";
import upgrade_kamel from "@/assets/images/Upgrades/Upgrade_Kamel.png";
import upgrade_schneckenreiter from "@/assets/images/Upgrades/Upgrade_Schneckenreiter.png";
import upgrade_lokomotive from "@/assets/images/Upgrades/Upgrade_Lokomotive.png";
import upgrade_scherbenmaschine from "@/assets/images/Upgrades/Upgrade_Scherbenmaschine.png";
import upgrade_ballon from "@/assets/images/Upgrades/Upgrade_Ballon.png";
import upgrade_mond from "@/assets/images/Upgrades/Upgrade_Mond.png";
import upgrade_geist from "@/assets/images/Upgrades/Upgrade_Geist.png";
import upgrade_eis from "@/assets/images/Upgrades/Upgrade_Eis.png";
import upgrade_riese from "@/assets/images/Upgrades/Upgrade_Riese.png";
import upgrade_surfer from "@/assets/images/Upgrades/Upgrade_Surfer.png";
import upgrade_bergsteiger from "@/assets/images/Upgrades/Upgrade_Bergsteiger.png";
import upgrade_pirat from "@/assets/images/Upgrades/Upgrade_Pirat.png";
import upgrade_bademeister from "@/assets/images/Upgrades/Upgrade_Bademeister.png";
import upgrade_soldat from "@/assets/images/Upgrades/Upgrade_Soldat.png";

import background_schubkarren from "@/assets/images/Backgrounds/Background_Schubkarren.png";
import background_heckenschere from "@/assets/images/Backgrounds/Background_Heckenschere.png";
import background_handwerker from "@/assets/images/Backgrounds/Background_Handwerker.png";
import background_mine from "@/assets/images/Backgrounds/Background_Mine.png";
import background_rubin from "@/assets/images/Backgrounds/Background_Rubin.png";
import background_saphir from "@/assets/images/Backgrounds/Background_Saphir.png";
import background_elefant from "@/assets/images/Backgrounds/Background_Elefant.png";
import background_kamel from "@/assets/images/Backgrounds/Background_Kamel.png";
import background_schneckenreiter from "@/assets/images/Backgrounds/Background_Schneckenreiter.png";
import background_lokomotive from "@/assets/images/Backgrounds/Background_Lokomotive.png";
import background_scherbenmaschine from "@/assets/images/Backgrounds/Background_Scherbenmaschine.png";
import background_ballon from "@/assets/images/Backgrounds/Background_Ballon.png";
import background_mond from "@/assets/images/Backgrounds/Background_Mond.png";
import background_geist from "@/assets/images/Backgrounds/Background_Geist.png";
import background_eis from "@/assets/images/Backgrounds/Background_Eis.png";
import background_riese from "@/assets/images/Backgrounds/Background_Riese.png";
import background_surfer from "@/assets/images/Backgrounds/Background_Surfer.png";
import background_bergsteiger from "@/assets/images/Backgrounds/Background_Bergsteiger.png";
import background_pirat from "@/assets/images/Backgrounds/Background_Pirat.png";
import background_bademeister from "@/assets/images/Backgrounds/Background_Bademeister.png";
import background_soldat from "@/assets/images/Backgrounds/Background_Soldat.png";

import gartenzwerg_schubkarren from "@/assets/images/Gartenzwerge/Gartenzwerg_Schubkarren.png";
import gartenzwerg_heckenschere from "@/assets/images/Gartenzwerge/Gartenzwerg_Heckenschere.png";
import gartenzwerg_handwerker from "@/assets/images/Gartenzwerge/Gartenzwerg_Handwerker.png";
import gartenzwerg_mine from "@/assets/images/Gartenzwerge/Gartenzwerg_Mine.png";
import gartenzwerg_rubin from "@/assets/images/Gartenzwerge/Gartenzwerg_Rubin.png";
import gartenzwerg_saphir from "@/assets/images/Gartenzwerge/Gartenzwerg_Saphir.png";
import gartenzwerg_elefant from "@/assets/images/Gartenzwerge/Gartenzwerg_Elefant.png";
import gartenzwerg_kamel from "@/assets/images/Gartenzwerge/Gartenzwerg_Kamel.png";
import gartenzwerg_schneckenreiter from "@/assets/images/Gartenzwerge/Gartenzwerg_Schneckenreiter.png";
import gartenzwerg_lokomotive from "@/assets/images/Gartenzwerge/Gartenzwerg_Lokomotive.png";
import gartenzwerg_scherbenmaschine from "@/assets/images/Gartenzwerge/Gartenzwerg_Scherbenmaschine.png";
import gartenzwerg_ballon from "@/assets/images/Gartenzwerge/Gartenzwerg_Ballon.png";
import gartenzwerg_mond from "@/assets/images/Gartenzwerge/Gartenzwerg_Mond.png";
import gartenzwerg_geist from "@/assets/images/Gartenzwerge/Gartenzwerg_Geist.png";
import gartenzwerg_eis from "@/assets/images/Gartenzwerge/Gartenzwerg_Eis.png";
import gartenzwerg_riese from "@/assets/images/Gartenzwerge/Gartenzwerg_Riese.png";
import gartenzwerg_surfer from "@/assets/images/Gartenzwerge/Gartenzwerg_Surfer.png";
import gartenzwerg_bergsteiger from "@/assets/images/Gartenzwerge/Gartenzwerg_Bergsteiger.png";
import gartenzwerg_pirat from "@/assets/images/Gartenzwerge/Gartenzwerg_Pirat.png";
import gartenzwerg_bademeister from "@/assets/images/Gartenzwerge/Gartenzwerg_Bademeister.png";
import gartenzwerg_soldat from "@/assets/images/Gartenzwerge/Gartenzwerg_Soldat.png";

import { UPGRADE_TYPES } from "./constants";

const upgradeList = [
  {
    upgrade_image: upgrade_schubkarren,
    gartenzwerg_image: gartenzwerg_schubkarren,
    background_image: background_schubkarren,
    costs: 40,
    anzahl: 1,
    possession: 0,
    title: "Schubkarren",
    type: UPGRADE_TYPES.KLICK,
    tooltipDescription: "+1 Scherbe pro Sekunde",
    buyed: false,
    id: 1,
  },
  {
    upgrade_image: upgrade_heckenschere,
    gartenzwerg_image: gartenzwerg_heckenschere,
    background_image: background_heckenschere,
    costs: 130,
    anzahl: 1,
    possession: 0,
    title: "Heckenschere",
    type: UPGRADE_TYPES.INTERVAL,
    tooltipDescription: "+2 Scherben pro Klick",
    buyed: false,
    id: 2,
  },
  {
    upgrade_image: upgrade_handwerker,
    gartenzwerg_image: gartenzwerg_handwerker,
    background_image: background_handwerker,
    costs: 350,
    anzahl: 2,
    possession: 0,
    title: "Handwerker",
    type: UPGRADE_TYPES.INTERVAL,
    tooltipDescription: "+3 Scherben pro Sekunde",
    buyed: false,
    id: 3,
  },
  {
    upgrade_image: upgrade_mine,
    gartenzwerg_image: gartenzwerg_mine,
    background_image: background_mine,
    costs: 900,
    anzahl: 4,
    possession: 0,
    title: "Mine",
    type: UPGRADE_TYPES.KLICK,
    tooltipDescription: "+8 Scherben pro Klick",
    buyed: false,
    id: 4,
  },
  {
    upgrade_image: upgrade_rubin,
    gartenzwerg_image: gartenzwerg_rubin,
    background_image: background_rubin,
    costs: 2200,
    anzahl: 9,
    possession: 0,
    title: "Rubin",
    type: UPGRADE_TYPES.INTERVAL,
    tooltipDescription: "+18 Scherben pro Sekunde",
    buyed: false,
    id: 5,
  },
  {
    upgrade_image: upgrade_saphir,
    gartenzwerg_image: gartenzwerg_saphir,
    background_image: background_saphir,
    costs: 5500,
    anzahl: 18,
    possession: 0,
    title: "Saphir",
    type: UPGRADE_TYPES.INTERVAL,
    tooltipDescription: "+36 Scherben pro Klick",
    buyed: false,
    id: 6,
  },
  {
    upgrade_image: upgrade_elefant,
    gartenzwerg_image: gartenzwerg_elefant,
    background_image: background_elefant,
    costs: 13000,
    anzahl: 45,
    possession: 0,
    title: "Elefant",
    type: UPGRADE_TYPES.KLICK,
    tooltipDescription: "+90 Scherben pro Sekunde",
    buyed: false,
    id: 7,
  },
  {
    upgrade_image: upgrade_kamel,
    gartenzwerg_image: gartenzwerg_kamel,
    background_image: background_kamel,
    costs: 30000,
    anzahl: 90,
    possession: 0,
    title: "Kamel",
    type: UPGRADE_TYPES.KLICK,
    tooltipDescription: "+180 Scherben pro Klick",
    buyed: false,
    id: 8,
  },
  {
    upgrade_image: upgrade_schneckenreiter,
    gartenzwerg_image: gartenzwerg_schneckenreiter,
    background_image: background_schneckenreiter,
    costs: 70000,
    anzahl: 150,
    possession: 0,
    title: "Schneckenreiter",
    type: UPGRADE_TYPES.INTERVAL,
    tooltipDescription: "+300 Scherben pro Sekunde",
    buyed: false,
    id: 9,
  },
  {
    upgrade_image: upgrade_lokomotive,
    gartenzwerg_image: gartenzwerg_lokomotive,
    background_image: background_lokomotive,
    costs: 160000,
    anzahl: 400,
    possession: 0,
    title: "Lokomotive",
    type: UPGRADE_TYPES.KLICK,
    tooltipDescription: "+540 Scherben pro Klick",
    buyed: false,
    id: 10,
  },
  {
    upgrade_image: upgrade_scherbenmaschine,
    gartenzwerg_image: gartenzwerg_scherbenmaschine,
    background_image: background_scherbenmaschine,
    costs: 230000,
    anzahl: 270,
    possession: 0,
    title: "ScherbenMaschine",
    type: UPGRADE_TYPES.INTERVAL,
    tooltipDescription: "+800 Scherben pro Sekunde",
    buyed: false,
    id: 11,
  },
  {
    upgrade_image: upgrade_ballon,
    gartenzwerg_image: gartenzwerg_ballon,
    background_image: background_ballon,
    costs: 400000,
    anzahl: 850,
    possession: 0,
    title: "Ballon",
    type: UPGRADE_TYPES.INTERVAL,
    tooltipDescription: "+1700 Scherben pro Klick",
    buyed: false,
    id: 12,
  },
  {
    upgrade_image: upgrade_mond,
    gartenzwerg_image: gartenzwerg_mond,
    background_image: background_mond,
    costs: 950000,
    anzahl: 1750,
    possession: 0,
    title: "Mond",
    type: UPGRADE_TYPES.KLICK,
    tooltipDescription: "+3500 Scherben pro Sekunde",
    buyed: false,
    id: 13,
  },
  {
    upgrade_image: upgrade_geist,
    gartenzwerg_image: gartenzwerg_geist,
    background_image: background_geist,
    costs: 2200000,
    anzahl: 3500,
    possession: 0,
    title: "Geist",
    type: UPGRADE_TYPES.INTERVAL,
    tooltipDescription: "+7000 Scherben pro Klick",
    buyed: false,
    id: 14,
  },
  {
    upgrade_image: upgrade_eis,
    gartenzwerg_image: gartenzwerg_eis,
    background_image: background_eis,
    costs: 5000000,
    anzahl: 7000,
    possession: 0,
    title: "Eis",
    type: UPGRADE_TYPES.INTERVAL,
    tooltipDescription: "+14000 Scherben pro Sekunde",
    buyed: false,
    id: 15,
  },
  {
    upgrade_image: upgrade_riese,
    gartenzwerg_image: gartenzwerg_riese,
    background_image: background_riese,
    costs: 12000000,
    anzahl: 15000,
    possession: 0,
    title: "Riese",
    type: UPGRADE_TYPES.KLICK,
    tooltipDescription: "+30000 Scherben pro Klick",
    buyed: false,
    id: 16,
  },
  {
    upgrade_image: upgrade_bergsteiger,
    gartenzwerg_image: gartenzwerg_bergsteiger,
    background_image: background_bergsteiger,
    costs: 28000000,
    anzahl: 30000,
    possession: 0,
    title: "Bergsteiger",
    type: UPGRADE_TYPES.INTERVAL,
    tooltipDescription: "+60000 Scherben pro Sekunde",
    buyed: false,
    id: 17,
  },
  {
    upgrade_image: upgrade_pirat,
    gartenzwerg_image: gartenzwerg_pirat,
    background_image: background_pirat,
    costs: 65000000,
    anzahl: 65000,
    possession: 0,
    title: "Pirat",
    type: UPGRADE_TYPES.KLICK,
    tooltipDescription: "+130000 Scherben pro Klick",
    buyed: false,
    id: 18,
  },
  {
    upgrade_image: upgrade_surfer,
    gartenzwerg_image: gartenzwerg_surfer,
    background_image: background_surfer,
    costs: 150000000,
    anzahl: 140000,
    possession: 0,
    title: "Surfer",
    type: UPGRADE_TYPES.INTERVAL,
    tooltipDescription: "+280000 Scherben pro Sekunde",
    buyed: false,
    id: 19,
  },
  {
    upgrade_image: upgrade_bademeister,
    gartenzwerg_image: gartenzwerg_bademeister,
    background_image: background_bademeister,
    costs: 350000000,
    anzahl: 300000,
    possession: 0,
    title: "Bademeister",
    type: UPGRADE_TYPES.KLICK,
    tooltipDescription: "+600000 Scherben pro Klick",
    buyed: false,
    id: 20,
  },
  {
    upgrade_image: upgrade_soldat,
    gartenzwerg_image: gartenzwerg_soldat,
    background_image: background_soldat,
    costs: 900000000,
    anzahl: 750000,
    possession: 0,
    title: "Soldat",
    type: UPGRADE_TYPES.KLICK,
    tooltipDescription: "+1500000 Scherben pro Klick",
    buyed: false,
    id: 21,
  },
];

export default upgradeList;

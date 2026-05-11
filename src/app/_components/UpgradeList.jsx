"use client"

import Upgrade from './Upgrade'
import gartenzwerg_schubkarren from "@/assets/images/Upgrades/Gartenzwerg_Schubkarren.png";
import gartenzwerg_scherbenmaschine from "@/assets/images/Upgrades/Gartenzwerg_Scherbenmaschine.png";
import gartenzwerg_heckenschere from "@/assets/images/Upgrades/Gartenzwerg_Heckenschere.png";
import gartenzwerg_handwerker from "@/assets/images/Upgrades/Gartenzwerg_Handwerker.png";
import gartenzwerg_elefant from "@/assets/images/Upgrades/Gartenzwerg_Elefant.png";
import gartenzwerg_saphir from "@/assets/images/Upgrades/Gartenzwerg_Saphir.png";
import gartenzwerg_mine from "@/assets/images/Upgrades/Gartenzwerg_Mine.png";
import useKlickerStore from '@/store/useKlickerStore';


export const UPGRADE_TYPES = {
  KLICK: "KLICK",
  INTERVAL: "INTERVAL"
}

const UpgradeList = () => {
  const klickVergroeserung = useKlickerStore((state) => state.klickVergroeserung)

  return (
    <div className="flex flex-col gap-3 w-full h-full">
      <Upgrade
        image={gartenzwerg_schubkarren}
        costs={15} // 15
        anzahl={1}
        title={"Schubkarren"}
        type={UPGRADE_TYPES.KLICK}
      />
      <Upgrade
        image={gartenzwerg_heckenschere}
        costs={100} // 100
        anzahl={1}
        title={"Heckenschere"}
        type={UPGRADE_TYPES.INTERVAL}
      />
      <Upgrade
        image={gartenzwerg_handwerker}
        costs={1000} // 1000
        anzahl={Math.round(klickVergroeserung + klickVergroeserung * 0.1)}
        title={"Handwerker"}
        type={UPGRADE_TYPES.KLICK}
      />
      <Upgrade
        image={gartenzwerg_elefant}
        costs={10000} // 10000
        anzahl={Math.round(klickVergroeserung + klickVergroeserung * 0.1)}
        title={"Elefant"}
        type={UPGRADE_TYPES.KLICK}
      />
      <Upgrade
        image={gartenzwerg_saphir}
        costs={50000} // 50000
        anzahl={Math.round(klickVergroeserung + klickVergroeserung * 0.1)}
        title={"Saphir"}
        type={UPGRADE_TYPES.KLICK}
      />
      <Upgrade
        image={gartenzwerg_mine}
        costs={250000} // 250000
        anzahl={Math.round(klickVergroeserung + klickVergroeserung * 0.1)}
        title={"Mine"}
        type={UPGRADE_TYPES.KLICK}
      />
      <Upgrade
        image={gartenzwerg_scherbenmaschine}
        costs={1000000} // 1000000
        anzahl={10}
        title={"ScherbenMaschine"}
        type={UPGRADE_TYPES.INTERVAL}
      />
    </div>
  );
}

export default UpgradeList

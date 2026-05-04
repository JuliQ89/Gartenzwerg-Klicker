import React from 'react'
import Upgrade from './Upgrade'
import gartenzwerg_schubkarren from "@/assets/images/Upgrades/Gartenzwerg_Schubkarren.png";
import gartenzwerg_scherbenmaschine from "@/assets/images/Upgrades/Gartenzwerg_Scherbenmaschine.png";


export const UPGRADE_TYPES = {
  KLICK: "KLICK",
  INTERVAL: "INTERVAL"
}

const UpgradeList = () => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <Upgrade
        image={gartenzwerg_schubkarren}
        costs={5}
        anzahl={1}
        title={"Schubkarren"}
        type={UPGRADE_TYPES.KLICK}
      />
      <Upgrade
        image={gartenzwerg_scherbenmaschine}
        costs={100}
        anzahl={1}
        title={"ScherbenMaschine"}
        type={UPGRADE_TYPES.INTERVAL}
      />
    </div>
  );
}

export default UpgradeList

import React from 'react'
import Upgrade from './Upgrade'
import gartenzwerg_schubkarren from "@/assets/images/Upgrades/Gartenzwerg_Schubkarren.png";


export const UPGRADE_TYPES = {
  KLICK: "KLICK",
  INTERVALL: "INTERVALL"
}

const UpgradeList = () => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <Upgrade
        image={gartenzwerg_schubkarren}
        costs={50}
        anzahl={1}
        title={"Schubkarren"}
        type={UPGRADE_TYPES.KLICK}
      />
      <Upgrade
        image={gartenzwerg_schubkarren}
        costs={100}
        anzahl={1}
        title={"ScherbenMaschine"}
        type={UPGRADE_TYPES.INTERVALL}
      />
    </div>
  );
}

export default UpgradeList

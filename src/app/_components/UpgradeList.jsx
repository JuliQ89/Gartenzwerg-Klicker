import React from 'react'
import Upgrade from './Upgrade'
import gartenzwerg_schubkarren_background from "@/assets/images/Upgrades/Gartenzwerg_Schubkarren_background.png"


const UpgradeList = () => {
  return (
    <div className='flex flex-col gap-3 w-full'>
      <Upgrade image={gartenzwerg_schubkarren_background} costs={5} title={"Schubkarren"} />
    </div>
  )
}

export default UpgradeList

"use client"

import React from 'react'
import Image from 'next/image'
import useKlickerStore from '@/store/useKlickerStore'
import scherbe from "@/assets/images/Scherbe.png"

const Upgrade = ({ title, costs, image, type, anzahl }) => {
  const buyUpgrade = useKlickerStore((state) => state.buyUpgrade);
  
  const onUpdgrade = () => {
    buyUpgrade(costs, type, anzahl)    
  }

  return (
    <div onClick={onUpdgrade} className='flex gap-1.5 bg-white rounded-sm border border-slate-400 p-3 cursor-pointer hover:bg-slate-100 transition-all'>
      <div className='w-12 h-12 rounded-full'>
        <Image src={image} alt='' className='rounded-[inherit] object-cover w-full h-full' />
      </div>
      <div className='flex flex-col'>        
        <h2 className='text-slate-800 font-semibold text-xl'>{title}</h2>
        <div className='flex items-'>
          <p className='text-slate-600 font-medim text-md'>{costs}</p>
          <Image src={scherbe} alt='' className='w-8' />
        </div>
      </div>
    </div>
  )
}

export default Upgrade

import React from 'react'
import Image from 'next/image'

const Upgrade = ({ title, costs, image }) => {
  return (
    <div className='flex gap-1.5 bg-white rounded-sm border border-slate-400 p-3 cursor-pointer hover:bg-slate-100 transition-all'>
      <div className='w-12 h-12 rounded-full'>
        <Image src={image} alt='' className='rounded-[inherit] object-cover w-full h-full' />
      </div>
      <div className='flex flex-col'>        
        <h2 className='text-slate-800 font-semibold text-xl'>{title}</h2>
        <p className='text-slate-600'>{costs}</p>
      </div>
    </div>
  )
}

export default Upgrade

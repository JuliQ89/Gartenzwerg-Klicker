import React from 'react'
import UpgradeList from './UpgradeList'

const Sidebar = () => {
  return (
    <aside className='bg-white border-l border-slate-600 p-5 flex flex-col gap-5 items-center h-full'>
      <h1 className='text-slate-800 font-bold text-2xl'>Upgrades</h1>
      <UpgradeList />
    </aside>
  )
}

export default Sidebar

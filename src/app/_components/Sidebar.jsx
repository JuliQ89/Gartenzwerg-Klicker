import React from "react";
import UpgradeList from "./UpgradeList";

const Sidebar = () => {
  return (
    <aside className="max-h-screen relative overflow-y-auto overflow-x-visible z-10 bg-zinc-200 border-l border-slate-600 p-5 flex flex-col gap-5 items-center">
      <h1 className="text-slate-800 font-bold text-2xl">Upgrades</h1>
      <UpgradeList />
    </aside>
  );
};

export default Sidebar;

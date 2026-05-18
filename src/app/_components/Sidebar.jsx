import React from "react";
import UpgradeList from "./UpgradeList";

const Sidebar = () => {
  return (
    <aside className="h-screen relative z-10 bg-zinc-200 border-l border-slate-600 p-5 flex flex-col gap-5 items-center">
      <h1 className="text-slate-800 font-bold text-2xl">Upgrades</h1>
      {/* <div className="w-full overflow-y-auto overflow-x-visible"> */}
      <UpgradeList />
      {/* </div> */}
    </aside>
  );
};

export default Sidebar;

import React from "react";
import UpgradeList from "./UpgradeList";

const Sidebar = () => {
  return (
    <aside className="max-h-screen relative overflow-y-auto overflow-x-visible z-10 bg-creme p-5 flex flex-col gap-8 items-center">
      <h1 className="text-primary font-bold text-3xl font-merriweather">
        Upgrades
      </h1>
      <UpgradeList />
    </aside>
  );
};

export default Sidebar;

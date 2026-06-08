"use client";

import { useEffect } from "react";
import Upgrade from "./Upgrade";
import useUpgradeStore from "@/store/useUpgradeStore";

const UpgradeList = () => {
  const upgradeList = useUpgradeStore((state) => state.upgradeList);

  useEffect(() => {
    console.log("upgradeList", upgradeList);
  }, [upgradeList]);

  return (
    <div className="flex flex-col gap-3 w-full h-full">
      {upgradeList &&
        upgradeList.map((upgrade) => (
          <Upgrade
            key={upgrade.id}
            image={upgrade.image}
            costs={upgrade.costs}
            anzahl={upgrade.anzahl}
            possession={upgrade.possession}
            title={upgrade.title}
            type={upgrade.type}
            tooltipDescription={upgrade.tooltipDescription}
            buyed={upgrade.buyed}
            id={upgrade.id}
          />
        ))}
    </div>
  );
};

export default UpgradeList;

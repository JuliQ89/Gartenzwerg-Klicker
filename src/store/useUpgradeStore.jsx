import { create } from "zustand";
import upgradeList from "@/utils/upgrades";

const useUpgradeStore = create((set, get) => ({
  upgradeList: upgradeList,
  incrementPossession: (id) => {
    set((state) => ({
      upgradeList: state.upgradeList.map((upgrade) =>
        upgrade.id === id
          ? {
              ...upgrade,
              possession: upgrade.possession + 1,
            }
          : upgrade,
      ),
    }));
  },
  changeBuyedState: (id) => {
    set((state) => ({
      upgradeList: state.upgradeList.map((upgrade) =>
        upgrade.id === id
          ? {
              ...upgrade,
              buyed: true,
            }
          : upgrade,
      ),
    }));
  },
}));

export default useUpgradeStore;

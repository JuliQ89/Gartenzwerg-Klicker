import { create } from "zustand";
import UPGRADE_TYPES from "@/utils/upgradeTypes";
import useUpgradeStore from "./useUpgradeStore";

const useKlickerStore = create((set, get) => ({
  klickVergroeserung: 1,
  intervalVergroesserung: 0,
  hasInterval: false,
  scherbenAnzahl: 0,
  scherbenAnzahlVergroesern: (anzahl) => {
    set((state) => ({
      scherbenAnzahl: state.scherbenAnzahl + anzahl,
    }));
  },
  buyUpgrade: (costs, type, anzahl, id) => {
    const { incrementPossession, changeBuyedState } =
      useUpgradeStore.getState();
    if (costs <= get().scherbenAnzahl) {
      if (type === UPGRADE_TYPES.KLICK) {
        set((state) => ({
          klickVergroeserung: state.klickVergroeserung + anzahl,
        }));
      } else if (type === UPGRADE_TYPES.INTERVAL) {
        set((state) => ({
          intervalVergroesserung: state.intervalVergroesserung + anzahl,
          hasInterval: true,
        }));
      }
      set((state) => ({
        scherbenAnzahl: state.scherbenAnzahl - costs,
      }));
      incrementPossession(id);
      changeBuyedState(id);
    } else {
      alert("Du kannst dir dieses Upgrade nicht kaufen!");
    }
  },
}));

export default useKlickerStore;

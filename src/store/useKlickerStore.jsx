import { create } from "zustand";
import { UPGRADE_TYPES } from "@/app/_components/UpgradeList";

const useKlickerStore = create((set, get) => ({
    klickVergroeserung: 1,
    intervallVergoesserung: 1,
    scherbenAnzahl: 0,
    scherbenAnzahlVergroesern: (anzahl) => {
        set((state) => ({
            scherbenAnzahl: state.scherbenAnzahl + anzahl,
        }))
    },
    buyUpgrade: (costs, type, anzahl) => {
        if (costs <= get().scherbenAnzahl) {
            if (type === UPGRADE_TYPES.KLICK) {
                set((state) => ({
                  klickVergroeserung: state.klickVergroeserung + anzahl
                }));
            } else if (type === UPGRADE_TYPES.INTERVALL) {
                set((state) => ({
                  intervallVergoesserung: state.intervallVergoesserung + anzahl,
                }));
            }
            set((state) => ({
                scherbenAnzahl: state.scherbenAnzahl - costs
            }))
        } else {
            alert("Du kannst dir dieses Upgrade nicht kaufen!")
        }
    }
}))

export default useKlickerStore
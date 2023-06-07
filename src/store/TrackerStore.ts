import { ArmorData, SortColumn } from "@/types/Armors";
import { MaterialData } from "@/types/Materials";
import { Upgrades } from "@/types/Upgrades";
import { create } from "zustand";

interface ITrackerStoreState {
    armors: ArmorData,
    materials: MaterialData,
    upgrades: Upgrades,
    searchTerm: string,
    sortColumn: SortColumn,
    setArmors: (armors: ArmorData) => void,
    setMaterials: (materials: MaterialData) => void,
    setUpgrades: (upgrades: Upgrades) => void,
    setSearchTerm: (searchTerm: string) => void,
    setSortBy: (sortBy: SortColumn) => void,
}

/**
 * The tracker store that holds all app data.
 * @type {UseBoundStore<Mutate<StoreApi<ITrackerStoreState>, []>>}
 */
export const trackerStore = create<ITrackerStoreState>(set => ({
    armors: {},
    materials: {},
    upgrades: {},
    searchTerm: "",
    sortColumn: SortColumn.Set,
    setArmors: (armors) => set(state => ({ armors: armors })),
    setMaterials: (materials) => set(state => ({ materials: materials })),
    setUpgrades: (upgrades) => set(state => ({ upgrades: upgrades })),
    setSearchTerm: (searchTerm) => set(state => ({ searchTerm: searchTerm })),
    setSortBy: (sortColumn) => set(state => ({ sortColumn: sortColumn })),
}));
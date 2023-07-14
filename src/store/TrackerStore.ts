import { ArmorData } from "@/types/Armors";
import { MaterialData } from "@/types/Materials";
import { Upgrades } from "@/types/Upgrades";
import { create } from "zustand";
import { SortMethod } from "@/types/UserInterface";
import { sortMethods } from "@/components/armor/ArmorSort";

interface ITrackerStoreState {
    armors: ArmorData,
    materials: MaterialData,
    upgrades: Upgrades,
    materialsOpen: boolean,
    searchTerm: string,
    sortBy: SortMethod,
    sortDirection: number,
    showObtained: boolean,
    showNotObtained: boolean,
    showOnlyUpgradeable: boolean,
    setArmors: (armors: ArmorData) => void,
    setMaterials: (materials: MaterialData) => void,
    setUpgrades: (upgrades: Upgrades) => void,
    setSearchTerm: (searchTerm: string) => void,
    setSortBy: (sortBy: SortMethod) => void,
    setSortDirection: (direction: number) => void,
    setMaterialsOpen: (open: boolean) => void,
    setShowObtained: (showObtained: boolean) => void,
    setShowNotObtained: (showNotObtained: boolean) => void,
    setShowOnlyUpgradeable: (showOnlyUpgradeable: boolean) => void,
}

/**
 * The tracker store that holds all app data.
 * @type {UseBoundStore<Mutate<StoreApi<ITrackerStoreState>, []>>}
 */
export const trackerStore = create<ITrackerStoreState>(set => ({
    armors: {},
    materials: {},
    upgrades: {},
    materialsOpen: false,
    searchTerm: "",
    sortBy: sortMethods[0],
    sortDirection: 1,
    showObtained: false,
    showNotObtained: false,
    showOnlyUpgradeable: false,
    setArmors: (armors) => set(state => ({ armors: armors })),
    setMaterials: (materials) => set(state => ({ materials: materials })),
    setUpgrades: (upgrades) => set(state => ({ upgrades: upgrades })),
    setSearchTerm: (searchTerm) => set(state => ({ searchTerm: searchTerm })),
    setSortBy: (sortBy) => set(state => ({ sortBy: sortBy })),
    setSortDirection: (direction) => set(state => ({ sortDirection: direction })),
    setMaterialsOpen: (open) => set(state => ({ materialsOpen: open })),
    setShowObtained: (showObtained) => set((state) => ({ showObtained: showObtained })),
    setShowNotObtained: (showNotObtained) => set((state) => ({ showNotObtained: showNotObtained })),
    setShowOnlyUpgradeable: (showOnlyUpgradeable) => set((state) => ({ showOnlyUpgradeable: showOnlyUpgradeable })),
}));
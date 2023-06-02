import { Armor, ArmorSortMethod } from "@/types/Armor";
import { create } from "zustand";

interface ITrackerStoreState {
    armors: Armor[],
    searchTerm: string,
    sortBy: ArmorSortMethod,
    setArmors: (armors: Armor[]) => void,
    setSearchTerm: (searchTerm: string) => void,
    setSortBy: (sortBy: ArmorSortMethod) => void,
}

export const trackerStore = create<ITrackerStoreState>(set => ({
    armors: [],
    searchTerm: "",
    sortBy: ArmorSortMethod.Set,
    setArmors: (armors) => set(state => ({ armors: armors })),
    setSearchTerm: (searchTerm) => set(state => ({ searchTerm: searchTerm })),
    setSortBy: (sortBy) => set(state => ({ sortBy: sortBy })),
}));
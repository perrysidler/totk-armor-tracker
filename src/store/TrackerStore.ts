import { ArmorData, SortColumn } from "@/types/Armors";
import { create } from "zustand";

interface ITrackerStoreState {
    armors: ArmorData,
    searchTerm: string,
    sortBy: SortColumn,
    setArmors: (armors: ArmorData) => void,
    setSearchTerm: (searchTerm: string) => void,
    setSortBy: (sortBy: SortColumn) => void,
}

export const trackerStore = create<ITrackerStoreState>(set => ({
    armors: {},
    searchTerm: "",
    sortBy: SortColumn.Set,
    setArmors: (armors) => set(state => ({ armors: armors })),
    setSearchTerm: (searchTerm) => set(state => ({ searchTerm: searchTerm })),
    setSortBy: (sortBy) => set(state => ({ sortBy: sortBy })),
}));
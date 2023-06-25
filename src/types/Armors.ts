import { UpgradeCost } from "@/types/Upgrades";

/**
 * Overall armor data structure.
 * Key is armor name.
 */
export type ArmorData = {
    [key: string]: Armor,
}

/**
 * Individual armor properties.
 */
export type Armor = {
    name: string,
    setName: string,
    bodyPart: string,
    image: string,
    wiki: string,
    dlc: boolean,
    isUpgradable: boolean,
    currentLevel: number,
    obtained: boolean,
    sortOrder: number,
    upgrades?: UpgradeCost[][],
}

/**
 * Just the properties necessary for local storage.
 */
export type ArmorSaveData = {
    name: string,
    currentLevel: number,
    obtained: boolean,
}
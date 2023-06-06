import { UpgradeCost } from "@/types/Upgrades";

export type ArmorData = {
    [key: string]: Armor,
}

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

export type ArmorSaveData = {
    name: string,
    currentLevel: number,
    obtained: boolean,
}

export enum SortColumn {
    Set,
    BodyPart,
}
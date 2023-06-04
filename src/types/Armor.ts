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
    upgrades?: UpgradeCost[][]
}

export type ArmorSaveData = {
    name: string,
    currentLevel: number,
    obtained: boolean,
}

export enum ArmorSortMethod {
    Set,
    BodyPart,
}

export type ArmorUpgrades = {
    [key: string]: UpgradeCost[][],
}

export type ArmorUpgrade = {
    name: string,
    cost: UpgradeCost[][],
}

export type UpgradeCost = {
    name: string,
    quantity: number,
}
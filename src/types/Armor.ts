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
}

export enum ArmorSortMethod {
    Set,
    BodyPart,
}

export type Upgrades = {
    // [key: string]: { name: string, levels: UpgradeLevel[] },
    [key: string]: UpgradeCost[][],
}

export type UpgradeLevel = {
    level: number,
    materials: UpgradeCost[],
}

export type UpgradeCost = {
    name: string,
    quantity: number,
}

// export type UpgradesJson = {
//     [key: string]: UpgradeCost[][],
// }

// export type UpgradeData = {
//     [key: string]: Upgrade,
// }
//
// export type Upgrade = {
//     name: string,
//     levels: UpgradeLevel[],
// }
//
// export type UpgradeLevel = {
//     level: number,
//     materials: UpgradeCost[],
// }
//
// export type UpgradeCost = {
//     material: Material,
//     quantity: number,
// }
//
// export type UpgradesJson = {
//     [key: string]: UpgradeLevelJson,
// }
//
// export type UpgradeLevelJson = {
//     [key: string]: UpgradeCostJson[],
// }
//
// export type UpgradeCostJson = {
//     name: string,
//     quantity: number,
// }
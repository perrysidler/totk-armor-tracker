import data from "@/data/data.json";
import { trackerStore } from "@/store/TrackerStore";
import { ArmorData, ArmorSaveData } from "@/types/Armors";
import { MaterialData, MaterialSaveData } from "@/types/Materials";
import { Upgrades } from "@/types/Upgrades";

const currentDataVersion = 2;

export const loadData = () => {
    const dataVersion = window.localStorage.getItem("dataVersion");

    if (typeof dataVersion === "undefined" || dataVersion === null
        || isNaN(parseInt(dataVersion)) || parseInt(dataVersion) < currentDataVersion) {
        window.localStorage.removeItem("armorData");
        window.localStorage.setItem("dataVersion", currentDataVersion.toString());
    }

    let armorData: ArmorData = data.armors;
    let upgradeData: Upgrades = data.upgrades;
    let materialData: MaterialData = data.materials;
    const loadedArmorData: ArmorSaveData[] = JSON.parse(window.localStorage.getItem("armorData") || "null");
    const loadedMaterialData: MaterialSaveData[] = JSON.parse(window.localStorage.getItem("materialData") || "null");

    for (const key in armorData) {
        armorData[key].upgrades = upgradeData[armorData[key].setName] ?? upgradeData[armorData[key].name];
    }

    if (loadedArmorData !== null) {
        for (let armor of loadedArmorData) {
            armorData[armor.name].currentLevel = armor.currentLevel;
            armorData[armor.name].obtained = armor.obtained;
        }
    }

    if (loadedMaterialData !== null) {
        for (let material in materialData) {
            
        }
    }

    // let armorData: OldArmor[] = data.armors;
    // let upgradeData: ArmorUpgrades = data.upgrades;
    // let loadedArmorData = window.localStorage.getItem("armorData");
    //
    // if (loadedArmorData !== null) {
    //     let loadedArmors: ArmorSaveData[] = JSON.parse(loadedArmorData);
    //     for (let armor of armorData) {
    //         let matchedArmor = loadedArmors.find(x => x.name === armor.name);
    //         if (typeof matchedArmor !== "undefined") {
    //             armor.currentLevel = matchedArmor.currentLevel;
    //             armor.obtained = matchedArmor.obtained;
    //         }
    //         if (armor.isUpgradable) {
    //             if (armor.setName !== "" && typeof upgradeData[armor.setName] !== "undefined") {
    //                 armor.upgrades = upgradeData[armor.setName];
    //             } else if (typeof upgradeData[armor.name] !== "undefined") {
    //                 armor.upgrades = upgradeData[armor.name];
    //             }
    //         }
    //     }
    // } else {
    //     let saveData: ArmorSaveData[] = [];
    //     for (const armor of armorData) {
    //         saveData.push({
    //             name: armor.name,
    //             currentLevel: 0,
    //             obtained: false,
    //         } as ArmorSaveData);
    //         if (armor.isUpgradable) {
    //             if (armor.setName !== "" && typeof upgradeData[armor.setName] !== "undefined") {
    //                 armor.upgrades = upgradeData[armor.setName];
    //             } else if (typeof upgradeData[armor.name] !== "undefined") {
    //                 armor.upgrades = upgradeData[armor.name];
    //             }
    //         }
    //     }
    //     window.localStorage.setItem("armorData", JSON.stringify(saveData));
    // }
    //
    trackerStore.setState({ armors: armorData });
};

export const saveArmorData = (armorData: ArmorData) => {
    // const armorSaveData: ArmorSaveData[] = armorData.map(armor => {
    //     return {
    //         name: armor.name,
    //         currentLevel: armor.currentLevel,
    //         obtained: armor.obtained,
    //     } as ArmorSaveData;
    // });
    //
    // window.localStorage.setItem("armorData", JSON.stringify(armorSaveData));
};
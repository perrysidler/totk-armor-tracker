import data from "@/data/data.json";
import { trackerStore } from "@/store/TrackerStore";
import { ArmorData, ArmorSaveData } from "@/types/Armors";
import { MaterialData, MaterialSaveData } from "@/types/Materials";
import { Upgrades } from "@/types/Upgrades";

const currentDataVersion = 2;

/**
 * Loads the armor, upgrade, and material data, and combines
 * with any available local storage saved data.
 */
export const loadData = () => {
    const dataVersion = window.localStorage.getItem("dataVersion");

    if (typeof dataVersion === "undefined" || dataVersion === null
        || isNaN(parseInt(dataVersion)) || parseInt(dataVersion) < currentDataVersion) {
        window.localStorage.removeItem("armorData");
        window.localStorage.removeItem("materialData");
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
    } else {
        let armorSaveData: ArmorSaveData[] = [];
        for (const key in armorData) {
            armorSaveData.push({
                name: armorData[key].name,
                currentLevel: 0,
                obtained: false,
            } as ArmorSaveData);
        }
        window.localStorage.setItem("armorData", JSON.stringify(armorSaveData));
    }

    if (loadedMaterialData !== null) {
        for (let material of loadedMaterialData) {
            materialData[material.name].quantityInventory = material.quantityInventory;
        }
    } else {
        let materialSaveData: MaterialSaveData[] = [];
        for (const key in materialData) {
            materialSaveData.push({
                name: materialData[key].name,
                quantityInventory: 0,
            } as MaterialSaveData);
        }
        window.localStorage.setItem("materialData", JSON.stringify(materialSaveData));
    }

    trackerStore.setState({ armors: armorData });
    trackerStore.setState({ armors: armorData });
    trackerStore.setState({ armors: armorData });
};

/**
 * Saves the current armor data to local storage.
 * 
 * @param {ArmorData} armorData
 */
export const saveArmorData = (armorData: ArmorData) => {
    const armorSaveData: ArmorSaveData[] = Object.values(armorData).map(armor => {
        return {
            name: armor.name,
            currentLevel: armor.currentLevel,
            obtained: armor.obtained,
        } as ArmorSaveData;
    });

    window.localStorage.setItem("armorData", JSON.stringify(armorSaveData));
};

/**
 * Saves the current material data to local storage.
 * 
 * @param {MaterialData} materialData
 */
export const saveMaterialData = (materialData: MaterialData) => {
    const materialSaveData: MaterialSaveData[] = Object.values(materialData).map(material => {
        return {
            name: material.name,
            quantityInventory: material.quantityInventory,
        } as MaterialSaveData;
    });

    window.localStorage.setItem("armorData", JSON.stringify(materialSaveData));
};
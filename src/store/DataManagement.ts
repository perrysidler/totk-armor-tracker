import data from "@/data/data.json";
import { trackerStore } from "@/store/TrackerStore";
import { Armor, ArmorSaveData, ArmorUpgrade, ArmorUpgrades, UpgradeCost } from "@/types/Armor";

export const loadArmorData = () => {
    let armorData: Armor[] = data.armors;
    let upgradeData: ArmorUpgrades = data.upgrades;
    let loadedArmorData = window.localStorage.getItem("armorData");

    if (loadedArmorData !== null) {
        let loadedArmors: ArmorSaveData[] = JSON.parse(loadedArmorData);
        for (let armor of armorData) {
            let matchedArmor = loadedArmors.find(x => x.name === armor.name);
            if (typeof matchedArmor !== "undefined") {
                armor.currentLevel = matchedArmor.currentLevel;
                armor.obtained = matchedArmor.obtained;
            }
            if (armor.isUpgradable) {
                if (armor.setName !== "" && typeof upgradeData[armor.setName] !== "undefined") {
                    armor.upgrades = upgradeData[armor.setName];
                } else if (typeof upgradeData[armor.name] !== "undefined") {
                    armor.upgrades = upgradeData[armor.name];
                }
            }
        }
    } else {
        let saveData: ArmorSaveData[] = [];
        for (const armor of armorData) {
            saveData.push({
                name: armor.name,
                currentLevel: 0,
                obtained: false,
            } as ArmorSaveData);
            if (armor.isUpgradable) {
                if (armor.setName !== "" && typeof upgradeData[armor.setName] !== "undefined") {
                    armor.upgrades = upgradeData[armor.setName];
                } else if (typeof upgradeData[armor.name] !== "undefined") {
                    armor.upgrades = upgradeData[armor.name];
                }
            }
        }
        window.localStorage.setItem("armorData", JSON.stringify(saveData));
    }

    trackerStore.setState({ armors: armorData});
};

export const saveArmorData = (armorData: Armor[]) => {
    const armorSaveData: ArmorSaveData[] = armorData.map(armor => {
        return {
            name: armor.name,
            currentLevel: armor.currentLevel,
            obtained: armor.obtained,
        } as ArmorSaveData;
    });
    
    window.localStorage.setItem("armorData", JSON.stringify(armorSaveData));
};
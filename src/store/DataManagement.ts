import data from "@/data/data.json";
import { trackerStore } from "@/store/TrackerStore";
import { Armor, ArmorSaveData } from "@/types/Armor";

export const loadData = () => {
    let armorData: Armor[] = data.armors;
    let loadedData = window.localStorage.getItem("armorData");

    if (loadedData !== null) {
        let loadedArmors: ArmorSaveData[] = JSON.parse(loadedData);
        for (let armor of armorData) {
            let matchedArmor = loadedArmors.find(x => x.name === armor.name);
            if (typeof matchedArmor !== "undefined") {
                armor.currentLevel = matchedArmor.currentLevel;
                armor.obtained = matchedArmor.obtained;
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
        }
        window.localStorage.setItem("armorData", JSON.stringify(saveData));
    }

    trackerStore.setState({ armors: armorData});
};

export const saveData = (armorData: Armor[]) => {
    const armorSaveData: ArmorSaveData[] = armorData.map(armor => {
        return {
            name: armor.name,
            currentLevel: armor.currentLevel,
            obtained: armor.obtained,
        } as ArmorSaveData;
    });
    
    window.localStorage.setItem("armorData", JSON.stringify(armorSaveData));
}
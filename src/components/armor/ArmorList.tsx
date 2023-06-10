import { ArmorCard } from "@/components/armor/ArmorCard";
import { ArmorFilters } from "@/components/armor/ArmorFilters";
import { MaterialList } from "@/components/materials/MaterialList";
import { saveArmorData } from "@/store/DataManagement";
import { trackerStore } from "@/store/TrackerStore";
import { Armor, SortColumn } from "@/types/Armors";
import { Clamp } from "@/utils/utils";
import { Fragment } from "react";

const bodyPartOrder = [ "Head", "Chest", "Legs" ];
const sortBySet = (a: Armor, b: Armor) => {
    return a["sortOrder"] - b["sortOrder"];
};
const sortByBodyPart = (a: Armor, b: Armor) => {
    const typeOrder = bodyPartOrder.indexOf(a.bodyPart) - bodyPartOrder.indexOf(b.bodyPart);
    if (typeOrder < 0) return -1;
    if (typeOrder === 0) return a.sortOrder - b.sortOrder;
    return 0;
};

export const ArmorList = () => {
    const { armors, sortColumn, searchTerm, setArmors, materials, setMaterials } = trackerStore();

    const filteredArmors = Object.values(armors).filter(armor => armor.name.search(new RegExp(searchTerm, "i")) >= 0)
        .sort(sortColumn === SortColumn.Set ? sortBySet : sortByBodyPart);

    const levelIncrementHandler = (name: string, increment: number) => {
        let result = armors;
        let updatedArmor = result[name];
        if (updatedArmor) {
            // Calculate the levels we need to add/remove materials for
            let previousLevel = updatedArmor.currentLevel;
            let excludedLevels = [...Array(4).keys()];
            // Update armor data
            updatedArmor.currentLevel = Clamp(updatedArmor.currentLevel + increment, 0, 4);
            setArmors(result);
            saveArmorData(result);

            // filter to just the upgrade levels we need to add or remove
            if (previousLevel === 0) {
                // start at 0 (increase)
                excludedLevels = excludedLevels.filter(i => i >= updatedArmor.currentLevel);
            } else if (updatedArmor.currentLevel === 0) {
                // end at 0 (decrease)
                excludedLevels = excludedLevels.filter(i => i >= previousLevel);
            } else if (updatedArmor.currentLevel === 4) {
                // end at 4 (increase)
                excludedLevels = excludedLevels.filter(i => i < previousLevel);
            } else if (previousLevel === 4) {
                // start at 4 (decrease)
                excludedLevels = excludedLevels.filter(i => i < updatedArmor.currentLevel);
            } else {
                // standard case
                let min = Math.min(previousLevel, updatedArmor.currentLevel);
                let max = Math.max(previousLevel, updatedArmor.currentLevel);
                excludedLevels = excludedLevels.filter(i => i < min || i >= max);
            }

            // Update material data
            let materialTemp = { ...materials };
            for (const key in updatedArmor.upgrades) {
                if (excludedLevels.indexOf(parseInt(key)) >= 0)
                    continue;
                for (const materialName in updatedArmor.upgrades[parseInt(key)]) {
                    materialTemp[updatedArmor.upgrades[parseInt(key)][materialName].name].quantityRequired = materialTemp[updatedArmor.upgrades[parseInt(key)][materialName].name].quantityRequired || 0;
                    // @ts-ignore
                    materialTemp[updatedArmor.upgrades[parseInt(key)][materialName].name].quantityRequired += (increment < 0 ? 1 : -1) * updatedArmor.upgrades[parseInt(key)][materialName].quantity;
                }
            }
            setMaterials(materialTemp);
        }
    };

    const obtainedChangeHandler = (name: string, isObtained: boolean) => {
        let result = armors;
        let updatedArmor = result[name];
        if (updatedArmor) {
            let excludedLevels = [...Array(4).keys()];
            if (updatedArmor.currentLevel < 4)
                excludedLevels = excludedLevels.filter(i => i < updatedArmor.currentLevel);
            updatedArmor.obtained = isObtained;
            setArmors(result);
            saveArmorData(result);
            let materialTemp = { ...materials };
            for (const key in updatedArmor.upgrades) {
                if (excludedLevels.indexOf(parseInt(key)) >= 0)
                    continue;
                for (const materialName in updatedArmor.upgrades[parseInt(key)]) {
                    materialTemp[updatedArmor.upgrades[parseInt(key)][materialName].name].quantityRequired = materialTemp[updatedArmor.upgrades[parseInt(key)][materialName].name].quantityRequired || 0;
                    // @ts-ignore
                    materialTemp[updatedArmor.upgrades[parseInt(key)][materialName].name].quantityRequired += (isObtained ? 1 : -1) * updatedArmor.upgrades[parseInt(key)][materialName].quantity;
                }
            }
            setMaterials(materialTemp);
        }
    };

    return (
        <Fragment>
            <div className="container mx-auto">
                <MaterialList />
                <ArmorFilters />
                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                    {filteredArmors
                        .map(armor => (
                            <ArmorCard key={armor.name} armorData={armor} onLevelIncrement={levelIncrementHandler}
                                       onObtainedChange={obtainedChangeHandler} />
                        ))}
                    {!filteredArmors.length && <h2 className="px-2 py-6">No matching armors</h2>}
                </ul>
            </div>
        </Fragment>
    );
};
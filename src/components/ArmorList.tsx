import { ArmorCard } from "@/components/ArmorCard";
import { ArmorFilters } from "@/components/ArmorFilters";
import { saveData } from "@/store/DataManagement";
import { Armor, ArmorSortMethod } from "@/types/Armor";
import { trackerStore } from "@/store/TrackerStore";
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
    const { armors, sortBy, searchTerm, setArmors } = trackerStore();

    const filteredArmors = armors.filter(armor => armor.name.search(new RegExp(searchTerm, "i")) >= 0)
        .sort(sortBy === ArmorSortMethod.Set ? sortBySet : sortByBodyPart);
    
    const levelIncrementHandler = (name: string, increment: number) => {
        let result = armors;
        let updatedArmor = result.find(a => a.name === name);
        if (updatedArmor) {
            updatedArmor.currentLevel = Clamp(updatedArmor.currentLevel + increment, 0, 4);
            setArmors(result);
            saveData(result);
        }
    };

    return (
        <Fragment>
            <div className="container mx-auto">
                <ArmorFilters />
                <ul className="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 grid grid-cols-1 gap-6">
                    {filteredArmors
                        .map(armor => (
                            <ArmorCard key={armor.name} armorData={armor} onLevelIncrement={levelIncrementHandler} />
                        ))}
                    {!filteredArmors.length && <h2 className="px-2 py-6">No matching armors</h2>}
                </ul>
            </div>
        </Fragment>
    );
};
import { ArmorCard } from "@/components/ArmorCard";
import { Fragment, useState } from "react";
import data from "../data/data.json";

const bodyPartOrder = ["Head", "Chest", "Legs"];
const sortBySet = (a, b) => {
    return a["sortOrder"] - b["sortOrder"];
};
const sortByBodyPart = (a, b) => {
    const typeOrder = bodyPartOrder.indexOf(a["bodyPart"]) - bodyPartOrder.indexOf(b["bodyPart"]);
    if (typeOrder < 0) return -1;
    if (typeOrder === 0) return a["sortOrder"] - b["sortOrder"];
    return 0;
};

export const ArmorList = () => {
    const [ armors, setArmors ] = useState(data.armors);
    const [ sortedArmors, setSortedArmors ] = useState(armors.sort(sortBySet));
    const [ sortBy, setSortBy ] = useState("By Set");

    const switchSortOrder = () => {
        if (sortBy === "By Set") {
            setSortedArmors([...armors].sort(sortByBodyPart));
            setSortBy("By Body Part");
        } else {
            setSortedArmors([...armors].sort(sortBySet));
            setSortBy("By Set");
        }
    };

    return (
        <Fragment>
            <button className="w-36 bg-neutral-800 p-2 rounded mb-4" type="button" onClick={switchSortOrder} data-sort-by={sortBy}>
                {sortBy}
            </button>
            <ul className="flex gap-6 flex-wrap justify-between">
                {sortedArmors
                    .map(armor => (
                    <ArmorCard key={armor.name} armorData={armor}/>
                ))}
            </ul>
        </Fragment>
    );
};
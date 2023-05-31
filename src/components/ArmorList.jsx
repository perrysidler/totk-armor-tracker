import { ArmorCard } from "@/components/ArmorCard";
import { ArmorFilters } from "@/components/ArmorFilters";
import { useTrackerStore } from "@/pages/_app";
import { Fragment, useState } from "react";
import data from "../data/data.json";

const bodyPartOrder = [ "Head", "Chest", "Legs" ];
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
    const { sortBy, searchTerm } = useTrackerStore();

    const filteredArmors = data.armors.filter(armor => armor.name.search(new RegExp(searchTerm, "i")) >= 0)
        .sort(sortBy === "set" ? sortBySet : sortByBodyPart);

    return (
        <Fragment>
            <div className="container mx-auto">
                <ArmorFilters />
                <ul className="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 grid grid-cols-1 gap-6">
                    {filteredArmors
                        .map(armor => (
                            <ArmorCard key={armor.name} armorData={armor} />
                        ))}
                    {!filteredArmors.length && <h2 className="px-2 py-6">No matching armors</h2>}
                </ul>
            </div>
        </Fragment>
    );
};
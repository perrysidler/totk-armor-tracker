import { ArmorCard } from "@/components/ArmorCard";
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
    const [ armors, setArmors ] = useState(data.armors);
    const [ sortBy, setSortBy ] = useState("By Set");
    const [ searchTerm, setSearchTerm ] = useState("");

    const switchSortOrder = () => {
        setSortBy(sortBy !== "By Set" ? "By Set" : "By Body Part");
    };

    const searchChangeHandler = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredArmors = armors.filter(armor => armor.name.search(new RegExp(searchTerm, "i")) >= 0)
        .sort(sortBy === "By Set" ? sortBySet : sortByBodyPart);

    return (
        <Fragment>
            <div className="container mx-auto">
                <div className="mx-auto armor-filters-container">
                    <button className="mb-4 w-36 rounded bg-neutral-800 p-2" type="button" onClick={switchSortOrder}
                            data-sort-by={sortBy}>
                        {sortBy}
                    </button>
                    <input type="text" className="ml-8 h-10 w-64 rounded border-2 border-black bg-white p-2 text-black"
                           placeholder="Search armors" value={searchTerm} onChange={searchChangeHandler} />
                </div>
                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                    {filteredArmors
                        .map(armor => (
                            <ArmorCard key={armor.name} armorData={armor} />
                        ))}
                    {!filteredArmors.length && <h2 className="p-6">No matching armors</h2>}
                </ul>
            </div>
        </Fragment>
    );
};
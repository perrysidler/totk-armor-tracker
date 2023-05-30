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
                <button className="w-36 bg-neutral-800 p-2 rounded mb-4" type="button" onClick={switchSortOrder}
                        data-sort-by={sortBy}>
                    {sortBy}
                </button>
                <input type="text" className="ml-8 h-10 rounded bg-white border-2 border-black w-64 text-black p-2"
                       placeholder="Search armors" value={searchTerm} onChange={searchChangeHandler}/>
                <ul className="flex gap-6 flex-wrap justify-center container">
                    {filteredArmors
                        .map(armor => (
                            <ArmorCard key={armor.name} armorData={armor}/>
                        ))}
                    <li className="invisible w-64"></li>
                    <li className="invisible w-64"></li>
                    <li className="invisible w-64"></li>
                    <li className="invisible w-64"></li>
                    <li className="invisible w-64"></li>
                    <li className="invisible w-64"></li>
                    <li className="invisible w-64"></li>
                    <li className="invisible w-64"></li>
                    <li className="invisible w-64"></li>
                    <li className="invisible w-64"></li>
                    <li className="invisible w-64"></li>
                    <li className="invisible w-64"></li>
                    <li className="invisible w-64"></li>
                    <li className="invisible w-64"></li>
                    <li className="invisible w-64"></li>
                    <li className="invisible w-64"></li>
                    <li className="invisible w-64"></li>
                </ul>
            </div>
        </Fragment>
    );
};
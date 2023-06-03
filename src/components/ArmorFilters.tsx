import { ArmorSortMethod } from "@/types/Armor";
import { trackerStore } from "@/store/TrackerStore";
import { ChangeEvent } from "react";

const sortByNames = {
    [ArmorSortMethod.Set]: "By Set",
    [ArmorSortMethod.BodyPart]: "By Body Part",
};

export const ArmorFilters = () => {
    const { sortBy, setSortBy } = trackerStore();
    const { searchTerm, setSearchTerm } = trackerStore();

    const switchSortOrder = () => {
        setSortBy(sortBy !== ArmorSortMethod.Set ? ArmorSortMethod.Set : ArmorSortMethod.BodyPart);
    };

    const searchChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="mx-auto text-center armor-filters-container sm:text-left">
            <button className="mb-4 w-36 rounded bg-neutral-800 p-2" type="button" onClick={switchSortOrder}
                    data-sort-by={sortByNames[sortBy]}>
                {sortByNames[sortBy]}
            </button>
            <input type="text" className="ml-8 h-10 w-64 rounded border-2 border-black bg-white p-2 text-black"
                   placeholder="Search armors" value={searchTerm} onChange={searchChangeHandler} />
        </div>
    );
};
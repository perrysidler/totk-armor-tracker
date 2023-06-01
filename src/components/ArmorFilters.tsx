import { useTrackerStore } from "@/pages/_app";
import { ArmorSortMethod } from "@/types/Armor";
import { ChangeEvent } from "react";

const sortByNames = {
    [ArmorSortMethod.Set]: "By Set",
    [ArmorSortMethod.BodyPart]: "By Body Part",
};

export const ArmorFilters = () => {
    const { sortBy, setSortBy } = useTrackerStore();
    const { searchTerm, setSearchTerm } = useTrackerStore();

    const switchSortOrder = () => {
        setSortBy(sortBy !== ArmorSortMethod.Set ? ArmorSortMethod.Set : ArmorSortMethod.BodyPart);
    };

    const searchChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="armor-filters-container sm:text-left mx-auto text-center">
            <button className="w-36 bg-neutral-800 p-2 mb-4 rounded" type="button" onClick={switchSortOrder}
                    data-sort-by={sortByNames[sortBy]}>
                {sortByNames[sortBy]}
            </button>
            <input type="text" className="w-64 h-10 p-2 ml-8 text-black bg-white border-2 border-black rounded"
                   placeholder="Search armors" value={searchTerm} onChange={searchChangeHandler} />
        </div>
    );
};
import { trackerStore } from "@/store/TrackerStore";
import { SortColumn } from "@/types/Armors";
import { ChangeEvent } from "react";

const sortByNames = {
    [SortColumn.Set]: "By Set",
    [SortColumn.BodyPart]: "By Body Part",
};

export const ArmorFilters = () => {
    const { sortColumn, setSortBy } = trackerStore();
    const { searchTerm, setSearchTerm } = trackerStore();

    const switchSortOrder = () => {
        setSortBy(sortColumn !== SortColumn.Set ? SortColumn.Set : SortColumn.BodyPart);
    };

    const searchChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="mx-auto text-center armor-filters-container sm:text-left">
            <button
                className="mb-4 w-36 rounded bg-neutral-800 text-sm font-semibold text-white shadow-sm px-3.5 py-2.5 hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-800"
                type="button" onClick={switchSortOrder}
                data-sort-by={sortByNames[sortColumn]}>
                {sortByNames[sortColumn]}
            </button>
            <input type="text"
                   className="text-xs mx-auto mb-4 block h-10 w-full xs:w-64 rounded border-0 border-2 border-black bg-white p-2 text-black focus:ring-transparent sm:mr-0 sm:ml-8 sm:inline-block"
                   placeholder="Search armors" value={searchTerm} onChange={searchChangeHandler} />
        </div>
    );
};
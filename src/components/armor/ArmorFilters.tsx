import { trackerStore } from "@/store/TrackerStore";
import { ChangeEvent } from "react";
import { Toggle } from "@/components/Toggle";
import { ArmorSort } from "@/components/armor/ArmorSort";
import { ClassNames, focusStyles } from "@/utils/utils";

export const ArmorFilters = () => {
    const { searchTerm, setSearchTerm } = trackerStore();
    const { showNotObtained, setShowNotObtained } = trackerStore();
    const { showObtained, setShowObtained } = trackerStore();

    const searchChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };
    const filterObtainedChange = (next: boolean) => {
        setShowNotObtained(false);
        setShowObtained(!showObtained);
    };
    const filterNotObtainedChange = (next: boolean) => {
        setShowObtained(false);
        setShowNotObtained(!showNotObtained);
    };

    return (
        <div
            className="mx-auto text-center armor-filters-container rounded bg-neutral-800 p-2 mb-4 m-h-[50px] gap-4 flex items-center flex-wrap">
            <input type="text"
                   className={ClassNames("text-sm block h-8 w-full xs:w-64 rounded border-0 border-black bg-white p-2 text-black sm:inline-block", focusStyles)}
                   placeholder="Search armors" value={searchTerm} onChange={searchChangeHandler} />
            <ArmorSort />
            <div className="flex justify-center items-center gap-2">
                Only Obtained
                <Toggle value={showObtained} onObtainedChange={filterObtainedChange} />
            </div>
            <div className="flex justify-center items-center gap-2">
                Only Not Obtained
                <Toggle value={showNotObtained} onObtainedChange={filterNotObtainedChange} />
            </div>
        </div>
    );
};
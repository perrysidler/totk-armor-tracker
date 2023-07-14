import { trackerStore } from "@/store/TrackerStore";
import { ChangeEvent } from "react";
import { Toggle } from "@/components/Toggle";
import { ArmorSort } from "@/components/armor/ArmorSort";
import { ClassNames, focusStyles } from "@/utils/utils";

export const ArmorFilters = () => {
    const { searchTerm, setSearchTerm } = trackerStore();
    const { showNotObtained, setShowNotObtained } = trackerStore();
    const { showObtained, setShowObtained } = trackerStore();
    const { showOnlyUpgradeable, setShowOnlyUpgradeable } = trackerStore();

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
            className="mx-auto mb-4 flex flex-wrap items-center gap-4 rounded bg-neutral-800 text-center armor-filters-container p-2.5 m-h-[50px]"
        >
            <input type="text"
                   className={ClassNames("text-sm block h-8 w-full sm:w-64 rounded border-0 border-black bg-white p-2 text-black sm:inline-block", focusStyles)}
                   placeholder="Search armors" value={searchTerm} onChange={searchChangeHandler} />
            <ArmorSort />
            <div className="flex items-center justify-center gap-2">
                Only Obtained
                <Toggle value={showObtained} onObtainedChange={filterObtainedChange} />
            </div>
            <div className="flex items-center justify-center gap-2">
                Only Not Obtained
                <Toggle value={showNotObtained} onObtainedChange={filterNotObtainedChange} />
            </div>
            <div className="flex items-center justify-center gap-2">
                Only Upgradeable
                <Toggle value={showOnlyUpgradeable} onObtainedChange={setShowOnlyUpgradeable} />
            </div>
        </div>
    );
};
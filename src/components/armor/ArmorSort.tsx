import { Fragment, MouseEvent } from "react"
import { Listbox, Transition } from "@headlessui/react"
import { BarsArrowDownIcon, BarsArrowUpIcon, CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid"
import { ClassNames, focusStyles } from "@/utils/utils";
import { SortMethod } from "@/types/UserInterface";
import { trackerStore } from "@/store/TrackerStore";

export const sortMethods: SortMethod[] = [
    {
        name: "Set (In-game)",
        value: "bySet"
    },
    {
        name: "Body Part (In-game)",
        value: "byBodyPart"
    },
    {
        name: "Name",
        value: "name"
    },
    {
        name: "Set Name",
        value: "setName"
    }
];

export const ArmorSort = () => {
    const { sortBy, setSortBy } = trackerStore();
    const { sortDirection, setSortDirection } = trackerStore();
    const onSortDirectionClick = (event: MouseEvent<HTMLButtonElement>) => {
        setSortDirection(-1 * sortDirection);
    };
    return (
        <div className="flex w-full gap-x-1 sm:w-auto">
            <Listbox value={sortBy} onChange={setSortBy}>
                {({ open }) => (
                    <div className="flex grow items-center gap-4 sort-dropdown">
                        <div className="relative w-full">
                            <Listbox.Button
                                className={ClassNames("relative w-full sm:w-48 block cursor-default rounded bg-white py-1 pl-3 pr-10 text-left text-gray-900 shadow-sm sm:text-sm sm:leading-6", focusStyles)}>
                                <span className="block">{sortBy.name}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                            </Listbox.Button>

                            <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options
                                    className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded bg-white py-1 text-left shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {sortMethods.map((method) => (
                                        <Listbox.Option
                                            key={method.name}
                                            className={({ active }) =>
                                                ClassNames(
                                                    active ? "bg-[#b99f65] text-white" : "text-gray-900",
                                                    "relative cursor-default select-none py-2 pl-3 pr-9"
                                                )
                                            }
                                            value={method}
                                        >
                                            {({ selected, active }) => (
                                                <>
                                                <span
                                                    className={ClassNames(selected ? "font-semibold" : "font-normal", "block truncate")}>
                                                    {method.name}
                                                </span>

                                                    {selected ? (
                                                        <span
                                                            className={ClassNames(
                                                                active ? "text-white" : "text-[#A0864C]",
                                                                "absolute inset-y-0 right-0 flex items-center pr-4"
                                                            )}
                                                        >
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </div>
                )}
            </Listbox>
            <button
                className={ClassNames("w-8 h-8 pt-1 pl-1 rounded", focusStyles)}
                type="button"
                onClick={onSortDirectionClick}
                title={sortDirection === 1 ? "Ascending sort" : "Descending sort"}
            >
                {sortDirection === 1 ? (
                    <BarsArrowUpIcon className="" aria-hidden="true" />
                ) : (
                    <BarsArrowDownIcon className="" aria-hidden="true" />
                )}
            </button>
        </div>
    )
}
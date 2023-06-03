import { ChangeEvent } from "react";

interface IArmorObtainedProps {
    name: string,
    obtained: boolean,
    onObtainedChange: (isObtained: boolean) => void,
}

export const ArmorObtained = ({ name, obtained, onObtainedChange }: IArmorObtainedProps) => {
    const armorIdName = name.toLowerCase().replaceAll(" ", "-").replaceAll("'", "");

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const isObtained: boolean = e.currentTarget.checked;
        onObtainedChange(isObtained);
    };
    
    return (
        <div className="relative flex items-center group m-1.5">
            <input
                id={`${armorIdName}-obtained`}
                aria-describedby={`${armorIdName}-obtained-tooltip`}
                type="checkbox"
                onChange={onChange}
                checked={obtained}
                className="h-4 w-4 rounded-sm bg-transparent checked:bg-neutral-500 focus:text-transparent focus:ring-0 focus:ring-offset-0 checked:hover:bg-neutral-500 checked:focus:bg-neutral-500"
            />
            <span id={`${armorIdName}-obtained-tooltip`} className="absolute left-1/2 z-20 m-4 mx-auto hidden -translate-x-1/2 translate-y-full whitespace-nowrap rounded-sm bg-neutral-700 px-1 text-sm text-gray-100 opacity-0 transition-opacity group-hover:block group-hover:opacity-100">
                {obtained ? "In your inventory" : "Not in inventory"}
            </span>
        </div>
    );
};
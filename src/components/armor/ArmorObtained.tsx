import { ChangeEvent } from "react";
import { Tooltip } from "@/components/Tooltip";

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
        <div className="relative flex items-center m-1.5">
            <Tooltip text={obtained ? "In your inventory" : "Not in inventory"}>
                <input
                    id={`${armorIdName}-obtained`}
                    type="checkbox"
                    onChange={onChange}
                    defaultChecked={obtained}
                    className="h-5 w-5 rounded-sm border-2 border-neutral-500 bg-transparent checked:bg-neutral-500 focus:text-transparent focus:ring-0 focus:ring-offset-0 focus-visible:border-2 focus-visible:border-neutral-200 checked:hover:bg-neutral-500 checked:focus:bg-neutral-500 checked:focus-visible:border-2 checked:focus-visible:border-neutral-200"
                />
            </Tooltip>
        </div>
    );
};
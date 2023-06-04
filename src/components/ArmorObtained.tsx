import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";

interface IArmorObtainedProps {
    name: string,
    obtained: boolean,
    onObtainedChange: (isObtained: boolean) => void,
}

export const ArmorObtained = ({ name, obtained, onObtainedChange }: IArmorObtainedProps) => {
    const [ hideTooltip, setHideTooltip ] = useState(false);
    const armorIdName = name.toLowerCase().replaceAll(" ", "-").replaceAll("'", "");

    const timerRef = useRef({
        timer: setTimeout(() => {
        })
    });

    useEffect(() => {
        return () => {
            clearTimeout(timerRef.current.timer);
        };
    }, []);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const isObtained: boolean = e.currentTarget.checked;
        onObtainedChange(isObtained);
        setHideTooltip(false);

        if (!isMobile) {
            return;
        }

        clearTimeout(timerRef.current.timer);
        timerRef.current.timer = setTimeout(() => {
            setHideTooltip(true);
        }, 1000);
    };
    const beginHover = (e: MouseEvent<HTMLDivElement>) => {
        if (!isMobile) {
            return;
        }
        setHideTooltip(true);
    };
    const endHover = (e: MouseEvent<HTMLDivElement>) => {
        if (!isMobile) {
            return;
        }
        setHideTooltip(false);
    };

    return (
        <div className="relative flex items-center group m-1.5"
             onMouseEnter={beginHover}
             onMouseLeave={endHover}
        >
            <input
                id={`${armorIdName}-obtained`}
                aria-describedby={`${armorIdName}-obtained-tooltip`}
                type="checkbox"
                onChange={onChange}
                checked={obtained}
                className="h-5 w-5 rounded-sm bg-transparent checked:bg-neutral-500 focus:text-transparent focus:ring-0 focus:ring-offset-0 checked:hover:bg-neutral-500 checked:focus:bg-neutral-500"
            />
            <span id={`${armorIdName}-obtained-tooltip`}
                  className="pointer-events-none absolute -left-1/2 z-20 m-4 mx-auto hidden -translate-x-full whitespace-nowrap rounded-sm bg-neutral-700 text-sm text-gray-100 opacity-0 transition-opacity px-1.5 py-0.5 group-hover:block group-hover:opacity-100">
                {obtained ? "In your inventory" : "Not in inventory"}
            </span>
        </div>
    );
};
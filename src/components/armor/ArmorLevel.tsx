import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEvent, useState } from "react";
import { isMobile } from "react-device-detect";

interface IArmorLevelProps {
    level: number,
    obtained: boolean,
    onLevelChange: (level: number) => void,
}

export const ArmorLevel = ({ level, obtained, onLevelChange }: IArmorLevelProps) => {
    const [ hoverIndex, setHoverIndex ] = useState(-1);

    const beginHover = (e: MouseEvent<HTMLButtonElement>) => {
        if (!obtained || isMobile)
            return;

        const index: number = parseInt(e.currentTarget.dataset.index || "0");
        setHoverIndex(index);
    };
    const endHover = (e: MouseEvent<HTMLButtonElement>) => {
        if (!obtained || isMobile)
            return;

        setHoverIndex(-1);
    };
    const levelClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const index: number = parseInt(e.currentTarget.dataset.index || "0");
        if (index === level - 1) {
            onLevelChange(0);
            return;
        }

        onLevelChange(index + 1);
    };

    return (
        <div className="mt-1 mb-2 flex items-center rounded bg-neutral-800">
            <span className="hidden w-10">{level > 0 ? level : "Base"}</span>
            <div className="flex px-2 py-1 text-neutral-300 group">
                {[ ...Array(4) ].map((_, index) => (
                    <button key={index} className="p-0.5 py-1.5 disabled:opacity-25" data-index={index} type="button"
                            onMouseEnter={beginHover} onMouseLeave={endHover} onClick={levelClickHandler}
                            disabled={!obtained}>
                        {level >= index + 1 || hoverIndex >= index ? (
                            <FontAwesomeIcon icon={faStarSolid} className="text-xl" />
                        ) : (
                            <FontAwesomeIcon icon={faStarEmpty} className="text-xl" />
                        )}
                    </button>
                ))}
                {!obtained ? (
                    <span
                        className="absolute top-2 left-1/2 z-20 m-4 mx-auto hidden -translate-x-1/2 translate-y-full whitespace-nowrap rounded-sm bg-neutral-700 text-sm text-gray-100 opacity-0 transition-opacity px-1.5 py-0.5 group-hover:block group-hover:opacity-100">
                        Add item to inventory first
                    </span>
                ) : ""
                }
            </div>
        </div>
    );
};
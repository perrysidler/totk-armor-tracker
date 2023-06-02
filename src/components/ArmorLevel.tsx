import { MouseEvent, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const levelText: string[] = [
    "Base", "1", "2", "3", "4"
];

interface IArmorLevelProps {
    level: number,
    obtained: boolean,
    onLevelChange: (level: number) => void;
}

export const ArmorLevel = ({ level, obtained, onLevelChange }: IArmorLevelProps) => {
    const [ hoverIndex, setHoverIndex ] = useState(-1);
    
    const beginHover = (e: MouseEvent<HTMLButtonElement>) => {
        // if (!obtained)
        //     return;

        const index: number = parseInt(e.currentTarget.dataset.index || "0");
        setHoverIndex(index);
    };
    const endHover = (e: MouseEvent<HTMLButtonElement>) => {
        // if (!obtained)
        //     return;

        const index: number = parseInt(e.currentTarget.dataset.index || "0");
        setHoverIndex(-1);
    };
    const levelClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        const index: number = parseInt(e.currentTarget.dataset.index || "0");
        if (index === level - 1) {
            onLevelChange(-level);
            return;
        }
        
        onLevelChange(index + 1);
    }
    
    return (
        <div className="flex items-center bg-neutral-800 rounded mt-1 mb-2">
            <span className="w-10 hidden">{level > 0 ? level : "Base"}</span>
            <div className="flex p-1 text-neutral-300">
                {[ ...Array(4) ].map((_, index) => (
                    <button key={index} className="p-0.5 py-1.5 first:pl-1.5 last:pr-1.5 disabled:opacity-25" data-index={index} type="button" onMouseEnter={beginHover} onMouseLeave={endHover} onClick={levelClickHandler} disabled={obtained}>
                        {level >= index + 1 || hoverIndex >= index ? (
                            <FaStar className="text-xl" />
                        ) : (
                             <FaRegStar className="text-xl" />
                         )}
                    </button>
                ))}
            </div>
        </div>
    );
};
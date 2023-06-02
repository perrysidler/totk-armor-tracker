import { ArmorLevel } from "@/components/ArmorLevel";
import { Armor } from "@/types/Armor";
import { Clamp } from "@/utils/utils";
import Image from "next/image";
import { Fragment, MouseEvent, useState } from "react";

interface IArmorCardProps {
    armorData: Armor,
    onLevelIncrement: (name: string, increment: number) => void;
}

export const ArmorCard = ({ armorData, onLevelIncrement }: IArmorCardProps) => {
    const [ level, setLevel ] = useState(armorData.currentLevel);

    const levelIncrementHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const increment: number = parseInt(e.currentTarget.dataset.increment || "0");
        setLevel(prev => Clamp(prev + increment, 0, 4));
        onLevelIncrement(armorData.name, increment);
    };

    const levelHandler = (newLevel: number) => {
        const increment = newLevel - level;
        setLevel(prev => Clamp(prev + increment, 0, 4));
        onLevelIncrement(armorData.name, increment);
    };
    
    return (
        <li className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-neutral-800 p-2 pt-4 text-center shadow aspect-h-1 aspect-w-1 sm:aspect-h-3 sm:aspect-w-2 2xl:w-[17rem] 2xl:mx-auto before:block before:absolute before:opacity-40 before:w-full before:h-full before:bg-black before:top-0 [&>*]:relative">
            <Image className="mx-auto" src={`/images/${armorData.image}`} width="192" height="192"
                   alt={armorData.name} />
            <span className="w-48">{armorData.name}</span>
            <span className="hidden w-48">{armorData.setName}</span>
            <span className="w-48">{armorData.bodyPart}</span>
            {armorData.isUpgradable ? (
                <Fragment>
                    <ArmorLevel level={armorData.currentLevel} obtained={armorData.obtained} onLevelChange={levelHandler}/>
                    {/*<div className="flex gap-2 justify-center items-center">*/}
                    {/*    <button className="h-8 w-8 flex justify-center items-center bg-neutral-800 rounded-md" data-increment={-1} onClick={levelIncrementHandler} type="button">-</button>*/}
                    {/*    <button className="h-8 w-8 flex justify-center items-center bg-neutral-800 rounded-md" data-increment={1} onClick={levelIncrementHandler} type="button">+</button>*/}
                    {/*</div>*/}
                </Fragment>
            ) : (
                <div className="mt-2.5 mb-auto text-neutral-400">
                    Cannot be upgraded
                </div>
            ) }
            {/*<span className="w-48 pl-4"><a href={armorData.wiki} target="_blank">Wiki</a></span>*/}
        </li>
    );
};
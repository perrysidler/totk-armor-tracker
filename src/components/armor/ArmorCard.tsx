import { ArmorLevel } from "@/components/armor/ArmorLevel";
import { ArmorObtained } from "@/components/armor/ArmorObtained";
import { Armor } from "@/types/Armors";
import { Clamp } from "@/utils/utils";
import Image from "next/image";
import { useState } from "react";

interface IArmorCardProps {
    armorData: Armor,
    onLevelIncrement: (name: string, increment: number) => void,
    onObtainedChange: (name: string, isObtained: boolean) => void,
}

export const ArmorCard = ({ armorData, onLevelIncrement, onObtainedChange }: IArmorCardProps) => {
    const [ level, setLevel ] = useState(armorData.currentLevel);

    const levelHandler = (newLevel: number) => {
        const increment = newLevel - level;
        setLevel(prev => Clamp(prev + increment, 0, 4));
        onLevelIncrement(armorData.name, increment);
    };

    const obtainedHandler = (isObtained: boolean) => {
        onObtainedChange(armorData.name, isObtained);
    };

    return (
        <li className="relative flex w-full flex-col items-center justify-center rounded-xl border-2 border-neutral-800 p-2 text-center shadow aspect-h-1 aspect-w-1 sm:aspect-h-3 sm:aspect-w-2 2xl:mx-auto before:block before:absolute before:opacity-40 before:w-full before:h-full before:bg-black before:top-0 [&>*]:relative">
            <div className="relative flex w-full flex-col">
                <Image className="mx-auto" src={`/images/${armorData.image}`} width="192" height="192"
                       alt={armorData.name} />
                <a className="absolute top-[0.24rem] left-[0.48rem] text-neutral-500" href={armorData.wiki} target="_blank" title="Open in Zelda Dungeon Wiki">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[1.80rem] h-[1.80rem]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                </a>
                <div className="absolute top-1 right-1">
                    <ArmorObtained name={armorData.name} obtained={armorData.obtained} onObtainedChange={obtainedHandler} />
                </div>
            </div>
            <span className="my-2 w-full text-xl font-medium">{armorData.name}</span>
            {armorData.isUpgradable
             ? (
                 <ArmorLevel level={armorData.currentLevel} obtained={armorData.obtained} onLevelChange={levelHandler} />
             )
             : (
                 <div className="mb-[1.125rem] xl:mb-auto text-neutral-400 mt-2.5">
                     Cannot be upgraded
                 </div>
             )}
            <ul className="mb-auto min-h-[3rem] sm:h-[4.5rem] pb-2">
                {armorData.upgrades && armorData.upgrades[level]
                 ? armorData.upgrades[level].map(upgrade => (
                        <li key={Math.random()}>
                            <span>{`${upgrade.name} - ${upgrade.quantity}`}</span>
                        </li>
                    ))
                 : armorData.upgrades && level === 4
                   ? (
                       <li>
                           <span className="block text-neutral-400">Fully upgraded</span>
                       </li>
                   )
                   : ""}
            </ul>
        </li>
    );
};
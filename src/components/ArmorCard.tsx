import { ArmorObtained } from "@/components/ArmorObtained";
import { ArmorLevel } from "@/components/ArmorLevel";
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
    const [ obtained, setObtained ] = useState(armorData.obtained);

    const levelHandler = (newLevel: number) => {
        const increment = newLevel - level;
        setLevel(prev => Clamp(prev + increment, 0, 4));
        onLevelIncrement(armorData.name, increment);
    };

    const obtainedHandler = (isObtained: boolean) => {
        if (!isObtained) {
            levelHandler(0);
        }
        
        setObtained(isObtained);
        onObtainedChange(armorData.name, isObtained);
    };
    
    return (
        <li className="relative flex w-full flex-col items-center justify-center rounded-xl border-2 border-neutral-800 p-2 text-center shadow aspect-h-1 aspect-w-1 sm:aspect-h-3 sm:aspect-w-2 2xl:w-[17rem] 2xl:mx-auto before:block before:absolute before:opacity-40 before:w-full before:h-full before:bg-black before:top-0 [&>*]:relative">
            <div className="relative flex w-full flex-col">
                <Image className="mx-auto" src={`/images/${armorData.image}`} width="192" height="192"
                       alt={armorData.name} />
                <div className="absolute top-1 right-1">
                    <ArmorObtained name={armorData.name} obtained={armorData.obtained} onObtainedChange={obtainedHandler} />
                </div>
            </div>
            <span className="my-2 w-48">{armorData.name}</span>
            {armorData.isUpgradable ? (
                <ArmorLevel level={armorData.currentLevel} obtained={armorData.obtained} onLevelChange={levelHandler}/>
            ) : (
                <div className="mb-[1.125rem] xl:mb-auto text-neutral-400 mt-2.5">
                    Cannot be upgraded
                </div>
            ) }
            <ul>
            {armorData.upgrades ? Object.values(armorData.upgrades).map((upgradeLevel, index) => {
                // if (armorData.name === "Hylian Hood") {
                //     console.log(`${index} - ${JSON.stringify(upgradeLevel)}`);
                // }
                if (armorData.currentLevel !== index) {
                    return "";
                }
                return (
                <li key={Math.random()}>
                    {upgradeLevel[index].map(upgrade => (
                    <span key={upgrade.name} className="block">{`${index+1} ${upgrade.name} - ${upgrade.quantity}`}</span>
                    ))}</li>
            )}) : ""}
            </ul>
            {/*<span className="w-48 pl-4"><a href={armorData.wiki} target="_blank">Wiki</a></span>*/}
        </li>
    );
};
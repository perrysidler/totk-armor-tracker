import Image from "next/image";

export const ArmorCard = ({ armorData }) => {
    return (
        <li className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-neutral-800 p-2 pt-4 text-center shadow aspect-h-1 aspect-w-1 sm:aspect-h-3 sm:aspect-w-2 2xl:w-[17rem] 2xl:mx-auto">
            <div className="rounded-xl opacity-40 absolute top-0 left-0 z-0 w-full h-full bg-black"></div>
            <Image className="z-10 mx-auto" src={`/images/${armorData["image"]}`} width="192" height="192"
                   alt={armorData["name"]} />
            <span className="z-10 w-48">{armorData["name"]}</span>
            <span className="hidden w-48 pl-4">{armorData["setName"]}</span>
            <span className="z-10 w-48 pl-4">{armorData["bodyPart"]}</span>
            <span className="z-10 w-48 pl-4"><a href={armorData["wiki"]} target="_blank">Wiki</a></span>
        </li>
    );
};
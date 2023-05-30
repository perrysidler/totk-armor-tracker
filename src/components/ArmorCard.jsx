import Image from "next/image";

export const ArmorCard = ({ armorData }) => {
    return (
        <li className="w-full sm:w-64 flex flex-col rounded-lg text-center shadow items-center justify-center relative p-2 pt-4 rounded-xl border-2 border-neutral-800">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0 rounded-xl"></div>
            <Image className="mx-auto z-10" src={`/images/${armorData["image"]}`} width="192" height="192"
                   alt={armorData["name"]}/>
            <span className="w-48 z-10">{armorData["name"]}</span>
            <span className="w-48 pl-4 hidden">{armorData["setName"]}</span>
            <span className="w-48 pl-4 z-10">{armorData["bodyPart"]}</span>
            <span className="w-48 pl-4 z-10"><a href={armorData["wiki"]} target="_blank">Wiki</a></span>
        </li>
    );
};
import Image from "next/image";

export const ArmorCard = ({ armorData }) => {
    return (
        <li className="w-full sm:w-44 flex flex-col divide-y divide-gray-200 rounded-lg text-center shadow items-center justify-center">
            <Image className="mx-auto" src={`/images/${armorData["image"]}`} width="192" height="192" alt={armorData["name"]} />
            <span className="w-48">{armorData["name"]}</span>
            <span className="w-48 pl-4 hidden">{armorData["setName"]}</span>
            <span className="w-48 pl-4">{armorData["bodyPart"]}</span>
            <span className="w-48 pl-4"><a href={armorData["wiki"]} target="_blank">Wiki</a></span>
        </li>
    );
};
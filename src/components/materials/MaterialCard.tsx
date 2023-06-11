import { Material } from "@/types/Materials";
import { MaterialInventory } from "@/components/materials/MaterialInventory";
import { useState } from "react";
import { Clamp } from "@/utils/utils";

interface IMaterialCardProps {
    material: Material,
    onQuantityChange: (name: string, newQuantity: number) => void,
}

export const MaterialCard = ({ material, onQuantityChange }: IMaterialCardProps) => {
    const [ quantityInventory, setQuantityInventory ] = useState(material.quantityInventory ?? 0);

    const onChange = (newQuantity: number) => {
        setQuantityInventory(newQuantity);
        onQuantityChange(material.name, newQuantity);
    }

    return (
        <div className="flex justify-end gap-2 p-1">
            <span className="material-name mr-auto">
                <a href={material.wiki} target="_blank"
                    className=""
                >
                    {material.name}
                </a>
            </span>
            <span className="material-required">{material.quantityRequired}</span>
            <span className="material-inventory">
                <MaterialInventory defaultQuantity={quantityInventory}
                                   onQuantityChange={onChange}
                />
                {/*{material.quantityInventory}*/}
            </span>
            <span className="material-need">
                {Math.max((material.quantityRequired || 0) - (material.quantityInventory || 0), 0)}
            </span>
        </div>
    );
};
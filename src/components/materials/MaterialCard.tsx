import { Material } from "@/types/Materials";

interface IMaterialCardProps {
    material: Material,
}

export const MaterialCard = ({ material }: IMaterialCardProps) => {
    return (
        <div className="flex justify-between p-1">
            <span>{material.name}</span>
            <span>x{material.quantityRequired}</span>
        </div>
    );
};
import { Collapsible } from "@/components/Collapsible";
import { trackerStore } from "@/store/TrackerStore";
import { MaterialCard } from "@/components/materials/MaterialCard";

export const MaterialList = () => {
    const { materials, setMaterials } = trackerStore();
    
    const requiredMaterials = Object.values(materials).filter(material => material.quantityRequired ?? 0 > 0);
    
    return (
        <Collapsible title={`Materials ${requiredMaterials.length > 0 ? `(${requiredMaterials.length})` : ""}`} tooltip="Click to view required materials" classes="pb-6">
            <div className="grid grid-cols-4 gap-x-8 gap-y-1">
                {requiredMaterials.length === 0 ? (
                    <span className="text-neutral-400">No materials required</span>
                ) : (
                    requiredMaterials.map(material => {
                        return material.quantityRequired ?? 0 > 0 ? (
                            <MaterialCard key={material.name} material={material} />
                        ) : ""
                    })
                )}
            </div>
        </Collapsible>
    );
};
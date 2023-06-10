import { Collapsible } from "@/components/Collapsible";
import { trackerStore } from "@/store/TrackerStore";

export const MaterialList = () => {
    const { materials, setMaterials } = trackerStore();
    
    const requiredMaterials = Object.values(materials).filter(material => material.quantityRequired ?? 0 > 0);
    
    return (
        <Collapsible title="Materials" tooltip="Click to view required materials" classes="pb-6">
            <div>
                {requiredMaterials.length === 0 ? (
                    <span className="text-neutral-400">No materials required</span>
                ) : (
                    requiredMaterials.map(material => {
                        return material.quantityRequired ?? 0 > 0 ? (
                            <div key={material.name}>{material.name} - {material.quantityRequired}</div>
                        ) : ""
                    })
                )}
            </div>
        </Collapsible>
    );
};
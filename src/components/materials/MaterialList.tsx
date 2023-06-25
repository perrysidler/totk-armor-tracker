import { MaterialsCollapsible } from "@/components/materials/MaterialsCollapsible";
import { trackerStore } from "@/store/TrackerStore";
import { MaterialCard } from "@/components/materials/MaterialCard";
import { Fragment } from "react";
import { saveMaterialData } from "@/store/DataManagement";

export const MaterialList = () => {
    const { materials, setMaterials } = trackerStore();

    const requiredMaterials = Object.values(materials).filter(material => material.quantityRequired ?? 0 > 0)
        .sort((a, b) => a.sortOrder - b.sortOrder);

    const onQuantityChange = (name: string, newQuantity: number) => {
        let materialTemp = { ...materials };
        materialTemp[name].quantityInventory = newQuantity;
        setMaterials(materialTemp);
        saveMaterialData(materialTemp);
    }

    return (
        <MaterialsCollapsible title={`Materials ${requiredMaterials.length > 0 ? `(${requiredMaterials.length})` : ""}`}
                              tooltip="Click to view required materials"
                              classes="mb-6">
            <div className="grid grid-cols-1 gap-x-8 gap-y-1 lg:grid-cols-2 2xl:grid-cols-3 text-right">
                {requiredMaterials.length === 0 ? (
                    <span className="text-left text-neutral-400">No materials required</span>
                ) : (
                    <Fragment>
                        <div className="flex justify-end gap-2 p-1 text-xs">
                            <span className="material-name mr-auto">Material Name</span>
                            <span className="material-required">Required</span>
                            <span className="material-inventory">Inventory</span>
                            <span className="material-need">Needed</span>
                        </div>
                        <div className="hidden justify-end gap-2 p-1 text-xs md:flex">
                            <span className="material-name mr-auto">Material Name</span>
                            <span className="material-required">Required</span>
                            <span className="material-inventory">Inventory</span>
                            <span className="material-need">Needed</span>
                        </div>
                        <div className="hidden justify-end gap-2 p-1 text-xs 2xl:flex">
                            <span className="material-name mr-auto">Material Name</span>
                            <span className="material-required">Required</span>
                            <span className="material-inventory">Inventory</span>
                            <span className="material-need">Needed</span>
                        </div>
                        {requiredMaterials.map(material => {
                            return material.quantityRequired ?? 0 > 0 ? (
                                <MaterialCard key={material.name}
                                              material={material}
                                              onQuantityChange={onQuantityChange}
                                />
                            ) : ""
                        })}
                    </Fragment>
                )}
            </div>
        </MaterialsCollapsible>
    );
};
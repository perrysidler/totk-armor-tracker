import { trackerStore } from "@/store/TrackerStore";
import { saveMaterialsOpen } from "@/store/DataManagement";

interface ICollapsibleProps {
    children: any,
    classes?: string,
    tooltip: string,
    title: string,
}

export const MaterialsCollapsible = ({ children, classes, tooltip, title }: ICollapsibleProps) => {
    const { materialsOpen, setMaterialsOpen } = trackerStore();

    const onCollapsibleClick = () => {
        const isOpen = !materialsOpen;
        setMaterialsOpen(isOpen);
        saveMaterialsOpen(isOpen);
    }

    return (
        <div className={classes}>
            <div className="relative z-10">
                <button className="group w-full flex justify-between border-0 border-neutral-400 py-3 px-5 border-opacity-75 bg-neutral-800 rounded"
                        onClick={onCollapsibleClick}
                        title={tooltip}
                >
                    <h4 className="text-md">{title}</h4>
                    <span className="text-neutral-400 group-hover:text-neutral-200 group-focus-visible:text-neutral-200 pointer-events-none" onClick={onCollapsibleClick}>
                        {materialsOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 pointer-events-none mb-0.5 mx-0.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 pointer-events-none mt-0.5 mx-0.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        )}
                    </span>
                </button>
            </div>
            <div className={`${materialsOpen ? "border-2": ""} border-t-0 border-neutral-800 border-opacity-75 relative rounded-bl rounded-br -mt-0.5`}>
                {materialsOpen ? (
                    <div className="p-4 before:block before:absolute before:opacity-40 before:w-full before:h-full before:bg-black before:top-0 before:left-0 [&>*]:relative">
                        {children}
                    </div>
                ): ""}
            </div>
        </div>
    );
};
import { ChangeEvent, MouseEvent, useState } from "react";
import { Clamp } from "@/utils/utils";

interface IMaterialInventoryProps {
    defaultQuantity: number,
    onQuantityChange: (newQuantity: number) => void,
}

export const MaterialInventory = ({ defaultQuantity, onQuantityChange }: IMaterialInventoryProps) => {
    const [ quantity, setQuantity ] = useState(defaultQuantity ?? 0);

    const onButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const amount = parseInt(e.currentTarget.dataset.amount || "0");
        const newQuantity = Clamp(quantity + amount, 0, 999);
        setQuantity(newQuantity);
        onQuantityChange(newQuantity);

    };

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        let newQuantity = Clamp(parseInt(event.currentTarget.value || "0"), 0, 999);
        setQuantity(newQuantity);
        onQuantityChange(newQuantity);
    };

    return (
        <div className="flex justify-end items-center -mr-2 border-[1px] rounded border-neutral-400 w-max ml-auto">
            <button type="button" onClick={onButtonClick} data-amount={-1}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path d="M6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" />
                </svg>
            </button>
            <input value={quantity}
                   onChange={onInputChange}
                   className="w-8 h-full bg-transparent text-center border-l-[1px] border-r-[1px] boreder-neutral-400 rounded-none"
            />
            <button type="button" onClick={onButtonClick} data-amount={1}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path
                        d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" />
                </svg>
            </button>
        </div>
    );
};
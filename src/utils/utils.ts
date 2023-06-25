export const focusStyles = "focus:ring-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400";

export const Clamp = (num: number, min: number, max: number) => {
    return Math.min(Math.max(num, min), max);
}

export const ClassNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(' ').trim();
}
export type MaterialData = {
    [key: string]: Material,
}

export type Material = {
    name: string,
    image: string,
    wiki: string,
    sortOrder: number,
    quantityRequired?: number,
    quantityInventory?: number,
}

export type MaterialSaveData = {
    name: string,
    quantityInventory: number,
}
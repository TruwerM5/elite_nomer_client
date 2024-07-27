export interface Product {
    id: number;
    characters: string;
    region: string;
    price: number;
}

export interface RawProduct {
    id: string;
    region: string;
    price: number;
}
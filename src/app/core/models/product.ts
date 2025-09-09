export interface Product {
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    isAvailable: boolean;
    createdAt: string;
    updatedAt: string;
    id: string;
}

export interface productResponse {
    items: Product[];
}
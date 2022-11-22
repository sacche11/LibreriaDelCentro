export interface Book {
    id?: string;
    imagen: string;
    titulo: string;
    autor: string;
    tema: string;
    editorial: string;
    precio: number;
    stock: number;
    oferta: boolean;
    quantity: number;
}
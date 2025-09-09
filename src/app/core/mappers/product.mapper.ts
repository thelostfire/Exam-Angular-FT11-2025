// import { Product } from "../models/product";
// import { ProductDto } from "../models/productDto";

// export const fromProductDto = (d: ProductDto): Product => (
//     {
//         id: d.id,
//         name: d.name,
//         description: d.description,
//         price: d.price,
//         imageURL: d.imageURL,
//         isAvailable: d.isAvailable,
//         createdAt: new Date(d.createdAt),
//         updatedAt: new Date(d.updatedAt)
//     }
// )

// export const toProductDto = (p: Product): ProductDto => (
//     {
//         id: p.id,
//         name: p.name,
//         description: p.description,
//         price: p.price,
//         imageURL: p.imageURL,
//         isAvailable: p.isAvailable,
//         createdAt: p.createdAt.toISOString(),
//         updatedAt: p.updatedAt.toISOString()
//     }
// )
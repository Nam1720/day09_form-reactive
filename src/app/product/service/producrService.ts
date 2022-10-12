import { Product } from "../model/product";

export class ProductService {
    public getProducts() {
        let products:Product[]
        products =[
            new Product(1,'Memory card', 500),
            new Product(2,'CPU', 900),
            new Product(3,'Ram', 700),
        ]
        return products
    }
}
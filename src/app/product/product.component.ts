import { Component, OnInit } from '@angular/core';
import { Product } from './model/product';
import { ProductService } from './service/producrService';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers:[ProductService]
})
export class ProductComponent {
   products!:Product[];
   constructor(private productService:ProductService){
   }
   public getProducts(){
    this.products=this.productService.getProducts();
   }
}

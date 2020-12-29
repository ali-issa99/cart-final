import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/services/product.service'
import {Product} from 'src/app/models/product';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  productlist: Product[]=[]

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    // this.productlist=this.productService.getProducts()
  }

  
  
 


}








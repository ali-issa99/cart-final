import { Component, OnInit,Inject } from '@angular/core';

import {ProductService} from 'src/app/services/product.service'
import {Product} from 'src/app/models/product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  productlist: Product[]=[]


  constructor(private productService:ProductService) { }

  ngOnInit() {
    
    this.productService.getProducts()
      .subscribe(productlist => this.productlist = productlist)
       
  }


  Filter(){
    this.productlist.sort((n1,n2) => n1.price - n2.price  )
  
}

    
Filterbycategory(){
   
    const myvalue : HTMLInputElement = document.getElementById("categories") as HTMLInputElement
 
    if( myvalue.value =='All'){
       this.productService.getProducts()
      .subscribe(productlist => this.productlist = productlist)
      

    }else if(myvalue.value!='All'){    
      this.productService.getProducts()
      .subscribe(productlist => this.productlist = productlist.filter(n1 => n1.category == myvalue.value))
       



    }
  }
}
     
   

 





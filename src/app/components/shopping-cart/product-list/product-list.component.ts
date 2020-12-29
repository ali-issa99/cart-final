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
  errMess: string;

  constructor(private productService:ProductService) { }

  ngOnInit() {
    
    this.productService.getProducts()
      .subscribe(productlist => this.productlist = productlist,
        errmess => this.errMess = <any>errmess );
  }


  Filter(){
    this.productlist.sort((n1,n2) => n1.price - n2.price  )
  
}

    
Filterbycategory(){
   
    const myvalue : HTMLInputElement = document.getElementById("categories") as HTMLInputElement
 
    if( myvalue.value =='none'){
      this.productService.getProducts()
      .subscribe(productlist => this.productlist = productlist,
        errmess => this.errMess = <any>errmess );

    }else if(myvalue.value!='none'){    
      this.productlist=this.productlist.filter(n1 => n1.category == myvalue.value)



    }
  }
}
     
   

 





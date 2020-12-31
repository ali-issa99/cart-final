import { Component, OnInit } from '@angular/core';

import {ProductService} from 'src/app/services/product.service';
import {Product} from 'src/app/models/product';


import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

 
@Component({
  selector: 'app-intopage',
  templateUrl: './intopage.component.html',
  styleUrls: ['./intopage.component.css']
})
export class IntopageComponent implements OnInit {


  productlist: Product[]=[]
 
  constructor(private productService:ProductService,config: NgbCarouselConfig) {
    config.interval = 2000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = false;  


   }



  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(productlist => this.productlist = productlist.filter(n1 => n1.special==true) );
     


  }

 

   



}

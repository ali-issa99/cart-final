import { Component, OnInit, } from '@angular/core';
import { Product } from 'src/app/models/product';

import { MessengerService } from 'src/app/services/messenger.service'
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent implements OnInit {
  

   cartitems=[
    // {id:1,productid:1,productname:'test 1',qty:4,price:33},
    // {id:2,productid:2,productname:'test 2',qty:6,price:10},
    // {id:3,productid:3,productname:'test 3',qty:7,price:150},
    // {id:4,productid:4,productname:'test 4',qty:2,price:50},
    // {id:5,productid:5,productname:'test 5',qty:1,price:123}
  ];


 cartTotal=0

  constructor(private msg : MessengerService, private prod:ProductService) { }

  ngOnInit()  {

    this.msg.getMsg().subscribe((product:Product) =>{  
      
      this.addProductToCart(product)

    })
      
     
  }

  remove(clicked_id){  

    if(this.cartitems[this.cartitems.indexOf(clicked_id)].qty>1){
      this.cartitems[this.cartitems.indexOf(clicked_id)].qty-=1


    }else{

      this.cartitems.splice(this.cartitems.indexOf(clicked_id),1)
    }
   
    this.cartTotal=0
    this.cartitems.forEach(item => {
      this.cartTotal += (item.qty*item.price)
     
   })

  
      
     
    }

    addproduct(item){
      this.cartitems[this.cartitems.indexOf(item)].qty+=1
      this.cartTotal=0
      this.cartTotal=0
      this.cartitems.forEach(item => {
        this.cartTotal += (item.qty*item.price)
       
     })
  



    }
  


    removeall(){
      this.cartitems=[]


    }
  



  

  addProductToCart(product:Product){


    let productExists=false
    for(let i in this.cartitems){
      if(this.cartitems[i].productid===product.id){
         this.cartitems[i].qty++
         productExists=true
         break;
      
     }
    }


    if(!productExists){

      this.cartitems.push({
              productid:product.id,
              productname:product.name,
              qty:1,
              price : product.price  

            })
    }
        this.cartTotal=0
        this.cartitems.forEach(item => {
          this.cartTotal += (item.qty*item.price)
          
        })


  }
}


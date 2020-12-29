import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TooltipModule } from 'ng2-tooltip-directive';



import { FormsModule} from '@angular/forms'


import {AngularFireDatabaseModule} from '@angular/fire/database'
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment} from '../environments/environment'


import { AppComponent } from './app.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { BigcartComponent } from './components/bigcart/bigcart.component';
import { IntopageComponent } from './components/intopage/intopage.component';
import { ContactusComponent } from './components/contactus/contactus.component';

import { AppRoutingModule} from './components/app-routing/app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingCartComponent,
    
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    BigcartComponent,
    IntopageComponent,
    ContactusComponent,
    

   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule,
    FormsModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AngularFireDatabaseModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

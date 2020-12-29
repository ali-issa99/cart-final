import { Routes } from '@angular/router';



import { BigcartComponent } from 'src/app/components/bigcart/bigcart.component'
import { IntopageComponent } from 'src/app/components/intopage/intopage.component';
import { ContactusComponent } from 'src/app/components/contactus/contactus.component';

export const routes: Routes = [
  { path: 'intopage',  component:  IntopageComponent},
  { path: 'bigcart',  component:  BigcartComponent} , 

  { path: 'contactus',  component:  ContactusComponent} ,
 
  { path: '', redirectTo: '/intopage', pathMatch: 'full' }

];




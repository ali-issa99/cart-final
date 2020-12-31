import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product'
import { map, catchError } from 'rxjs/operators';
import {AngularFirestore,AngularFirestoreDocument,AngularFirestoreCollection} from 'angularfire2/firestore'
import * as firebase from 'firebase/app'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private afs:AngularFirestore ){}





  getProducts(): Observable<Product[]> {
    return this.afs.collection<Product>('products').snapshotChanges()
    .pipe(map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as Product;
        const _id = action.payload.doc['id'];
        return { _id, ...data };
      });
    }));


}



  




}

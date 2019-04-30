import { Injectable } from '@angular/core';
import { Products } from './products';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
count:number=0;
cartStatusObs =new Subject<boolean>();
cartStatusObs$=this.cartStatusObs.asObservable();
cartStatus:boolean=true;

allCartData:Products;
 cartItems=[];
 
addData(x:Products){
  this.allCartData=x;
  this.count++;
  console.log(this.count)
  this.cartStatus=false;
  this.cartItems.push(this.allCartData);
  this.cartStatusObs.next(this.cartStatus);
}

  constructor() { }
}

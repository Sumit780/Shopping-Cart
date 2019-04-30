import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { Products } from '../products';
CartServiceService

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CARTComponent implements OnInit {

  cartData:string[];
  constructor(private cartServiceService:CartServiceService) { }



  ngOnInit() {
   this.cartData=this.cartServiceService.cartItems;
   console.log("cartData",this.cartData);
  }

}

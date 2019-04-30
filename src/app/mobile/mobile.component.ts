import { Component, OnInit } from '@angular/core';
import { Products, allMobiles } from '../products';
import { CartServiceService } from '../cart-service.service';


@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

mobiData:Products[]=allMobiles;

  constructor(private cartService:CartServiceService) { }

addData(index:number){

 this.cartService.addData(this.mobiData[index]);
}

  ngOnInit() {
  }

}

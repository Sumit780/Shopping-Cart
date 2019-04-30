import { Component, OnInit } from '@angular/core';
import { Products, allLaptops } from '../products';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {
  laptopData:Products[]=allLaptops;
  constructor(private cartService:CartServiceService) { }
  addData(index:number){
    this.cartService.addData(this.laptopData[index]);
  }
  ngOnInit() {
  }

}

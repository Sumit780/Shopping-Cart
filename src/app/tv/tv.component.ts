import { Component, OnInit } from '@angular/core';
import { Products, allTvs } from '../products';
import { CartServiceService } from '../cart-service.service';


@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TVComponent implements OnInit {
    tvData:Products[]=allTvs;
    
  constructor(private cartService:CartServiceService) { }

  addData(index:number){

    this.cartService.addData(this.tvData[index]);
   }
  ngOnInit() {
  }

}

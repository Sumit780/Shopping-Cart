import { Component, OnInit } from '@angular/core';
import { CartServiceService } from './cart-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'shoppingCart';
   countData:number=0;
  navLinks:{link:string,active:string,txt:string}[];
constructor(private cartServiceService:CartServiceService){}
  ngOnInit(){
   
    this.cartServiceService.cartStatusObs$.subscribe(
      status=>{
        console.log("subscribe:"+status)
      this.updateNavBar();
      }
    )
    this.updateNavBar();
  }

  updateNavBar(){
    this.countData=this.cartServiceService.count;
   var Home={link:'./home',active:'active',txt:'Home'};   
   var Laptops={link:'./laptop',active:'active',txt:'Laptop'};
   var mobile={link:'./mobile',active:'active',txt:'Mobile'};
   var Tv={link:'./tv',active:'active',txt:'TV'};
   var Cart={link:'./cart',active:'active',txt:'Cart'};
console.log("appcomp",this.cartServiceService.cartStatus);
   if(this.cartServiceService.cartStatus)
     this.navLinks=[Home,Laptops,mobile,Tv];
     else
     this.navLinks=[Home,Laptops,mobile,Tv,Cart];
  }
}

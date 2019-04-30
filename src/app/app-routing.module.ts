import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MobileComponent } from './mobile/mobile.component';
import { TVComponent } from './tv/tv.component';
import { CARTComponent } from './cart/cart.component';
import { LaptopsComponent } from './laptops/laptops.component';

const routes: Routes = [
{
  path:'home',
  component:HomeComponent
},
{
  path:'mobile',
  component:MobileComponent
},
{
  path:'tv',
  component:TVComponent 
},
{
  path:'laptop',
  component:LaptopsComponent
},
{
  path:'cart',
  component:CARTComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

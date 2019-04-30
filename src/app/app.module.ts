import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MobileComponent } from './mobile/mobile.component';
import { TVComponent } from './tv/tv.component';
import { CARTComponent } from './cart/cart.component';
import { LaptopsComponent } from './laptops/laptops.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MobileComponent,
    TVComponent,
    CARTComponent,
    LaptopsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

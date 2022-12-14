import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibreriaHomeComponent } from './libreria-home/libreria-home.component';
import { LibreriaStockComponent } from './libreria-stock/libreria-stock.component';
import { LibreriaBuyCartComponent } from './libreria-buy-cart/libreria-buy-cart.component';
import { LibreriaAboutComponent } from './libreria-about/libreria-about.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookCartBuyComponent } from './book-cart-buy/book-cart-buy.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    LibreriaHomeComponent,
    LibreriaStockComponent,
    LibreriaBuyCartComponent,
    LibreriaAboutComponent,
    BookListComponent,
    BookCartBuyComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

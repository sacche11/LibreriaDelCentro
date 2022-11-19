import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibreriaHomeComponent } from './libreria-home/libreria-home.component';
import { LibreriaStockComponent } from './libreria-stock/libreria-stock.component';
import { LibreriaBuyCartComponent } from './libreria-buy-cart/libreria-buy-cart.component';
import { LibreriaAboutComponent } from './libreria-about/libreria-about.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookCartBuyComponent } from './book-cart-buy/book-cart-buy.component';

@NgModule({
  declarations: [
    AppComponent,
    LibreriaHomeComponent,
    LibreriaStockComponent,
    LibreriaBuyCartComponent,
    LibreriaAboutComponent,
    BookListComponent,
    BookAddComponent,
    BookCartBuyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

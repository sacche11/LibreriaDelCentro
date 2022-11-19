import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibreriaAboutComponent } from './libreria-about/libreria-about.component';
import { LibreriaBuyCartComponent } from './libreria-buy-cart/libreria-buy-cart.component';
import { LibreriaHomeComponent } from './libreria-home/libreria-home.component';
import { LibreriaStockComponent } from './libreria-stock/libreria-stock.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},

  {path: 'home', component: LibreriaHomeComponent},
  {path: 'stock', component: LibreriaStockComponent},
  {path: 'buyCart', component: LibreriaBuyCartComponent},
  {path: 'about', component: LibreriaAboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

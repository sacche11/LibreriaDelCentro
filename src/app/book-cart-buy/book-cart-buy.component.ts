import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookCartService } from '../book-cart.service';
import { Book } from '../book-list/Book';

@Component({
  selector: 'app-book-cart-buy',
  templateUrl: './book-cart-buy.component.html',
  styleUrls: ['./book-cart-buy.component.scss']
})
export class BookCartBuyComponent implements OnInit {

  cartList$ : Observable<Book[]>;

  constructor(private cart: BookCartService) { 
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

}

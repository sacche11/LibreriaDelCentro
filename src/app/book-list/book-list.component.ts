import { Component, OnInit } from '@angular/core';
import { BookCartService } from '../book-cart.service';
import { BookDataService } from '../book-data.service';
import { Book } from './Book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];

  constructor(
    private booksDataService: BookDataService,
    private cartBuyBooks: BookCartService
  ) { }

  ngOnInit(): void {
    this.initTable();
  }

  initTable(){
    this.booksDataService.getAll().subscribe(books => this.books = books);
  }

  add(book:Book): void{
    this.cartBuyBooks.addToCart(book);
    book.stock -= book.quantity;
    book.quantity = 0;
  }
  maxReached(m: string) {
    alert(m);
  }
}

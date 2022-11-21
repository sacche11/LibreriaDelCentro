import { Component, OnInit } from '@angular/core';
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
    private booksDataService: BookDataService
  ) { }

  ngOnInit(): void {
    this.initTable();
  }

  initTable(){
    this.booksDataService.getAll().subscribe(books => this.books = books);
  }

  remove(book: Book){
    this.booksDataService.removeBook(book).subscribe(book =>{
      console.log(book.id)
      this.initTable();
    })
  }
}

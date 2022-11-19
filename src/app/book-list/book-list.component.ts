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
    this.booksDataService.getAll().subscribe(books => this.books = books);
  }

}

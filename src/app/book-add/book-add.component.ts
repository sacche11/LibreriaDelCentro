import { Component, OnInit } from '@angular/core';
import { BookDataService } from '../book-data.service';
import { Book } from '../book-list/Book';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss']
})
export class BookAddComponent implements OnInit {
  book: Book[]=[];

  imagen: string="";
  titulo: string="";
  autor: string="";
  tema: string="";
  editorial: string="";
  precio: number=0;
  stock: number=0;
  oferta: boolean= false;

  constructor(private BookAddDataService: BookDataService) { }

  ngOnInit(): void {
  }

  addBook(){
    const book: Book = {
      imagen: "assets/02_libro.jpg",
      titulo: this.titulo,
      autor: this.autor,
      tema: this.tema,
      editorial: this.editorial,
      precio: this.precio,
      stock: this.stock,
      oferta: false
    }
    this.BookAddDataService.addBook(book).subscribe(book => this.book.push(book));
    this.titulo="";
    this.autor="";
    this.tema=""
    this.editorial="";
    this.precio=0;
    this.stock=0;
  }
}

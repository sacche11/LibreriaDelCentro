import { Component, OnInit } from '@angular/core';
import { BookDataService } from '../book-data.service';
import { Book } from '../book-list/Book';

@Component({
  selector: 'app-libreria-stock',
  templateUrl: './libreria-stock.component.html',
  styleUrls: ['./libreria-stock.component.scss']
})
export class LibreriaStockComponent implements OnInit {

  book: Book[]=[];
  books: Book[]=[];

  imagen: string="";
  titulo: string="";
  autor: string="";
  tema: string="";
  editorial: string="";
  precio: number=0;
  stock: number=0;
  oferta: boolean= false;

  constructor(private bookDataService: BookDataService) { }

  ngOnInit(): void {
    this.initTable();
  }

  initTable(){
    this.bookDataService.getAll().subscribe(books => this.books = books);
  }

  remove(book: Book){
    this.bookDataService.removeBook(book).subscribe(book =>{
      console.log(book.id)
      this.initTable();
    })
  }

  add(){
    const book: Book = {
      imagen: "assets/02_libro.jpg",
      titulo: this.titulo,
      autor: this.autor,
      tema: this.tema,
      editorial: this.editorial,
      precio: this.precio,
      stock: this.stock,
      oferta: false,
      quantity: this.stock
    }
    this.bookDataService.addBook(book).subscribe(book => {
      this.book.push(book)
      this.initTable();
      });
    this.titulo="";
    this.autor="";
    this.tema=""
    this.editorial="";
    this.precio=0;
    this.stock=0;
  }

  /*edit(): void{ 
  }*/
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Book } from './book-list/Book';

const URL = 'https://62bc99daeff39ad5ee2898e9.mockapi.io/api/libros';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor(private http: HttpClient) { }
  
  //obtengo los libros
  public getAll(): Observable<Book[]>{
    return this.http.get<Book[]>(URL);
  }

  //obtengo los libros para el carrito de compras, con modificaciones
  public getAllToCart(): Observable<Book[]>{

    //pipe: nos permite hacer cosas en medio antes de entregar los datos
    return this.http.get<Book[]>(URL).pipe(

      tap( (books: Book[]) => books.forEach(book => book.quantity = 0))
      //tap: toca lo que viene antes de emitirlo, osea podemos hacerle algo (transformar)
    );
  }

  //agrego un libro nuevo
  public addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(URL, book);
  }
  
  //elimino un libro 
  public removeBook(book:Book): Observable<Book>{
    return this.http.delete<Book>(URL+'/'+book.id);
  }

  //edito un libro
  /*public editBook(book: Book):Observable<Book>{
      return this.http.put<Book>(URL,book);
  }*/
}

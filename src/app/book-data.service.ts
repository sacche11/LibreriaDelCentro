import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book-list/Book';

const URL = 'https://62bc99daeff39ad5ee2898e9.mockapi.io/api/libros';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Book[]>{
    return this.http.get<Book[]>(URL);
  }
}

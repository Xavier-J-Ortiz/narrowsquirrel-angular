import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock-books';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class BookService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private booksUrl = 'api/books';  // URL to web api

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.heroesUrl);
  }

  getBook(id: number): Observable<Book> {
    this.messageService.add(`BookService fetched Book id=${id}`);
    return of(BOOKS.find(book => book.id === id));
  }

  private log(message: string) {
    this.messageService.add('BookService: ' + message);
  }

}

import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock-books';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class BookService {

  constructor(private messageService: MessageService) { }

  getBooks(): Observable<Book[]> {
    this.messageService.add('BookService: fetched books')
    return of(BOOKS);
  }

  getBook(id: number): Observable<Book> {
    this.messageService.add(`BookService fetched Book id=${id}`);
    return of(BOOKS.find(book => book.id == id))
  }

}

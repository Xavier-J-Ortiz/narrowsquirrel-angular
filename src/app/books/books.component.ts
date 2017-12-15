import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[];

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books);
  }

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  delete(book: Book): void {
    this.books = this.books.filter(h => h !== book);
    this.bookService.deleteBook(book).subscribe();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.bookService.addBook({ name } as Book)
      .subscribe(book => {
        this.books.push(book);
      });
  }
}

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
  delete(book: Book): void {
    this.books = this.books.filter(h => h !== book);
    this.bookService.deleteBook(book).subscribe();
  }

  add(title: string): void {
    title = title.trim();
    if (!title) { return; }
    this.bookService.addBook({ title } as Book)
      .subscribe(book => {
        this.books.push(book);
      });
  }
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }


}

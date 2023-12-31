import { Component, OnInit } from '@angular/core';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { NgIf } from '@angular/common';
import { Book } from '../shared/book.model';
import {bookService} from "./book.service";

@Component({
  standalone: true,
  selector: 'app-books',
  templateUrl: './books.component.html',
  imports: [BookListComponent, BookDetailComponent, NgIf],
  styleUrls: ['./books.component.css'],
  providers: [bookService],
})
export class BookComponent implements OnInit {
  selectedBookFromList: Book | undefined;
  constructor( private BookService: bookService) {}

  ngOnInit() {
    this.BookService.selectedBook
      .subscribe(
      (book:Book) => {this.selectedBookFromList = book;}
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { Book } from '../../shared/book.model';
import { BookItemComponent } from './book-item/book-item.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import {bookService} from "../book.service";

@Component({
  standalone: true,
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  imports: [BookItemComponent, CommonModule, ButtonModule, FormsModule],
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Book[] | undefined;
  constructor(private bookService: bookService ) {}
  ngOnInit() {
    this.books = this.bookService.getBooks();
  }
}

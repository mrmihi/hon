import { Component, Input, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book } from '../../../shared/book.model';
import {bookService} from "../../book.service";

@Component({
  standalone: true,
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css'],
  imports: [CardModule, CommonModule, FormsModule, NgOptimizedImage],
})
export class BookItemComponent implements OnInit {
  @Input() book: Book = new Book(
    'Default Book',
    'This is simply a test',
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
  );
  constructor(private BookService: bookService) {}
  onSelect() {
    this.BookService.selectedBook.emit(this.book)
  }

  ngOnInit() {
    console.log("TODO")
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from '../../shared/book.model';
import { BookItemComponent } from './book-item/book-item.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  imports: [BookItemComponent, CommonModule, ButtonModule, FormsModule],
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  @Output() onSelection = new EventEmitter<Book>();
  books: Book[] = [
    new Book(
      'The Cheat Code',
      'Going Off Script',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    ),
    new Book(
      'A Test Book',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    ),
  ];

  onSelectedBook(book: Book) {
    console.log('parent selected');
    this.onSelection.emit(book);
  }
  constructor() {}

  ngOnInit() {}
}

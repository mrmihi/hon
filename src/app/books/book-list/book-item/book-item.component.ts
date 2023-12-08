import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book } from '../../../shared/book.model';

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
  @Output() bookSelected = new EventEmitter<void>();
  onSelect() {
    console.log('child selected');
    this.bookSelected.emit();
  }
  constructor() {}

  ngOnInit() {}
}

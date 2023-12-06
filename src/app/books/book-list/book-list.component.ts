import { Component, OnInit } from '@angular/core';

import { Book } from '../book.model';
import {BookItemComponent} from "./book-item/book-item.component";
import {CommonModule} from "@angular/common";
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  standalone: true,
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  imports: [
    BookItemComponent,
    CommonModule,
    ButtonModule,
    CardModule
  ],
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [
    new Book('A Test Book', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Book('A Test Book', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

}

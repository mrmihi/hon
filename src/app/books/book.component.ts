import { Component, OnInit } from '@angular/core';
import {BookListComponent} from "./book-list/book-list.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";

@Component({
  standalone: true,
  selector: 'app-books',
  templateUrl: './books.component.html',
  imports: [
    BookListComponent,
    BookDetailComponent
  ],
  styleUrls: ['./books.component.css']
})
export class BookComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

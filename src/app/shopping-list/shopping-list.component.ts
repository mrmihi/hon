import { Component, OnInit } from '@angular/core';

import { Book } from '../shared/book.model';
import {ShoppingEditComponent} from "./shopping-edit/shopping-edit.component";
import {CommonModule} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  imports: [
    ShoppingEditComponent,
    CommonModule
  ],
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  books: Book[] = [
    new Book('Apples', 5),
    new Book('Tomatoes', 10),
  ];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
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
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() { }

  ngOnInit() {
  }

}

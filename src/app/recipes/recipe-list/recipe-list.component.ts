import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import {RecipeItemComponent} from "./recipe-item/recipe-item.component";
import {CommonModule} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  imports: [
    RecipeItemComponent,
    CommonModule
  ],
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

}

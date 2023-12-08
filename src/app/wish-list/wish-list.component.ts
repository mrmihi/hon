import { Component, OnInit } from '@angular/core';

import { Wish } from '../shared/wish.model';
import { WishEditComponent } from './wish-edit/wish-edit.component';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  standalone: true,
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  imports: [WishEditComponent, CommonModule, CardModule],
  styleUrls: ['./wish-list.component.css'],
})
export class WishListComponent implements OnInit {
  wishes: Wish[] = [
    new Wish('Apples Are Tasty', 5),
    new Wish('Tomatoes Rot', 10),
  ];

  constructor() {}

  ngOnInit() {}

  addWishItem(wish: Wish) {
    this.wishes.push(wish);
  }
}

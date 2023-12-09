import { Component, OnInit } from '@angular/core';

import { Wish } from '../shared/wish.model';
import { WishEditComponent } from './wish-edit/wish-edit.component';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import {wishListService} from "./wishList.service";

@Component({
  standalone: true,
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  imports: [WishEditComponent, CommonModule, CardModule],
  styleUrls: ['./wish-list.component.css'],
})
export class WishListComponent implements OnInit {
  wishes: Wish[] | undefined;

  constructor(private WishListService: wishListService) {}

  ngOnInit() {
    this.wishes = this.WishListService.getWishList()
    this.WishListService.wishesChanged.subscribe((wishes:Wish[])=>{this.wishes = wishes})
  }
}

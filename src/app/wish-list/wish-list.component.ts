import {Component, OnDestroy, OnInit} from '@angular/core';

import { Wish } from '../shared/wish.model';
import { WishEditComponent } from './wish-edit/wish-edit.component';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import {wishListService} from "./wishList.service";
import {Subscription} from "rxjs";

@Component({
  standalone: true,
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  imports: [WishEditComponent, CommonModule, CardModule],
  styleUrls: ['./wish-list.component.css'],
})
export class WishListComponent implements OnInit, OnDestroy {
  wishes: Wish[] | undefined;
  private wishChanged: Subscription | undefined;
  constructor(private WishListService: wishListService) {}

  ngOnInit() {
    this.wishes = this.WishListService.getWishList()
    this.wishChanged =  this.WishListService.wishesChanged.subscribe((wishes:Wish[])=>{this.wishes = wishes})
  }

  ngOnDestroy() {
    this.wishChanged?.unsubscribe();
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {BookComponent} from "./books/book.component";
import {WishListComponent} from "./wish-list/wish-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, BookComponent, WishListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hon';
  currentRoute: string = "books";
  onNavigate(route: string) {
    this.currentRoute = route;
  }
}

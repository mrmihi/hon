import {Component, Input, OnInit} from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Book} from "../../shared/book.model";

interface Options {
  name: string;
}
@Component({
  standalone: true,
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  imports: [DropdownModule, CommonModule, FormsModule]
})
export class BookDetailComponent implements OnInit {
  @Input() selectedBook: Book | undefined;
  constructor() { }

  options: Options[] | undefined;

  option: Options| undefined;

  ngOnInit() {
    this.options = [
      { name: 'Edit Book'},
      { name: 'Delete Book'},
      { name: 'Add to Wish List'},
    ];
  }
}

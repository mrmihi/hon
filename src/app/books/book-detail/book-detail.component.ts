import { Component, OnInit } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

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

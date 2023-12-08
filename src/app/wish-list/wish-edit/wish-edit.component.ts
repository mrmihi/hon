import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ButtonModule} from "primeng/button";
import { InputTextModule } from 'primeng/inputtext';
import {FormsModule} from "@angular/forms";
import {Wish} from "../../shared/wish.model";

@Component({
  standalone: true,
  selector: 'app-wish-edit',
  templateUrl: './wish-edit.component.html',
  styleUrls: ['./wish-edit.component.css'],
  imports: [
    ButtonModule,InputTextModule, FormsModule
  ]
})
export class WishEditComponent implements OnInit {
  wishItems: String = "";
  @ViewChild('wishItemName') nameInput: ElementRef | undefined;
  @ViewChild('wishItemisbn') isbnInput: ElementRef | undefined;
  @Output() addWish = new EventEmitter<Wish>();
  constructor() { }

  ngOnInit() {
  }

  addWishItem() {
    const wishItem = new Wish(this.nameInput?.nativeElement.value, this.isbnInput?.nativeElement.value);
    this.addWish.emit(wishItem)
  }
}

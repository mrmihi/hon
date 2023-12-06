import { Component, OnInit } from '@angular/core';
import {ButtonModule} from "primeng/button";
import { InputTextModule } from 'primeng/inputtext';
import {FormsModule} from "@angular/forms";

@Component({
  standalone: true,
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
  imports: [
    ButtonModule,InputTextModule, FormsModule
  ]
})
export class ShoppingEditComponent implements OnInit {
  wishItems: String = "";
  constructor() { }

  ngOnInit() {
  }

}

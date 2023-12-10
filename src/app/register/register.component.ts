import { Component } from '@angular/core';
import { User } from '../shared/user.model'; // Fix the import statement
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule ,CommonModule, NgOptimizedImage],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  user: User = new User('', '', '');
  password: string = '';
  confirmPassword: string = '';
  constructor() {}

  passwordMatch() {
    if(this.password === this.confirmPassword) {
      return true;
    }
    return false;
  }

  onSubmit() {
    console.log('onSubmit: ' + this.user.user_name);
  }

}

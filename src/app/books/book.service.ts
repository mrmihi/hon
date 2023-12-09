import {Book} from "../shared/book.model";
import {EventEmitter} from "@angular/core";

export class bookService {

  private books: Book[] = [
    new Book(
      'The Cheat Code',
      'Going Off Script',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    ),
    new Book(
      'A Test Book',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    ),
  ];

  selectedBook = new EventEmitter<Book>();

   getBooks() {
    return this.books.slice();
  }


}

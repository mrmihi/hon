import {Wish} from "../shared/wish.model";
import {EventEmitter} from "@angular/core";

export class wishListService {
  wishesChanged = new EventEmitter<Wish[]>();
   private wishes: Wish[] = [
    new Wish('Apples Are Tasty', 5),
    new Wish('Tomatoes Rot', 10),
  ];

   getWishList(){
     return this.wishes.slice();
   }

   addWishList(wish: Wish) {
     this.wishes.push(wish);
     this.wishesChanged.emit(this.wishes.slice());
   }
}

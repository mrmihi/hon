import {Wish} from "../shared/wish.model";
import {Subject} from "rxjs";

export class wishListService {
  wishesChanged = new Subject<Wish[]>();
   private wishes: Wish[] = [
    new Wish('Apples Are Tasty', 5),
    new Wish('Tomatoes Rot', 10),
  ];

   getWishList(){
     return this.wishes.slice();
   }

   addWishList(wish: Wish) {
     this.wishes.push(wish);
     this.wishesChanged.next(this.wishes.slice());
   }
}

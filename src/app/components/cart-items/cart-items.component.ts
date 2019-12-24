import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Books } from "../../models/books.model";
import { AppState, AppStateBuy } from "../../app.state";
import { Router } from "@angular/router";
import * as AllBooks from "../../actions/book.action";
import { State, BuyModel } from "../../models/books.model";
import * as moment from "moment";
@Component({
  selector: "app-cart-items",
  templateUrl: "./cart-items.component.html",
  styleUrls: ["./cart-items.component.css"]
})
export class CartItemsComponent implements OnInit {
  cartItems: Observable<Books[]>;
  buy: Observable<BuyModel[]>;
  count: Observable<number>;
  cartItemsTitle = [];
  constructor(
    private store: Store<AppState>,
    private route: Router,
    private countStore: Store<State>,
    private buyStore: Store<AppStateBuy>
  ) {
    this.cartItems = store.select("book");
    this.count = countStore.select("counter");
    this.cartItems.subscribe(data => this.cartItemsTitle.push(data));
  }
  ngOnInit() {}
  buyNow() {
    var name = [];
    var id = [];
    var price = [];

    this.cartItemsTitle.forEach(function(value) {
      for (var i = 0; i < value.length; i++) {
        name.push(value[i].title);
        id.push(value[i].id);
        price.push(value[i].price);
      }
    });

    const date = moment().format("D MMM YYYY h:mm a");
    for (var i = 1; i < id.length; i++) {
      this.buyStore.dispatch(
        new AllBooks.BuyBook({
          id: id[i],
          title: name[i],
          date: date,
          cost: price[i]
        })
      );
    }
    this.route.navigate(["checkoutscreen"]);
  }

  deleteCartItem(i) {
    this.store.dispatch(new AllBooks.RemoveBook(i));
    this.countStore.dispatch(new AllBooks.Decrement());
  }
}

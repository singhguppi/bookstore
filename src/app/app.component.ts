import { Component } from "@angular/core";
import { Router } from "@angular/router";
import * as fromStore from "./reducers/books.reducer";
import { State } from "./models/books.model";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  count: Observable<number>;
  constructor(private route: Router, private store: Store<State>) {
    this.count = this.store.select("counter");
  }
  title = "ecommerce";
  homeclicked() {
    this.route.navigate(["home"]);
  }
  myorders() {
    this.route.navigate(["myorders"]);
  }
  cartItems() {
    this.route.navigate(["cart-items"]);
  }
}

import { Component, OnInit } from "@angular/core";
import { AppStateMyOrders } from "../../app.state";
import { Store } from "@ngrx/store";
import { MyOrders } from "../../models/books.model";
import { Observable } from "rxjs";

@Component({
  selector: "app-myorders",
  templateUrl: "./myorders.component.html",
  styleUrls: ["./myorders.component.css"]
})
export class MyordersComponent implements OnInit {
  orders: Observable<MyOrders[]>;
  constructor(private orderStore: Store<AppStateMyOrders>) {
    this.orders = orderStore.select("orders");
  }

  ngOnInit() {}
}

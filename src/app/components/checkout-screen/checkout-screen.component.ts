import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import * as moment from "moment";
import { Books, BookDetailsModel, BuyModel } from "../../models/books.model";
import {
  AppState,
  AppStateMyOrders,
  AppStateBookDetails,
  AppStateBuy
} from "../../app.state";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { MyOrders, State } from "../../models/books.model";
import * as allBooks from "../../actions/book.action";

@Component({
  selector: "app-checkout-screen",
  templateUrl: "./checkout-screen.component.html",
  styleUrls: ["./checkout-screen.component.css"]
})
export class CheckoutScreenComponent implements OnInit {
  bookTitle = [];
  allReaders;
  total: Number = 0;
  cost;
  customerName;
  customerAddress;
  cardNumber;
  itemsCount = 0;
  books: Observable<Books[]>;
  orders: Observable<MyOrders[]>;
  details: Observable<BookDetailsModel[]>;
  buy: Observable<BuyModel[]>;
  cartItemsCount: Observable<number>;
  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private orderStore: Store<AppStateMyOrders>,
    private detailsStore: Store<AppStateBookDetails>,
    private buyStore: Store<AppStateBuy>,
    private countStore: Store<State>
  ) {
    this.details = detailsStore.select("bookDetails");
    this.books = store.select("book");
    this.books.subscribe(data => data);
    this.orders = orderStore.select("orders");
    this.cartItemsCount = countStore.select("counter");
    this.cartItemsCount.subscribe(data => (this.itemsCount = data));
    this.buy = buyStore.select("buy");
    this.buy.subscribe(data => this.bookTitle.push(data));
    let tempTotal = 0;
    this.bookTitle.forEach(function(value) {
      for (var i = 1; i < value.length; i++) {
        var temp = Number(value[i].cost);
        // this.totalCost(temp);
        //this.total = this.total + temp;
        // console.log(Number(value[i].cost));
        //console.log("total cost is", this.total);
      }
    });

    console.log("this is total costs", this.total);
  }

  ngOnInit() {}
  totalCost(temp) {
    this.total = this.total + temp;
    console.log("function total", this.total);
  }
  order() {
    const date = moment().format("D MMM YYYY h:mm a");
    var buyBooktTitle = [];
    var titleString = "";
    if (
      this.customerName === undefined ||
      this.customerAddress === undefined ||
      this.cardNumber === undefined
    ) {
      alert("All fields are mandatory");
    } else {
      this.bookTitle.forEach(function(value) {
        for (var i = 0; i < value.length; i++) {
          buyBooktTitle.push(value[i].title);
        }
      });
      for (var i = 1; i < buyBooktTitle.length; i++) {
        titleString = titleString + buyBooktTitle[i] + ",";
      }
      console.log("title string is", titleString);
      this.orderStore.dispatch(
        new allBooks.OrderBook({
          title: titleString,
          customerName: this.customerName,
          address: this.customerAddress,
          date: date
        })
      );
      // for (var i = 0; i <= this.itemsCount + 2; i++) {
      //   console.log(i);
      //   this.store.dispatch(new allBooks.RemoveBook(i));
      // }
      var i = 1;
      console.log("items length", this.itemsCount);
      while (i <= this.itemsCount + 1) {
        this.store.dispatch(new allBooks.RemoveBook(i));
        i++;
      }
      this.countStore.dispatch(new allBooks.ResetCounter());
      alert("Purchased");
    }
  }
}

import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import {
  AppState,
  AppStateBookDetails,
  AppStateCounter,
  AppStateBuy
} from "../../app.state";
import { Observable } from "rxjs";
import { Books, BookDetailsModel, BuyModel } from "../../models/books.model";
import { ActivatedRoute, Router } from "@angular/router";
import * as allBooks from "../../actions/book.action";
import * as moment from "moment";

@Component({
  selector: "app-book-details",
  templateUrl: "./book-details.component.html",
  styleUrls: ["./book-details.component.css"]
})
export class BookDetailsComponent implements OnInit {
  books: Observable<Books[]>;
  details: Observable<BookDetailsModel[]>;
  count: Observable<any>;
  buy: Observable<BuyModel>;
  bookId;
  counter = 0;
  bookCost;
  booksDetailData = [];
  bookTitle;
  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private routes: Router,
    private detailsStore: Store<AppStateBookDetails>,
    private countStore: Store<AppStateCounter>,
    private buyStore: Store<AppStateBuy>
  ) {
    this.books = store.select("book");
    this.details = detailsStore.select("bookDetails");
    this.details.subscribe(data => this.display(data));
    this.bookId = this.route.snapshot.paramMap.get("id");
    this.bookTitle = this.route.snapshot.paramMap.get("title");
  }
  display(data) {
    this.bookCost = data[1].price;
  }
  addToCart() {
    this.store.dispatch(
      new allBooks.AddBook({
        title: this.bookTitle,
        id: this.bookId,
        price: this.bookCost
      })
    );
    this.countStore.dispatch(new allBooks.Increment());
  }
  removeFromCart() {
    this.store.dispatch(new allBooks.RemoveBook(1));
  }
  buyNow() {
    const date = moment().format("D MMM YYYY h:mm a");
    this.countStore.dispatch(
      new allBooks.BuyBook({
        id: this.bookId,
        title: this.bookTitle,
        date: date,
        cost: this.bookCost
      })
    );
    this.routes.navigate(["checkoutscreen"]);
  }
  ngOnInit() {}
}

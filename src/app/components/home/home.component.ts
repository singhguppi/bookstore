import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import * as allBooks from "../../actions/book.action";
import { AppStateBookDetails, AppStateBooks } from "../../app.state";
import { BookDetailsModel, BooksData } from "../../models/books.model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  allReaders = [];
  loading = false;
  isLoaded = false;
  apiBooksData = [];
  count = 0;
  id;
  title;
  pageCount;
  thumbnailUrl;
  longDescription;
  authors;
  price;
  detials: Observable<BookDetailsModel[]>;
  apiData: Observable<BooksData[]>;
  constructor(
    private router: Router,
    private detailsStore: Store<AppStateBookDetails>,
    private apiStore: Store<AppStateBooks>
  ) {
    this.apiStore.dispatch(new allBooks.GetItems());
    this.apiData = apiStore.select("data");
    this.detials = detailsStore.select("bookDetails");
  }

  display(data) {
    this.count++;
    if (this.count == 2) {
      this.apiBooksData = data.data;
      this.loading = true;
      console.log("api array of data is", this.apiBooksData);
    }
  }

  ngOnInit() {
    this.apiData.subscribe(data => this.display(data));
  }
  bookDetail(
    id,
    title,
    pageCount,
    thumbnailUrl,
    longDescription,
    authors,
    price
  ) {
    this.id = id;
    this.title = title;
    this.pageCount = pageCount;
    this.thumbnailUrl = thumbnailUrl;
    this.longDescription = longDescription;
    this.authors = authors;
    this.price = price;

    this.detailsStore.dispatch(
      new allBooks.Details({
        price: this.price,
        id: this.id,
        title: this.title,
        pageCount: this.pageCount,
        thumbnailUrl: this.thumbnailUrl,
        longDescription: this.longDescription,
        authors: this.authors
      })
    );
    this.router.navigate(["bookdetails", id, title]);
  }
}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BooksData } from "../models/books.model";
import { Observable } from "rxjs";
@Injectable()
export class booksService {
  constructor(private http: HttpClient) {}

  log(): Observable<BooksData[]> {
    console.log("sevice called");
    const data = this.http.get<BooksData[]>(
      "https://api.myjson.com/bins/j82l2"
    );
    return data;
  }
}

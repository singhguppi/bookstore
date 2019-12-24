import { Books } from "./models/books.model";
import {
  MyOrders,
  BooksData,
  BookDetailsModel,
  State,
  BuyModel
} from "./models/books.model";
//import * as allIndex from "./reducers/index";
export interface AppState {
  readonly book: Books[];
}
export interface AppStateMyOrders {
  readonly orders: MyOrders[];
}
export interface AppStateBooks {
  readonly data: BooksData[];
}

export interface AppStateBookDetails {
  readonly bookDetails: BookDetailsModel[];
}
export interface AppStateCounter {
  readonly counter: State;
}
export interface AppStateBuy {
  readonly buy: BuyModel[];
}

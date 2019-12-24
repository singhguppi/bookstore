import { Action } from "@ngrx/store";
import {
  Books,
  MyOrders,
  BooksData,
  BookDetailsModel,
  BuyModel
} from "../models/books.model";
export const ADD_BOOK = "[BOOKS]_ADD";
export const REMOVE_BOOK = "[BOOKS]_REMOVE";
export const ADD_ORDER = "[BOOKS]_ORDER";
export const LOAD_ITEMS = "[Products] Load items from server";
export const LOAD_SUCCESS = "[Products] Load success";
export const BOOKS_DETAILS = "[BOOKS]_DETAILS";
export const increment = "[Counter Component] Increment";
export const decrement = "[Counter Component] Decrement";
export const reset = "[Counter Component] reset";
export const BUY_BOOK = "[BOOK_BUY]";

export class AddBook implements Action {
  readonly type = ADD_BOOK;
  constructor(public payload: Books) {}
}
export class RemoveBook implements Action {
  readonly type = REMOVE_BOOK;
  constructor(public payload: number) {}
}
export class OrderBook implements Action {
  readonly type = ADD_ORDER;
  constructor(public payload: MyOrders) {}
}
export class Details implements Action {
  readonly type = BOOKS_DETAILS;
  constructor(public payload: BookDetailsModel) {}
}
export class GetItems implements Action {
  readonly type = LOAD_ITEMS;
}
export class LoadItems implements Action {
  readonly type = LOAD_SUCCESS;
  constructor(public payload: BooksData[]) {}
}

export class Increment implements Action {
  readonly type = increment;
}

export class Decrement implements Action {
  readonly type = decrement;
}

export class ResetCounter implements Action {
  readonly type = reset;
}
export class BuyBook implements Action {
  readonly type = BUY_BOOK;
  constructor(public payload: BuyModel) {}
}
export type Actions =
  | AddBook
  | RemoveBook
  | OrderBook
  | GetItems
  | LoadItems
  | Details
  | Increment
  | Decrement
  | BuyBook
  | ResetCounter;

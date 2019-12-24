import {
  Books,
  MyOrders,
  BooksData,
  BookDetailsModel,
  State,
  BuyModel
} from "../models/books.model";
import { AppState } from "../app.state";
import * as AllBooks from "../actions/book.action";
import { ActionReducerMap } from "@ngrx/store";
const initialState: Books = {
  title: "",
  id: null,
  price: ""
};
const orderInitialState: MyOrders = {
  title: "",
  customerName: "",
  address: "",
  date: ""
};

const DetailsInitial: BookDetailsModel = {
  price: "",
  id: null,
  title: "",
  pageCount: "",
  thumbnailUrl: "",
  longDescription: "",
  authors: ""
};
export function detailsReducer(
  state: [BookDetailsModel] = [DetailsInitial],
  action: AllBooks.Actions
) {
  console.log("details works", state);
  switch (action.type) {
    case AllBooks.BOOKS_DETAILS:
      return [...state, action.payload];
    default:
      return state;
  }
}
export function reducer(
  state: Books[] = [initialState],
  action: AllBooks.Actions
) {
  console.log("books state checking", state);
  switch (action.type) {
    case AllBooks.ADD_BOOK:
      return [...state, action.payload];

    case AllBooks.REMOVE_BOOK:
      state.splice(action.payload, 1);
      return state;

    default:
      return state;
  }
}
export const getCart = (state: Books) =>
  console.log("cart books are", state.title);
export const cartReducers: ActionReducerMap<AppState> = {
  book: reducer
};

export function orderReducer(
  stateorder: MyOrders[] = [orderInitialState],
  action: AllBooks.Actions
) {
  switch (action.type) {
    case AllBooks.ADD_ORDER:
      return [...stateorder, action.payload];
    default:
      return stateorder;
  }
}

export const initialData: BooksData = {
  data: []
};

export function loadReducer(
  state = initialData.data,
  action: AllBooks.Actions
) {
  switch (action.type) {
    case AllBooks.LOAD_SUCCESS:
      console.log("load reducer works", state);
      return {
        data: [...action.payload]
      };

    default:
      return state;
  }
}

export const initialState1: number = 0;

export function counterReducer(
  state = initialState1,
  action: AllBooks.Actions
) {
  switch (action.type) {
    case AllBooks.increment:
      return state + 1;
    case AllBooks.decrement:
      return state - 1;
    case AllBooks.reset:
      return (state = 0);
    default:
      return state;
  }
}
// export const reducers: ActionReducerMap<State> = {
//   counter: counterReducer
// };

export const initialBuy: BuyModel = {
  id: "",
  title: "",
  cost: "",
  date: ""
};

export function buyReducer(
  state: [BuyModel] = [initialBuy],
  action: AllBooks.Actions
) {
  switch (action.type) {
    case AllBooks.BUY_BOOK:
      console.log("buy reducer", state);
      return [...state, action.payload];
  }
}

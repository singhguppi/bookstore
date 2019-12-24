// import * as fromPizzas from "./books.reducer";
// import { createSelector, createFeatureSelector } from "@ngrx/store";
// export interface ProductsState {
//   pizzas: fromPizzas.BooksState;
// }

// export const getProductsState = createFeatureSelector<ProductsState>("pizzas");
// export const getBooksState = createSelector(
//   getProductsState,
//   (state: ProductsState) => state.pizzas
// );
// export const getAllBooks = createSelector(
//   getBooksState,
//   fromPizzas.getBooks
// );
import { ActionReducerMap } from "@ngrx/store";
import * as fromReducer from "../reducers/books.reducer";
import { State } from "../models/books.model";
// export interface State {
//   counter: number;
// }



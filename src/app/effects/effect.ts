import { Injectable, PipeTransform } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import * as allBooks from "../actions/book.action";
import { booksService } from "../Services/books.services";

@Injectable()
export class ShopEffects {
  constructor(private actions$: Actions, private Service: booksService) {
    console.log("effct works");
  }
  @Effect()
  loadBooks$ = this.actions$.pipe(
    ofType(allBooks.LOAD_ITEMS),
    mergeMap(() =>
      this.Service.log().pipe(
        map(books => {
          return { type: allBooks.LOAD_SUCCESS, payload: books };
        }),
        catchError(() => EMPTY)
      )
    )
  );
}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { HomeComponent } from "./components/home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { booksService } from "./Services/books.services";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import {
  reducer,
  orderReducer,
  loadReducer,
  detailsReducer,
  counterReducer,
  buyReducer
} from "./reducers/books.reducer";
import { BookDetailsComponent } from "./components/book-details/book-details.component";
import { CheckoutScreenComponent } from "../app/components/checkout-screen/checkout-screen.component";
import { MyordersComponent } from "./components/myorders/myorders.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { CartItemsComponent } from "./components/cart-items/cart-items.component";
import { ShopEffects } from "./effects/effect";
let rootReducer = {
  orders: orderReducer,
  book: reducer,
  data: loadReducer,
  bookDetails: detailsReducer,
  counter: counterReducer,
  buy: buyReducer
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookDetailsComponent,
    CheckoutScreenComponent,
    MyordersComponent,
    CartItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule,
    StoreModule.forRoot(rootReducer),
    MatProgressSpinnerModule,
    EffectsModule.forRoot([ShopEffects]),
    MatInputModule,
    FormsModule
  ],
  providers: [booksService],
  bootstrap: [AppComponent]
})
export class AppModule {}

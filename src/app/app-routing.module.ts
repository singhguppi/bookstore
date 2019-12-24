import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { BookDetailsComponent } from "./components/book-details/book-details.component";
import { CheckoutScreenComponent } from "./components/checkout-screen/checkout-screen.component";
import { MyordersComponent } from "./components/myorders/myorders.component";

import { CartItemsComponent } from "./components/cart-items/cart-items.component";
const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "bookdetails/:id/:title", component: BookDetailsComponent },
  { path: "checkoutscreen", component: CheckoutScreenComponent },
  { path: "myorders", component: MyordersComponent },
  { path: "cart-items", component: CartItemsComponent },
  { path: "", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export interface Books {
  title: string;
  id: number;
  price: string;
}
export interface MyOrders {
  title: string;
  customerName: string;
  address: string;
  date: string;
}
export interface BooksData {
  data: [];
}

export interface BookDetailsModel {
  price: string;
  id: number;
  title: string;
  pageCount: string;
  thumbnailUrl: string;
  longDescription: string;
  authors: string;
}

export interface State {
  counter: number;
}

export interface BuyModel {
  id: string;
  title: string;
  date: string;
  cost: string;
}

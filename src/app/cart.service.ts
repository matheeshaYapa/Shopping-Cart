import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: {name: string, price: number, description: string}[] = [];

  constructor(private http: HttpClient) { }

  getItems() {
    return this.items;
  }

  addToCart(product: {name: string, price: number, description: string}) {
    this.items.push(product);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}

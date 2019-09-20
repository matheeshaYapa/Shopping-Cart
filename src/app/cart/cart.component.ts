import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: {name: string, price: number, description: string}[];
  checkoutForm;

  constructor(private cartService: CartService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.cartItems = this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  onSubmit(customerData) {
    console.warn('Your order has been submitted: ' + customerData);

    this.cartItems = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}

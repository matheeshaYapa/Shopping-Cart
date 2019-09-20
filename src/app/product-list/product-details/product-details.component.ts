import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {products} from '../../products';
import {CartService} from '../../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  selectedProduct;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.selectedProduct = products[params.get('productId')];
    });
  }

  addToCart(selectedProduct) {
    window.alert('Your product has been added to the cart');
    this.cartService.addToCart(selectedProduct);
  }

}

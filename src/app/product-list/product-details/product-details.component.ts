import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {products} from '../../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  selectedProduct;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.selectedProduct = products[params.get('productId')];
    });
  }

}

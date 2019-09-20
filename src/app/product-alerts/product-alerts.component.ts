import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product: {name: string, price: number, description: string};
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}

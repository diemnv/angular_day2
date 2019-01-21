import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  product = {
    name: 'ao len co tron',
    price: '5000'
  }
  nguoi = {
    name: 'ao len co tron',
    price: '5000'
  }
  constructor() { }

  ngOnInit() {
  }

}

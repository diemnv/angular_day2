import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @Input()
  single: {
    name: string,
    price:number
  };

  @Input()
  single2: {
    name: string,
    price:number
  };
  constructor() { }

  ngOnInit() {
  }

}

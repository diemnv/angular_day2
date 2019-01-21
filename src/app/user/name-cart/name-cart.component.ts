import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';

@Component({
  selector: 'app-name-cart',
  templateUrl: './name-cart.component.html',
  styleUrls: ['./name-cart.component.scss']
})
export class NameCartComponent implements OnInit {
  info = {
    name: "Nguyễn Văn Diệm",
    job: "Developer",
    address: "Hà Nội",
    phone: "0965298776",
    profile: "https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-girl-xinh-gai-dep.jpg"
  }
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.info.job = 'Tester';
    }, 3000);
  }

}

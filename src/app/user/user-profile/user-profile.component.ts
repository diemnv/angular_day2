import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user = {
    name: 'Pham Van Hao',
    photo: 'https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-girl-xinh-gai-dep.jpg'
  }
  imgUrl: string[] = ['https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-girl-xinh-gai-dep.jpg', 'https://dantricdn.com/2018/5/15/photo-1-15263477254491417781807.jpg'];
  value: number = 0;
  constructor() { }

  ngOnInit() {
  }

  changePhoto() {
    this.value = 1 - this.value;
    this.user.photo = this.imgUrl[this.value];
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JAN2019-NG-DAY2';

  onDone() {
    alert("happy new year");
  }
}


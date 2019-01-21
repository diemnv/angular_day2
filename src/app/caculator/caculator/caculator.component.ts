import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.scss']
})
export class CaculatorComponent implements OnInit {
  number1: number;
  number2: number;
  result: number;
  cal: number;
  constructor() { }

  ngOnInit() {
  }

  // onChangeInp1(even: Event) {
  //   const inp1 = even.target as HTMLInputElement;
  //   this.number1 = +inp1.value;
  // }

  // onChangeInp2(even: Event) {
  //   const inp2 = even.target as HTMLInputElement;
  //   this.number2 = +inp2.value;
  // }

  onAdd() {
    this.result = +this.number1 + +this.number2;
  }

  onSub() {
    this.result = +this.number1 - +this.number2;
  }

  onMul() {
    this.result = +this.number1 * +this.number2;
  }

  onDiv() {
    this.result = +this.number1 / +this.number2;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css'],
})
export class NumbersComponent implements OnInit {
  showNumbers = true;
  boxNumber = 11;
  numbers = [1, 2, 3, 4, 23, 46, 75, 12, 92, 133];

  constructor() {}

  ngOnInit(): void {}
  toggleShow() {
    this.showNumbers = !this.showNumbers;
  }
}

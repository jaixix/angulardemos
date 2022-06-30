import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {

  @Input()
  user: {
    id: number;
    name: string;
  };

  constructor() { }

  ngOnInit(): void {}

}

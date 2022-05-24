import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  productName = '';
  productStock = 0;

  @Output()
  productAdded = new EventEmitter<{
    productName : string,
    productStock : number,
    productAvailability : boolean
  }
  >();

  onAddProduct() {
    this.productAdded.emit({
      productName : this.productName,
      productStock : this.productStock,
      productAvailability : this.productStock>0 ? true : false,
    });
  }


  constructor() { }

  ngOnInit(): void {}

}

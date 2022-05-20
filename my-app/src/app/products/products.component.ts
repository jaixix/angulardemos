import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  productId : number = 10;
  productStatus : String = 'InStock';

  getProductStatus (){
    return this.productStatus;
  }

}

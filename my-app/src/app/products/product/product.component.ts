import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {  }

  productId : number = 10;
  productStatus : String = 'InStock';

  getProductStatus (){
    return this.productStatus;
  }
}

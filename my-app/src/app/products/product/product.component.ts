import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {  }

  productId : number = 10;
  productStatus : String = 'In Stock';

  getProductStatus (){
    return this.productStatus;
  }

  getColor(){
    return this.productStatus === "In Stock" ? "green" : "red";
  }
}

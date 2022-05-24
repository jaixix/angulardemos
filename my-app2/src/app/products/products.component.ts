import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
    {
      name : 'Laptop',
      stock : 200,
      availability : false,
    },
    {
      name : 'Phone',
      stock : 0,
      availability : false
    },
    {
      name : 'Keyboard',
      stock : 20,
      availability : true
    }
  ];

  onProductAdded(data){
    this.products.push({
      name : data.productName,
      stock : data.productStock,
      availability : data.productAvailability,
    })
  }

}

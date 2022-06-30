import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {}
  allowNewProduct = true;
  toggleOnOff = "Toggle Off";
  productCreationStatus = "No Product Created!";
  productCreated = false; 

  onProductCreate(){
    this.productCreationStatus = "Product was created!";
    this.productCreated = true;
  }

  onToggleOnOff(){
    if(this.toggleOnOff == "Toggle Off")
      this.toggleOnOff = "Toggle On";
    else
      this.toggleOnOff = "Toggle Off";
  }

  productName = "";
  productDescription = "Default Product Description";

  userName = "default";
}

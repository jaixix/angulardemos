import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
// implements
//   OnInit,
//   OnChanges,
//   DoCheck,
//   AfterContentInit,
//   AfterContentChecked,
//   AfterViewInit,
//   AfterViewChecked,
//   OnDestroy
export class ProductsComponent {
  products = [
    {
      name: 'Laptop',
      stock: 200,
      availability: 'In Stock',
    },
    // {
    //   name: 'Phone',
    //   stock: 100,
    //   availability: 'In Stock',
    // },
  ];

  // constructor() {
  //   console.log('Products constructor called..');
  // }
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('Products ngOnChanges called..');
  // }
  // ngDoCheck(): void {
  //   console.log('Products ngDoCheck called..');
  // }
  // ngAfterContentInit(): void {
  //   console.log('Products ngAfterContentInit called..');
  // }
  // ngAfterContentChecked(): void {
  //   console.log('Products ngAfterContentChecked called..');
  // }
  // ngAfterViewInit(): void {
  //   console.log('Products ngAfterViewInit called..');
  // }
  // ngAfterViewChecked(): void {
  //   console.log('Products ngAfterViewChecked called..');
  // }
  // ngOnDestroy(): void {
  //   console.log('Products ngOnDestroy called..');
  // }

  // ngOnInit(): void {
  //   console.log('Products ngOnInit called..');
  // }

  onProductAdded(data) {
    this.products.push({
      name: data.productName,
      stock: data.stock,
      availability: data.productAvailability,
    });
  }
}

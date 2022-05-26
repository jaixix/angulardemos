import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
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
export class ProductComponent {
  @Input()
  productElement: {
    name: string;
    stock: number;
    availability: string;
  };

  // constructor() {
  //   console.log('Product constructor called..');
  // }
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('Product ngOnChanges called..');
  // }
  // ngDoCheck(): void {
  //   console.log('Product ngDoCheck called..');
  // }
  // ngAfterContentInit(): void {
  //   console.log('Product ngAfterContentInit called..');
  // }
  // ngAfterContentChecked(): void {
  //   console.log('Product ngAfterContentChecked called..');
  // }
  // ngAfterViewInit(): void {
  //   console.log('Product ngAfterViewInit called..');
  // }
  // ngAfterViewChecked(): void {
  //   console.log('Product ngAfterViewChecked called..');
  // }
  // ngOnDestroy(): void {
  //   console.log('Product ngOnDestroy called..');
  // }

  // ngOnInit(): void {
  //   console.log('Product ngOnInit called..');
  // }
}

import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector : '[appBasicHighlight]',
})
export class BasicHightlightDirective implements OnInit{
    constructor(private someElement: ElementRef) {}
    ngOnInit(): void {
        this.someElement.nativeElement.style.backgroundColor = 'lightgreen';
    }
}
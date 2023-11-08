import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColors]'
})
export class ColorsDirective {

  colors = [
    'AliceBlue',
    'Cyan',
    'Black',
    'Grey',
    'Purple',
    'White'
  ];

  i: number = 0;

  constructor() { }

  //Initially set the background color to white
  @HostBinding('style.backgroundColor')
  bgColor:string = 'white';

  //Change the background color when linked host is clicked
  @HostListener("click")
  changeColor(){
    this.bgColor = this.colors[this.i % this.colors.length];
    this.i++;
  }
}

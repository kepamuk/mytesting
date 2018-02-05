import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appOpen]'
})
export class OpenDirective {

  @HostBinding('class.open') isOpen = false;

  @HostListener('click')
  click() {
    this.isOpen = !this.isOpen;
  }

}

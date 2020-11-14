import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[doorContent]',
})
export class DoorDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

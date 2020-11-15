import { Component, OnInit, Inject, ViewChildren, ViewChild, ComponentFactoryResolver, AfterViewInit, QueryList } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DoorItem } from './doorItem.component'
import { DoorDirective } from './door.directive'
import { Door1Component } from '../door1/door1.component';
import { Door2Component } from '../door2/door2.component';

@Component({
  selector: 'app-dlg-door',
  templateUrl: './dlg-door.component.html',
  styleUrls: ['./dlg-door.component.css']
})


export class DlgDoorComponent implements OnInit, AfterViewInit {
  titles =  {
    1: 'Der alte Adventskalender',
    2: 'Ein Stern aus Butterbrottüten',
    4: 'Bärentatzen',
    6: 'Nikolaus',
    10: 'Adventslicht',
    13: 'Petermann schläft ein',
    20: 'Eine kinderleichte Weihnachtskarte',
    23: 'Wichtelweihnacht'
  }

  counter = [];

  //private components = [Door1Component, Door2Component];

  //@ViewChildren(DoorDirective) doorContentList: QueryList<DoorDirective>;
  //@ViewChild(DoorDirective, {static: true}) doorContent: DoorDirective;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { day: number }, private componentFactoryResolver: ComponentFactoryResolver) {
    this.counter[20] = {
      max: 6,
      value: 1
    };

    // this.counter[7] = {
    //   max: 8,
    //   value: 1
    // };

    // this.counter[13] = {
    //   max: 8,
    //   value: 1
    // };
  }

  ngOnInit() {
    // const doorItem = this.components[this.data.day - 1];
    // const componentFactory = this.componentFactoryResolver.resolveComponentFactory<DoorItem>(doorItem);
    // const viewContainerRef = this.doorContent.viewContainerRef;
    // viewContainerRef.clear();

    // const componentRef = viewContainerRef.createComponent(componentFactory);
    //componentRef.instance.data = adItem.data;
  }

  ngAfterViewInit(): void {
    // this.doorContentList.changes.subscribe((comps: QueryList<DoorDirective>) => {
    //   if (comps.length > 0) {
    //     let doorContent : DoorDirective = comps[0];
    //     const doorItem = this.components[this.data.day - 1];
    //     const componentFactory = this.componentFactoryResolver.resolveComponentFactory<DoorItem>(doorItem);
    //     const viewContainerRef = doorContent.viewContainerRef;
    //     viewContainerRef.clear();

    //     const componentRef = viewContainerRef.createComponent(componentFactory);
    //     //componentRef.instance.data = adItem.data;
    //   }
    // });
  }

  public forward(): void {
    if (this.counter[this.data.day].value < this.counter[this.data.day].max) {
      this.counter[this.data.day].value += 1;
    }
  }

  public back(): void {
    if (this.counter[this.data.day].value > 1) {
      this.counter[this.data.day].value -= 1;
    }
  }

}

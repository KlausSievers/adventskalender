import { Component, OnInit, Inject, ViewChildren, ViewChild, ComponentFactoryResolver, AfterViewInit, QueryList } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DoorItem } from './doorItem.component'
import { DoorDirective } from './door.directive'
import { Door1Component } from '../door1/door1.component';
import { Door2Component } from '../door2/door2.component';

@Component({
  selector: 'app-dlg-door',
  templateUrl: './dlg-door.component.html',
  styleUrls: ['./dlg-door.component.css', './border.css']
})


export class DlgDoorComponent implements OnInit, AfterViewInit {
  titles = {
    1: 'Der alte Adventskalender',
    2: 'Cookies wie bei Subway',
    3: 'Nikolaus zu verschenken',
    4: 'Nikolaus-Dessert',
    5: 'Der Osternikolaus',
    6: 'Nikolaus',
    7: 'Cracker mit Käse',
    8: 'Adventslicht',
    9: 'Petermann schläft ein',
    10: 'Bärentatzen',
    11: 'Lass uns einen Schneemann basteln',
    12: 'Fünf Flocken',
    13: 'Die Himmelslaterne',
    14: 'Ein Stern aus Butterbrottüten',
    15: 'Sternenmännchen',
    16: 'Wunschzettel',
    17: 'Eine kinderleichte Weihnachtskarte',
    18: 'Hexenhaus aus Butterkeksen',
    19: 'Rudolph mit der roten Nase',
    20: '5 kleine Weihnachtsmänner',
    21: 'Buntgeschmückter Tannenbaum',
    22: 'Lebkuchenkerzen',
    23: 'Wichtelweihnacht',
    24: 'Der kleine Hase im Weihnachtswald'
  }

  counter = [];

  //private components = [Door1Component, Door2Component];

  //@ViewChildren(DoorDirective) doorContentList: QueryList<DoorDirective>;
  //@ViewChild(DoorDirective, {static: true}) doorContent: DoorDirective;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { day: number }, private componentFactoryResolver: ComponentFactoryResolver) {

    this.counter[2] = {
      max: 10,
      value: 1
    };

    this.counter[17] = {
      max: 6,
      value: 1
    };



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

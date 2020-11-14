import { Component, OnInit } from '@angular/core';
import { DoorItem } from '../dlg-door/doorItem.component';

@Component({
  selector: 'app-door1',
  templateUrl: './door1.component.html',
  styleUrls: ['./door1.component.css']
})
export class Door1Component implements OnInit, DoorItem {

  constructor() { }

  ngOnInit(): void {
  }

}

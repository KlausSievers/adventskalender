import { Component, OnInit } from '@angular/core';
import { DoorItem } from '../dlg-door/doorItem.component';

@Component({
  selector: 'app-door2',
  templateUrl: './door2.component.html',
  styleUrls: ['./door2.component.css']
})
export class Door2Component implements OnInit, DoorItem {

  constructor() { }

  ngOnInit(): void {
  }

}

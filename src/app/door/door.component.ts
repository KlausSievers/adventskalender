import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DlgDoorComponent } from '../dlg-door/dlg-door.component';
import { DlgWrongDayComponent } from '../dlg-wrong-day/dlg-wrong-day.component';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-door',
  templateUrl: './door.component.html',
  styleUrls: ['./door.component.scss']
})
export class DoorComponent implements OnInit {
  @Input()
  day: number;

  isExtraSmall: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.XSmall);

  private open: boolean;

  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog) { }

  ngOnInit(): void {
    let openDoorStr = localStorage.getItem('openDoors');
    if (openDoorStr) {
      let openDoors = JSON.parse(openDoorStr);
      this.open = openDoors.includes(this.day);
    } else {
      this.open = false;
    }

  }

  public openDoor(door: number) {
    let dialogRef;
    if (this.canBeOpened(door)) {
      if (!this.open) {
        let openDoorStr = localStorage.getItem('openDoors');
        let openDoors = null;
        if (!openDoorStr) {
          openDoors = [];
        } else {
          openDoors = JSON.parse(openDoorStr);
        }

        openDoors.push(door);
        localStorage.setItem('openDoors', JSON.stringify(openDoors));
        this.open = true;
      }

      dialogRef = this.dialog.open(DlgDoorComponent, {
        maxWidth: 600,
        data: {
          day: this.day
        }
      });
    } else {
      dialogRef = this.dialog.open(DlgWrongDayComponent);
    }

    // const smallDialogSubscription = this.isExtraSmall.subscribe(size => {
    //   if (size.matches) {
    //     dialogRef.updateSize('100%', '100%');
    //   } else {
    //     dialogRef.updateSize('50%', '50%');
    //   }
    // });

    // dialogRef.afterClosed().subcsribe(result => {
    //   smallDialogSubscription.unsubscribe();
    // });
  }

  private canBeOpened(door: number): boolean {
    var now = new Date();
    return door <= now.getDate() && now.getMonth() === 11;
   // return true;
  }

  public isOpen(): boolean {
    return this.open;
  }
}

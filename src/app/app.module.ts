import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {LayoutModule} from '@angular/cdk/layout';

import { DlgWrongDayComponent } from './dlg-wrong-day/dlg-wrong-day.component';
import { DlgDoorComponent } from './dlg-door/dlg-door.component';
import { DoorComponent } from './door/door.component';
import { Door1Component } from './door1/door1.component';
import { Door2Component } from './door2/door2.component';

@NgModule({
  declarations: [
    AppComponent,
    DlgWrongDayComponent,
    DlgDoorComponent,
    DoorComponent,
    Door1Component,
    Door2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    HttpClientModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

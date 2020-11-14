import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlgDoorComponent } from './dlg-door.component';

describe('DlgDoorComponent', () => {
  let component: DlgDoorComponent;
  let fixture: ComponentFixture<DlgDoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DlgDoorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DlgDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

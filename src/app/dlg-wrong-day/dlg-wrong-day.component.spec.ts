import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlgWrongDayComponent } from './dlg-wrong-day.component';

describe('DlgWrongDayComponent', () => {
  let component: DlgWrongDayComponent;
  let fixture: ComponentFixture<DlgWrongDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DlgWrongDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DlgWrongDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

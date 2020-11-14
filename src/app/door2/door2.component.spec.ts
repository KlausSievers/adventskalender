import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Door2Component } from './door2.component';

describe('Door2Component', () => {
  let component: Door2Component;
  let fixture: ComponentFixture<Door2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Door2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Door2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

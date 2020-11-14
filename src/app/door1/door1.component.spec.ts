import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Door1Component } from './door1.component';

describe('Door1Component', () => {
  let component: Door1Component;
  let fixture: ComponentFixture<Door1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Door1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Door1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

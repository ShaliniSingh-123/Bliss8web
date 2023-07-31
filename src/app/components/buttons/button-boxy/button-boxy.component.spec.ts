import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBoxyComponent } from './button-boxy.component';

describe('ButtonBoxyComponent', () => {
  let component: ButtonBoxyComponent;
  let fixture: ComponentFixture<ButtonBoxyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonBoxyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonBoxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

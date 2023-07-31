import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyMangementComponent } from './property-mangement.component';

describe('PropertyMangementComponent', () => {
  let component: PropertyMangementComponent;
  let fixture: ComponentFixture<PropertyMangementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyMangementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyMangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

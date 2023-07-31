import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyMapViewComponent } from './property-map-view.component';

describe('PropertyMapViewComponent', () => {
  let component: PropertyMapViewComponent;
  let fixture: ComponentFixture<PropertyMapViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyMapViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyMapViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesSlideComponent } from './properties-slide.component';

describe('PropertiesSlideComponent', () => {
  let component: PropertiesSlideComponent;
  let fixture: ComponentFixture<PropertiesSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertiesSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

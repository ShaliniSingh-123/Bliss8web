import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurAgentsComponent } from './our-agents.component';

describe('OurAgentsComponent', () => {
  let component: OurAgentsComponent;
  let fixture: ComponentFixture<OurAgentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurAgentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

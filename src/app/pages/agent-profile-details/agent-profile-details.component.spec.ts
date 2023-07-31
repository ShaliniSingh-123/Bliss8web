import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentProfileDetailsComponent } from './agent-profile-details.component';

describe('AgentProfileDetailsComponent', () => {
  let component: AgentProfileDetailsComponent;
  let fixture: ComponentFixture<AgentProfileDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentProfileDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentProfileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

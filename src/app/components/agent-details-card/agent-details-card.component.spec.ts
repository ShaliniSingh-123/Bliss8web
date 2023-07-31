import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentDetailsCardComponent } from './agent-details-card.component';

describe('AgentDetailsCardComponent', () => {
  let component: AgentDetailsCardComponent;
  let fixture: ComponentFixture<AgentDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentDetailsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

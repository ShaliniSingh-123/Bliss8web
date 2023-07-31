import { TestBed } from '@angular/core/testing';

import { AgentProfileDetailsService } from './agent-profile-details.service';

describe('AgentProfileDetailsService', () => {
  let service: AgentProfileDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentProfileDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

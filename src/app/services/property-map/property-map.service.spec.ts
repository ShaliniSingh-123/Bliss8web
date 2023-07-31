import { TestBed } from '@angular/core/testing';

import { PropertyMapService } from './property-map.service';

describe('PropertyMapService', () => {
  let service: PropertyMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertyMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

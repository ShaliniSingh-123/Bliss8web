import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmLeadRentComponent } from './adm-lead-rent.component';

describe('AdmLeadRentComponent', () => {
  let component: AdmLeadRentComponent;
  let fixture: ComponentFixture<AdmLeadRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmLeadRentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmLeadRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

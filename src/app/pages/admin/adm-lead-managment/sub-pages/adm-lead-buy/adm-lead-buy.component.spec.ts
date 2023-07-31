import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmLeadBuyComponent } from './adm-lead-buy.component';

describe('AdmLeadBuyComponent', () => {
  let component: AdmLeadBuyComponent;
  let fixture: ComponentFixture<AdmLeadBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmLeadBuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmLeadBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

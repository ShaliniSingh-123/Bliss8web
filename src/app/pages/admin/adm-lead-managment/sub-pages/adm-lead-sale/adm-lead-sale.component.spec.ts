import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmLeadSaleComponent } from './adm-lead-sale.component';

describe('AdmLeadSaleComponent', () => {
  let component: AdmLeadSaleComponent;
  let fixture: ComponentFixture<AdmLeadSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmLeadSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmLeadSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

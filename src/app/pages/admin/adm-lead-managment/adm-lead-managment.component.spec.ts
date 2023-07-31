import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmLeadManagmentComponent } from './adm-lead-managment.component';

describe('AdmLeadManagmentComponent', () => {
  let component: AdmLeadManagmentComponent;
  let fixture: ComponentFixture<AdmLeadManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmLeadManagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmLeadManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmLeadManageComponent } from './adm-lead-manage.component';

describe('AdmLeadManageComponent', () => {
  let component: AdmLeadManageComponent;
  let fixture: ComponentFixture<AdmLeadManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmLeadManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmLeadManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

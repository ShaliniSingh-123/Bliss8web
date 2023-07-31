import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmUserManagmentComponent } from './adm-user-managment.component';

describe('AdmUserManagmentComponent', () => {
  let component: AdmUserManagmentComponent;
  let fixture: ComponentFixture<AdmUserManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmUserManagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmUserManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

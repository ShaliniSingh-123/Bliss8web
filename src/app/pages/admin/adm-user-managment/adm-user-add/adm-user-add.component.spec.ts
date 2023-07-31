import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmUserAddComponent } from './adm-user-add.component';

describe('AdmUserAddComponent', () => {
  let component: AdmUserAddComponent;
  let fixture: ComponentFixture<AdmUserAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmUserAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmUserAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

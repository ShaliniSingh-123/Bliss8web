import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAdmHeaderComponent } from './main-adm-header.component';

describe('MainAdmHeaderComponent', () => {
  let component: MainAdmHeaderComponent;
  let fixture: ComponentFixture<MainAdmHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAdmHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAdmHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

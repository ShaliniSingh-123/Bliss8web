import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmSideboardComponent } from './adm-sideboard.component';

describe('AdmSideboardComponent', () => {
  let component: AdmSideboardComponent;
  let fixture: ComponentFixture<AdmSideboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmSideboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmSideboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

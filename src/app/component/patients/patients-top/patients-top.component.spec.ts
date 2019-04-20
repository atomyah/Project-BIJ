import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsTopComponent } from './patients-top.component';

describe('PatientsTopComponent', () => {
  let component: PatientsTopComponent;
  let fixture: ComponentFixture<PatientsTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsTopComponent } from './doctors-top.component';

describe('DoctorsTopComponent', () => {
  let component: DoctorsTopComponent;
  let fixture: ComponentFixture<DoctorsTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorsTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

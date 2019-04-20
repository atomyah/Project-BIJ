import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsAriticlesComponent } from './patients-ariticles.component';

describe('PatientsAriticlesComponent', () => {
  let component: PatientsAriticlesComponent;
  let fixture: ComponentFixture<PatientsAriticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsAriticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsAriticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

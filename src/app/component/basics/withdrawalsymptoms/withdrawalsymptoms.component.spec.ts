import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawalsymptomsComponent } from './withdrawalsymptoms.component';

describe('WithdrawalsymptomsComponent', () => {
  let component: WithdrawalsymptomsComponent;
  let fixture: ComponentFixture<WithdrawalsymptomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithdrawalsymptomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawalsymptomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

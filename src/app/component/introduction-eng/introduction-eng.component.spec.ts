import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionEngComponent } from './introduction-eng.component';

describe('IntroductionEngComponent', () => {
  let component: IntroductionEngComponent;
  let fixture: ComponentFixture<IntroductionEngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductionEngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

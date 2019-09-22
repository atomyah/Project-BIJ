import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GcseResultComponent } from './gcse-result.component';

describe('GcseResultComponent', () => {
  let component: GcseResultComponent;
  let fixture: ComponentFixture<GcseResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GcseResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GcseResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

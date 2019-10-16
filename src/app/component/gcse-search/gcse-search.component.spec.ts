import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GcseSearchComponent } from './gcse-search.component';

describe('GcseSearchComponent', () => {
  let component: GcseSearchComponent;
  let fixture: ComponentFixture<GcseSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GcseSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GcseSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

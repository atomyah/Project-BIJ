import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyhomeComponent } from './lazyhome.component';

describe('LazyhomeComponent', () => {
  let component: LazyhomeComponent;
  let fixture: ComponentFixture<LazyhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

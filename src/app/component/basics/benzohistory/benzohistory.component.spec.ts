import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenzohistoryComponent } from './benzohistory.component';

describe('BenzohistoryComponent', () => {
  let component: BenzohistoryComponent;
  let fixture: ComponentFixture<BenzohistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenzohistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenzohistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenzowordsComponent } from './benzowords.component';

describe('BenzowordsComponent', () => {
  let component: BenzowordsComponent;
  let fixture: ComponentFixture<BenzowordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenzowordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenzowordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

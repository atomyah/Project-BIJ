import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenzolistEngComponent } from './benzolist-eng.component';

describe('BenzolistEngComponent', () => {
  let component: BenzolistEngComponent;
  let fixture: ComponentFixture<BenzolistEngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenzolistEngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenzolistEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

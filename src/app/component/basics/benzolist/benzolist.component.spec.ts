import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenzolistComponent } from './benzolist.component';

describe('BenzolistComponent', () => {
  let component: BenzolistComponent;
  let fixture: ComponentFixture<BenzolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenzolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenzolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyRootComponent } from './lazy-root.component';

describe('LazyRootComponent', () => {
  let component: LazyRootComponent;
  let fixture: ComponentFixture<LazyRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

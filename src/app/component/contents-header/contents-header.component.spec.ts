import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentsHeaderComponent } from './contents-header.component';

describe('ContentsHeaderComponent', () => {
  let component: ContentsHeaderComponent;
  let fixture: ComponentFixture<ContentsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

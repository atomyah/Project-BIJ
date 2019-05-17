import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentsCommentComponent } from './contents-comment.component';

describe('ContentsCommentComponent', () => {
  let component: ContentsCommentComponent;
  let fixture: ComponentFixture<ContentsCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentsCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentsCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

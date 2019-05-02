import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediasTopComponent } from './medias-top.component';

describe('MediasTopComponent', () => {
  let component: MediasTopComponent;
  let fixture: ComponentFixture<MediasTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediasTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediasTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

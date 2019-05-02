import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediasArticlesComponent } from './medias-articles.component';

describe('MediasArticlesComponent', () => {
  let component: MediasArticlesComponent;
  let fixture: ComponentFixture<MediasArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediasArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediasArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

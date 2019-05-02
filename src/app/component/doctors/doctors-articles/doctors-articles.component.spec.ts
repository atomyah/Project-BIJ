import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsArticlesComponent } from './doctors-articles.component';

describe('DoctorsArticlesComponent', () => {
  let component: DoctorsArticlesComponent;
  let fixture: ComponentFixture<DoctorsArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorsArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

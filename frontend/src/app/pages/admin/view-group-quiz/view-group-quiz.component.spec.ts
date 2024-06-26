import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGroupQuizComponent } from './view-group-quiz.component';

describe('ViewGroupQuizComponent', () => {
  let component: ViewGroupQuizComponent;
  let fixture: ComponentFixture<ViewGroupQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGroupQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGroupQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

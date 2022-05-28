import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttemptedQuizComponent } from './attempted-quiz.component';

describe('AttemptedQuizComponent', () => {
  let component: AttemptedQuizComponent;
  let fixture: ComponentFixture<AttemptedQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttemptedQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttemptedQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

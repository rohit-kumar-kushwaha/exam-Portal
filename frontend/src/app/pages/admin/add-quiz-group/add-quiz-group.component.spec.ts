import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuizGroupComponent } from './add-quiz-group.component';

describe('AddQuizGroupComponent', () => {
  let component: AddQuizGroupComponent;
  let fixture: ComponentFixture<AddQuizGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddQuizGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuizGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

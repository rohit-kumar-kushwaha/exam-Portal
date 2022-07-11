import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGroupQuizComponent } from './update-group-quiz.component';

describe('UpdateGroupQuizComponent', () => {
  let component: UpdateGroupQuizComponent;
  let fixture: ComponentFixture<UpdateGroupQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateGroupQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGroupQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

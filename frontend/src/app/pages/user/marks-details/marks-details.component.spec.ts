import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksDetailsComponent } from './marks-details.component';

describe('MarksDetailsComponent', () => {
  let component: MarksDetailsComponent;
  let fixture: ComponentFixture<MarksDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarksDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarksDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

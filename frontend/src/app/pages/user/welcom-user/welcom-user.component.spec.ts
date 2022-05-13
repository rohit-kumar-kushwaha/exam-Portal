import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomUserComponent } from './welcom-user.component';

describe('WelcomUserComponent', () => {
  let component: WelcomUserComponent;
  let fixture: ComponentFixture<WelcomUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

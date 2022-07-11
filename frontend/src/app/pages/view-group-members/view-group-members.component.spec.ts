import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGroupMembersComponent } from './view-group-members.component';

describe('ViewGroupMembersComponent', () => {
  let component: ViewGroupMembersComponent;
  let fixture: ComponentFixture<ViewGroupMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGroupMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGroupMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

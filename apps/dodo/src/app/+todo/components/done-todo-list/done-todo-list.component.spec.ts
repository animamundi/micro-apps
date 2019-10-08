import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneTodoListComponent } from './done-todo-list.component';

describe('DoneTodoListComponent', () => {
  let component: DoneTodoListComponent;
  let fixture: ComponentFixture<DoneTodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneTodoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

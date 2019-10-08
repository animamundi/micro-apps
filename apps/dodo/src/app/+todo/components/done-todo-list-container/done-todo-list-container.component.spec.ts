import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneTodoListContainerComponent } from './done-todo-list-container.component';

describe('DoneTodoListContainerComponent', () => {
  let component: DoneTodoListContainerComponent;
  let fixture: ComponentFixture<DoneTodoListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneTodoListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneTodoListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

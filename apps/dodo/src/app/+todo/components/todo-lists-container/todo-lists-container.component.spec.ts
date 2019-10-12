import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListsContainerComponent } from './todo-lists-container.component';

describe('TodoListsContainerComponent', () => {
  let component: TodoListsContainerComponent;
  let fixture: ComponentFixture<TodoListsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

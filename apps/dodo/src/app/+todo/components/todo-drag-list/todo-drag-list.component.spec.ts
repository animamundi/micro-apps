import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDragListComponent } from './todo-drag-list.component';

describe('TodoDragListComponent', () => {
  let component: TodoDragListComponent;
  let fixture: ComponentFixture<TodoDragListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoDragListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDragListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

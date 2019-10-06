import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoContainerComponent } from './add-todo-container.component';

describe('AddTodoContainerComponent', () => {
  let component: AddTodoContainerComponent;
  let fixture: ComponentFixture<AddTodoContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTodoContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

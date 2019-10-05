import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFormContainerComponent } from './todo-form-container.component';

describe('TodoFormContainerComponent', () => {
  let component: TodoFormContainerComponent;
  let fixture: ComponentFixture<TodoFormContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoFormContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

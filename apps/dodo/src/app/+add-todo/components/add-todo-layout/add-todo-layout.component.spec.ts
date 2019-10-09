import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoLayoutComponent } from './add-todo-layout.component';

describe('AddTodoLayoutComponent', () => {
  let component: AddTodoLayoutComponent;
  let fixture: ComponentFixture<AddTodoLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTodoLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

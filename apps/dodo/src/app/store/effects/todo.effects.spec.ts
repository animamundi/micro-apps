import { TestBed } from '@angular/core/testing';

import { TodoEffects } from './todo.effects';

describe('TodoEffects', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoEffects = TestBed.get(TodoEffects);
    expect(service).toBeTruthy();
  });
});

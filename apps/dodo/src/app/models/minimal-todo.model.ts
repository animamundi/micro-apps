import { Todo } from './todo.model';

export type MinimalTodo = Omit<Todo, 'id' | 'done' | 'user'>;

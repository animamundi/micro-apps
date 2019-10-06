import { Todo } from './todo.model';

export type CreateTodoPayload = Omit<Todo, 'id'>;

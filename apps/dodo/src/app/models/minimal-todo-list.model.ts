import { TodoList } from './todo-list.model';

export type MinimalTodoList = Omit<TodoList, 'id' | 'user'>;

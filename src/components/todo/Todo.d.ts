export interface todoList {
  title: string;
  todos: todoItem[];
  addTodo: (item: todoItem) => void;
  removeTodo: (item: todoItem) => void;
  toggleTodo: (item: todoItem) => void;
}

export interface ListOfTodoLists {
  [key: string]: todoList;
}

export interface todoItem {
  id: number;
  title: string;
  completed: boolean;
}

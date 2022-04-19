import { todoItem } from '../components/todo/Todo';
import { TodoList } from '../components/todo/TodoList';

const defaultTodos: todoItem[] = [
  {
    id: 1,
    title: 'Stop procrastinating',
    completed: false,
  },
  {
    id: 2,
    title: 'Learn React',
    completed: false,
  },
  {
    id: 3,
    title: 'Learn Redux',
    completed: false,
  },
];

export default function Todo() {
  return <TodoList tasks={defaultTodos} />;
}

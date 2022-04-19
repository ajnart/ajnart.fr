import { Button, Checkbox, CheckboxGroup, List, Text, ThemeIcon } from '@mantine/core';
import { useEffect, useState } from 'react';
import { MdTask } from 'react-icons/md';
import { CircleCheck, CircleDashed } from 'tabler-icons-react';
import { todoList, todoItem } from './Todo';

const MainTodoList: todoList = {
  title: 'Main Todo List',
  todos: [],
  addTodo: function (item: todoItem): void {
    this.todos.push(item);
  },
  removeTodo: function (item: todoItem): void {
    this.todos = this.todos.filter((todo) => todo !== item);
  },
  toggleTodo: function (item: todoItem): void {
    item.completed = !item.completed;
  },
};

export function TodoList(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const localTasks = JSON.parse(localStorage.getItem('tasks'));
    if (localTasks) {
      setTasks(localTasks);
    }
  }, []);

	function addItem(item: todoItem) {
		setTasks([...tasks, item]);
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}

  return (
    <>
      {tasks.map((task: todoItem, index) => (
        <Checkbox
          key={index}
          label={task.title}
          id={task.id.toString()}
          defaultChecked={task.completed}
          onClick={(e) => {
            const targetId = e.target['id'];
            const newTasks = tasks.map((t) => {
              if (t.id.toString() === targetId) {
                t.completed = !t.completed;
              }
              return t;
            });
            setTasks(newTasks);
            localStorage.setItem('tasks', JSON.stringify(newTasks));
          }}
        />
      ))}
      <Button
        onClick={() => {
          addItem({
						id: tasks.length + 1,
						title: 'New Task',
						completed: false,
					});
				}}
			>
				Add Task
			</Button>
		</>
	);
}

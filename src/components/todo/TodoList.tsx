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
  const [tasks, setTasks] = useState(() => {
    // get the todos from localstorage
    const savedTasks = localStorage.getItem('tasks');
    // if there are todos stored
    if (savedTasks) {
      // return the parsed JSON object back to a javascript object
      return JSON.parse(savedTasks);
      // otherwise
    } else if (props.tasks) {
      return props.tasks;
    } else {
      // return an empty array
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      {tasks.map((task, index) => (
        <Checkbox
          key={index}
          label={task.title}
          id={task.id}
          defaultChecked={task.done}
          onClick={(e) => {
            const targetId = e.target['id'];
            const newTasks = tasks.map((t) => {
              if (t.id === targetId) {
                t.done = !t.done;
              }
              return t;
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));

            setTasks(newTasks);
          }}
        />
      ))}
      <Button
        onClick={() => {
          localStorage.removeItem('tasks');
        }}
      >
        Clear Tasks
      </Button>
    </>
  );
}

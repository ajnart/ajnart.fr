import {
  ActionIcon,
  Box as Container,
  Button,
  Checkbox,
  CheckboxGroup,
  Group,
  List,
  Text,
  TextInput,
  ThemeIcon,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useEffect, useState } from 'react';
import { MdDelete, MdTask } from 'react-icons/md';
import { CircleCheck, CircleDashed } from 'tabler-icons-react';
import { todoList, todoItem } from './Todo';

function addItemForm(tasks, addItem) {
  // Generate a unique ID for the new item with the current timestamp
  const id = Date.now();
  const form = useForm({
    initialValues: {
      title: '',
      completed: false,
      id: id,
    },
  });

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        addItem(values);
        form.reset();
      })}
    >
      <TextInput
        required
        label="Task"
        placeholder="Clean the house"
        {...form.getInputProps('title')}
      />
      <Button type="submit" variant="outline">
        Add
      </Button>
    </form>
  );
}

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
    localStorage.setItem('tasks', JSON.stringify([...tasks, item]));
  }

  return (
    <>
      {tasks.map((task: todoItem, index) => (
        <Group key={index}>
          <Container style={{width: 400}}>
            <Checkbox
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
          </Container>
          {/* Action for delete button */}
          <ActionIcon>
            <ThemeIcon
              onClick={() => {
                const newTasks = tasks.filter((t) => t.id !== task.id);
                setTasks(newTasks);
                localStorage.setItem('tasks', JSON.stringify(newTasks));
              }}
              size="sm"
              variant="light"
            >
              <MdDelete />
            </ThemeIcon>
          </ActionIcon>
        </Group>
      ))}
      {addItemForm(tasks, addItem)}
    </>
  );
}

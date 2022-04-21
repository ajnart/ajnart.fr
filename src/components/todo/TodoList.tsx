import {
  ActionIcon,
  Box as Container,
  Button,
  Checkbox,
  CheckboxGroup,
  Group,
  List,
  Modal,
  Space,
  Text,
  TextInput,
  ThemeIcon,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useEffect, useState } from 'react';
import { MdDelete, MdTask } from 'react-icons/md';
import { CircleCheck, CircleDashed } from 'tabler-icons-react';
import { todoList, todoItem } from './Todo';

function useItemForm(tasks, addItem) {
  const [opened, setOpened] = useState(false);
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
    <>
      <Modal opened={opened} withCloseButton={false} onClose={() => setOpened(false)}>
        <form
          onSubmit={form.onSubmit((values) => {
            addItem(values);
            setOpened(false);
            form.reset();
          })}
        >
          <Group grow direction="column">
            <TextInput
              autoFocus
              required
              label="Task"
              placeholder="Clean the house"
              {...form.getInputProps('title')}
            />
            <Button type="submit" variant="outline">
              Add
            </Button>
          </Group>
        </form>
      </Modal>
      <Button leftIcon={<MdTask />} onClick={() => setOpened(true)}>
        Add new task
      </Button>
    </>
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
    <Group position="apart" align={'stretch'} direction="column">
      {tasks.map((task: todoItem, index) => (
        <Group position="apart" key={index}>
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
      {useItemForm(tasks, addItem)}
    </Group>
  );
}

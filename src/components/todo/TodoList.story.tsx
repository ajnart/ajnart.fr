// Button.stories.js|jsx|ts|tsx
import { TodoList } from './TodoList';
export default {
  title: 'TodoList',
  argTypes: {
    tasks: {
      control: { type: 'array' },
      defaultValue: [
				{
					id: '1',
					title: 'Stop procrastinating',
					done: false,
				},
				{
					id: '2',
					title: 'Learn React',
					done: false,
				},
				{
					id: '3',
					title: 'Learn Redux',
					done: false,
				},
				{
					id: '4',
					title: 'Learn Typescript',
					done: false,
				}
			],
    },
  },
};

export const Default = (args) => <TodoList {...args} />;

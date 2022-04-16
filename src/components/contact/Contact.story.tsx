// Button.stories.js|jsx|ts|tsx

import ContactForm from './Contact';
export default {
  title: 'Contact form',
  argTypes: {
    opened: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
};

export const Default = (args) => <ContactForm {...args} />;

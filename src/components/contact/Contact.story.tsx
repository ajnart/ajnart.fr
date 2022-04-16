// Button.stories.js|jsx|ts|tsx

import ContactForm from './Contact';
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Contact form',
  argTypes: {
    opened: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
};

export const Default = (args) => <ContactForm {...args} />;

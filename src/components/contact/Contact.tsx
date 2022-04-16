import React, { useState } from 'react';
import {
  createStyles,
  Text,
  Button,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Group,
  ActionIcon,
  Modal,
  Image,
  Tooltip,
  Anchor,
} from '@mantine/core';
import { Check, Cross, Mail } from 'tabler-icons-react';
import { ContactIconsList } from './ContactIcons';
import { motion } from 'framer-motion';
import { useForm } from '@mantine/form';
import { showNotification, updateNotification } from '@mantine/notifications';
import axios from 'axios';

export default function ContactForm(props) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        size={1000}
        radius="lg"
        opened={opened}
        padding={0}
        withCloseButton={false}
        onClose={() => setOpened(false)}
      >
        <ContactUs close={setOpened} />
      </Modal>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <ActionIcon
          variant="filled"
          radius="xl"
          size={'xl'}
          color={'blue'}
          style={props.style}
          onClick={() => setOpened(true)}
        >
          <Tooltip label="contact me">
            <Mail />
          </Tooltip>
        </ActionIcon>
      </motion.div>
    </>
  );
}

export function ContactUs(props) {
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      message: '',
    },
    validate: {
      email: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        <div>
          <Title className={classes.title}>Contact me</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Leave your email and we will get back to you within 1-3 days
          </Text>
          <ContactIconsList variant="white" />
        </div>
        <form
          onSubmit={form.onSubmit((values) => {
            showNotification({
              id: 'load-data',
              loading: true,
              title: 'Sending your message',
              message: 'We are sending your message, please wait...',
              autoClose: false,
              disallowClose: true,
            });

            setTimeout(() => {
              axios
                .post('https://formspree.io/f/xqknyydj', values)
                .then(() => {
                  updateNotification({
                    id: 'load-data',
                    color: 'teal',
                    title: 'Message sent!',
                    message:
                      'Your message has been sent, I will get back to you as soon as possible',
                    icon: <Check />,
                    autoClose: 2000,
                  });
                  props.close(false);
                })
                .catch(() => {
                  updateNotification({
                    id: 'load-data',
                    color: 'red',
                    title: 'Error',
                    message: 'There was an error sending your message, please try again later',
                    icon: <Cross />,
                    autoClose: 2000,
                  });
                  props.close(false);
                });
            }, 800);

            console.log(values);
          })}
          className={classes.form}
        >
          <TextInput
            id="email"
            label="Email"
            placeholder="your@email.com"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
            {...form.getInputProps('email')}
          />
          <TextInput
            label="Name"
            id="name"
            placeholder="John Doe"
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
            {...form.getInputProps('name')}
          />
          <Textarea
            required
            id="message"
            label="Your message"
            placeholder="Hello, I am Nigerian prince who is looking to give away my fortune. I have been blessed with a large sum of money and I want to share it with someone who is in need. If you are interested in receiving my gift, please reply to this email and I will send you more information. "
            minRows={9}
            mt="md"
            {...form.getInputProps('message')}
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Group direction="row" position="apart" mt="md">
            <Text>
              Made with
              <Anchor target="_blank" href="https://formspree.io/">
                <Image width={100} src="https://formspree.io/static/img/formspree-new.svg" />
              </Anchor>
            </Text>
            <Button type="submit" className={classes.control}>
              Send message
            </Button>
          </Group>
        </form>
      </SimpleGrid>
    </div>
  );
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    boxSizing: 'border-box',
    backgroundImage: `linear-gradient(-60deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
      theme.colors[theme.primaryColor][7]
    } 100%)`,
    borderRadius: theme.radius.md,
    padding: theme.spacing.xl * 2.5,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: theme.spacing.xl * 1.5,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: 300,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },
  },

  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },

  social: {
    color: theme.white,

    '&:hover': {
      color: theme.colors[theme.primaryColor][1],
    },
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    '&::placeholder': {
      color: theme.colors.gray[5],
    },
  },

  inputLabel: {
    color: theme.black,
  },

  control: {
    backgroundColor: theme.colors[theme.primaryColor][6],
  },
}));

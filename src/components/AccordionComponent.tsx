import {
  Accordion,
  Group,
  ThemeIcon,
  Title,
  Text,
  Timeline,
  Badge,
  Box,
  Avatar,
  Anchor,
} from '@mantine/core';
import { NextLink } from '@mantine/next';
import { useState } from 'react';
import { MdOutlineCode, MdWorkOutline } from 'react-icons/md';
import ReactMarkdown from 'react-markdown';
import { Jobs, ProgrammingSkills } from '../data/constants';
import { motion } from 'framer-motion';

const variants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

export function ExperiencesAccordion() {
  const [isOpen, setIsOpen] = useState([false, false]);
  return (
    <Accordion multiple>
      <Accordion.Item
        onClick={() => setIsOpen([!isOpen[0], isOpen[1]])}
        iconPosition="right"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
          borderRadius: theme.radius.md,
          boxShadow: theme.shadows.xl,
          marginBottom: theme.spacing.sm,
        })}
        label={
          <Group>
            <motion.div
              transition={{ duration: 0.2 }}
              animate={isOpen[0] ? 'open' : 'closed'}
              variants={variants}
            >
              <ThemeIcon radius="xl" size="xl" variant="light">
                <MdOutlineCode size={25} />
              </ThemeIcon>
            </motion.div>
            <Title order={2}>Programming skills</Title>
          </Group>
        }
      >
        <ProgrammingTab />
      </Accordion.Item>

      <Accordion.Item
        onClick={() => setIsOpen([isOpen[0], !isOpen[1]])}
        iconPosition="right"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
          borderRadius: theme.radius.md,
          boxShadow: theme.shadows.xl,
        })}
        label={
          <Group>
            <motion.div
              transition={{ duration: 0.2 }}
              animate={isOpen[1] ? 'open' : 'closed'}
              variants={variants}
            >
              <ThemeIcon radius="xl" size="xl" variant="light">
                <MdWorkOutline size={25} />
              </ThemeIcon>
            </motion.div>
            <Title order={2}>Work experiences</Title>
          </Group>
        }
      >
        <WorkTab />
      </Accordion.Item>
    </Accordion>
  );
}

export const WorkTab = () => (
  <Group grow mx={15} direction="column">
    {Jobs.map((job, index) => (
      <Box key={index}>
        <Group style={{ justifyContent: 'space-between' }}>
          <Anchor target="_blank" href={job.link} component={NextLink}>
            <Group>
              <Avatar src={job.image} alt={job.title} size="sm" radius="md" />
              <Title order={4}>{job.title}</Title>
            </Group>
          </Anchor>
          <Text size="xs" color="dimmed">
            {job.date}
          </Text>
        </Group>
        <ReactMarkdown>{job.description}</ReactMarkdown>
        {job.tags &&
          job.tags.map((tag, index) => (
            <Badge size="sm" mx={3} radius="sm" key={tag}>
              {tag}
            </Badge>
          ))}
      </Box>
    ))}
  </Group>
);

export const ProgrammingTab = () => (
  <Timeline m={15}>
    {ProgrammingSkills.map((language, index) => (
      <Timeline.Item
        key={index}
        lineVariant="dotted"
        bullet={
          <ThemeIcon size={30} radius="xl">
            <language.icon size={20} />
          </ThemeIcon>
        }
      >
        <Title order={4}>{language.name}</Title>
        <ReactMarkdown>{language.description}</ReactMarkdown>
      </Timeline.Item>
    ))}
  </Timeline>
);

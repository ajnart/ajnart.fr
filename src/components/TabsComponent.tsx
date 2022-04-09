import {
  Tabs,
  ThemeIcon,
  Text,
  Timeline,
  Image,
  createStyles,
  TabsProps,
  Anchor,
  Accordion,
  Group,
  Title,
} from '@mantine/core';
import ReactMarkdown from 'react-markdown';
import { MdOutlineCode, MdOutlineScience, MdOutlineWorkOutline } from 'react-icons/md';
import * as React from 'react';
import ProjectsCaroussel from './WorkCaroussel';
import { Jobs } from '../data/constants';

function StyledTabs(props: TabsProps) {
  return (
    <Tabs
      variant="unstyled"
      styles={(theme) => ({
        tabControl: {
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
          border: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[4]
          }`,
          fontSize: theme.fontSizes.md,
          padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,

          '&:not(:first-of-type)': {
            borderLeft: 0,
          },

          '&:first-of-type': {
            borderTopLeftRadius: theme.radius.md,
            borderBottomLeftRadius: theme.radius.md,
          },

          '&:last-of-type': {
            borderTopRightRadius: theme.radius.md,
            borderBottomRightRadius: theme.radius.md,
          },
        },

        tabActive: {
          backgroundColor: theme.colors.blue[7],
          borderColor: theme.colors.blue[7],
          color: theme.white,
        },
      })}
      {...props}
    />
  );
}

function WorkTab() {
  return (
    <Timeline m={15} active={Jobs.length} bulletSize={24} lineWidth={2}>
      {Jobs.map((job, index) => (
        <Timeline.Item
          key={index}
          bullet={
            <Image
              alt={job.title}
              style={{ filter: 'contrast(200%)' }}
              color="blue"
              src={job.image}
            />
          }
          bulletSize={24}
          title={
            <Anchor href={job.link} target="_blank">
              {job.title}
            </Anchor>
          }
        >
          <Text size="sm">{job.description}</Text>
          <Text color="dimmed" size="xs" mt={4}>
            {job.date}
          </Text>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}

export function TabsComponent() {
  return (
    <StyledTabs mb={15} grow={true} tabPadding="lg">
      <Tabs.Tab label="Work" icon={<MdOutlineWorkOutline size={14} />}>
        <WorkTab />
      </Tabs.Tab>
      <Tabs.Tab label="Projects" icon={<MdOutlineScience size={14} />}>
        <ProjectsCaroussel />
      </Tabs.Tab>
    </StyledTabs>
  );
}

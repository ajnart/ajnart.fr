import {
  Tabs,
  ThemeIcon,
  Text,
  Avatar,
  Timeline,
  Image,
  createStyles,
  TabsProps,
} from '@mantine/core';
import { Sun, Video } from 'tabler-icons-react';
import {
  MdOutlineCode,
  MdOutlineSchool,
  MdOutlineScience,
  MdOutlineWorkOutline,
} from 'react-icons/md';
import * as React from 'react';
import WorkCaroussel from './WorkCaroussel';

function StyledTabs(props: TabsProps) {
  return (
    <Tabs
      variant="unstyled"
      styles={(theme) => ({
        tabControl: {
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
          border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[4]
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

const useStyles = createStyles((theme) => ({
  work: {
    [theme.fn.smallerThan('md')]: {
      width: '100vw',
    },
    [theme.fn.largerThan('md')]: {
      width: 600,
    },
  },
}));

function Work() {
  return (
    <div style={{ padding: 15 }}>
      <Timeline active={3} bulletSize={24} lineWidth={2}>
        <Timeline.Item
          bullet={
            <Image
              alt="mangrove image"
              style={{ filter: 'contrast(200%)' }}
              color="blue"
              src="/images/mangrove.png"
            />
          }
          bulletSize={24}
          title="Mangrove.ai"
        >
          <Text color="dimmed" size="sm">
            Default bullet without anything
          </Text>
          <Text size="xs" mt={4}>
            2 hours ago
          </Text>
        </Timeline.Item>
        <Timeline.Item
          bullet={
            <Image alt="lumi logo" style={{ filter: 'contrast(100%)' }} src="/images/lumi.png" />
          }
          bulletSize={24}
          title="LumiTHD"
        >
          <Text color="dimmed" size="sm">
            Default bullet without anything
          </Text>
          <Text size="xs" mt={4}>
            2 hours ago
          </Text>
        </Timeline.Item>
        <Timeline.Item
          bullet={
            <Image
              alt="mangrove logo"
              style={{ filter: 'grayscale(100%)' }}
              src="/images/mangrove.png"
            />
          }
          bulletSize={24}
          title="Mangrove.ai"
        >
          <Text color="dimmed" size="sm">
            Default bullet without anything
          </Text>
          <Text size="xs" mt={4}>
            2 hours ago
          </Text>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}

export function TabsComponent() {
  const { classes, cx } = useStyles();
  return (
    <StyledTabs
      mb={15}
      grow={true}
      className={cx(classes.work)}
      sx={{
        width: '100vw',
        maxHeight: 300,
      }}
      tabPadding="lg"
    >
      <Tabs.Tab label="Work" icon={<MdOutlineWorkOutline size={14} />}>
        <Work />
      </Tabs.Tab>
      <Tabs.Tab label="Projects" icon={<MdOutlineScience size={14} />}>
        <WorkCaroussel />
      </Tabs.Tab>
    </StyledTabs>
  );
}

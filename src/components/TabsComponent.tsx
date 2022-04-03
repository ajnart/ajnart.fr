import { Tabs, ThemeIcon, Text, Avatar, Timeline, Image, createStyles } from '@mantine/core';
import { Sun, Video } from 'tabler-icons-react';
import {
  MdOutlineCode,
  MdOutlineSchool,
  MdOutlineScience,
  MdOutlineWorkOutline,
} from 'react-icons/md';
import * as React from 'react';
import WorkCaroussel from './WorkCaroussel';

const useStyles = createStyles((theme) => ({
  work: {
    [theme.fn.smallerThan('md')]: {
      width: '100vw',
    },
    [theme.fn.largerThan('md')]: {
      width: 600,
    }
  },
}));

function Work() {
  return (
    <div style={{ padding: 15 }}>
      <Timeline active={3} bulletSize={24} lineWidth={2}>
        <Timeline.Item
          bullet={
            <Image style={{ filter: 'contrast(200%)' }} color="blue" src="/images/mangrove.png" />
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
          bullet={<Image style={{ filter: 'contrast(100%)' }} src="/images/lumi.png" />}
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
          bullet={<Image style={{ filter: 'grayscale(100%)' }} src="/images/mangrove.png" />}
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
    <Tabs mb={15}
      grow={false}
      className={cx(classes.work)}
      sx={{
        width: '100vw',
        maxHeight: 300,
      }}
      tabPadding="lg" mt={15}>
      <Tabs.Tab label="Work" icon={<MdOutlineWorkOutline size={14} />}>
        <Work />
      </Tabs.Tab>
      <Tabs.Tab label="Projects" icon={<MdOutlineScience size={14} />}>
        <WorkCaroussel />
      </Tabs.Tab>
    </Tabs>
  );
}


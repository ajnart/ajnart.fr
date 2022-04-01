import { Tabs, ThemeIcon, Text, Avatar, Timeline, Image } from '@mantine/core';
import { Sun, Video } from 'tabler-icons-react';
import {
  MdOutlineCode,
  MdOutlineSchool,
  MdOutlineScience,
  MdOutlineWorkOutline,
} from 'react-icons/md';
import * as React from 'react';
import WorkCaroussel from './WorkCaroussel';

function Work() {
  return (
    <div style={{ maxWidth: 320, margin: 'auto' }}>
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
  return (
    <Tabs tabPadding="lg" mt={15}>
      <Tabs.Tab label="Work" icon={<MdOutlineWorkOutline size={14} />}>
        <Work />
      </Tabs.Tab>
      <Tabs.Tab label="Projects" icon={<MdOutlineScience size={14} />}>
        <WorkCaroussel />
      </Tabs.Tab>
      <Tabs.Tab label="Education" icon={<MdOutlineSchool size={14} />}>
        Settings tab content
      </Tabs.Tab>
      <Tabs.Tab label="Code" icon={<MdOutlineCode size={14} />}>
        Settings tab content
      </Tabs.Tab>
    </Tabs>
  );
}

import { Title, Group, Center, Text } from '@mantine/core';
import * as React from 'react';
import { Logo } from '../components/Logo';
import { TabsComponent } from '../components/TabsComponent';

export default function HomePage() {
  return (
    <Center>
      <Group position="center" direction="column" style={{ maxWidth: 800 }}>
        <Title align="center" sx={{ fontSize: 50, fontWeight: 900, letterSpacing: -2 }}>
          <Logo style={{ fontSize: 50, fontWeight: 900 }} />
          🚧Le site est en construction, revenez plus tard
        </Title>
        <Text sx={{ fontSize: 30 }}>(Et vous moquez pas)</Text>
        <Center>
          <TabsComponent />
        </Center>
      </Group>
    </Center>
  );
}

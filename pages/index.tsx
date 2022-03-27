import { Title, Group, Center, Text } from '@mantine/core';
import * as React from 'react';
import { Logo } from '../components/Logo';
import { TabsComponent } from '../components/TabsComponent';

export default function HomePage() {
  return (
    <>
      <Group position="center" direction="column" spacing="xl">
        <Title align="center" sx={{ fontSize: 50, fontWeight: 900, letterSpacing: -2 }} mt={100}>
          <Logo style={{ fontSize: 80, fontWeight: 900 }} />
          🚧Le site est en construction, revenez plus tard
        </Title>
        <Text sx={{ fontSize: 30 }}>(Et vous moquez pas)</Text>
        <Center>
          <TabsComponent />
        </Center>
      </Group>
    </>
  );
}

import { Title, Group, Center } from '@mantine/core';
import * as React from 'react';
import { Logo } from '../components/Logo';
import { TabsComponent } from '../components/TabsComponent';

export default function HomePage() {
  return (
    <>
      <Group position="center" direction="column" spacing="xl">
        <Title align="center" sx={{ fontSize: 80, fontWeight: 900, letterSpacing: -2 }} mt={100}>
          Welcome to
          <Logo style={{ fontSize: 80, fontWeight: 900, letterSpacing: -2 }} />
        </Title>
        <Center>
          <TabsComponent />
        </Center>
      </Group>
    </>
  );
}

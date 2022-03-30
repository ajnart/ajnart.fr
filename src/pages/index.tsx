import { Title, Group, Center, Text, Button } from '@mantine/core';
import * as React from 'react';
import { BrandGithub } from 'tabler-icons-react';
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
        <Button
          component='a'
          leftIcon={<BrandGithub />}
          href="https://github.com/ajnart/ajnart.fr/"
          target="_blank"
          style={{
            fontSize: 20,
            // Rounded corners
            borderRadius: 90,
            // Black background
            backgroundColor: '#000',
            marginTop: 20,
          }}
        >Le code</Button>
        <Center>
          <TabsComponent />
        </Center>
      </Group>
    </Center>
  );
}

import { Title, Group, Center, Text, Button } from '@mantine/core';
import axios from 'axios';
import * as React from 'react';
import { BrandGithub } from 'tabler-icons-react';
import LatestCommit from '../components/LatestCommit';
import { Logo } from '../components/Logo';
import { TabsComponent } from '../components/TabsComponent';

export async function getStaticProps() {
  const commit = await axios
    .get(`https://api.github.com/repos/ajnart/ajnart.fr/commits/master`)
    .then((res) => res.data);

  return { props: { commit } };
}

export default function HomePage({ commit }) {
  return (
    <Center>
      <Group position="center" direction="column" style={{ maxWidth: 800 }}>
        <Title align="center" sx={{ fontSize: 50, fontWeight: 900, letterSpacing: -2 }}>
          <Logo style={{ fontSize: 50, fontWeight: 900 }} />
          🚧Le site est en construction, revenez plus tard
        </Title>
        <Button
          component="a"
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
        >
          Le code
        </Button>
        <LatestCommit commit={commit} />
        <Center>
          <TabsComponent />
        </Center>
      </Group>
    </Center>
  );
}

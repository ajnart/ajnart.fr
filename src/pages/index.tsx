import { Title, Group, Center, Text, Button, Divider } from '@mantine/core';
import axios from 'axios';
import * as React from 'react';
import LatestCommit from '../components/LatestCommit';
import { TabsComponent } from '../components/TabsComponent';
import { AiFillGithub } from 'react-icons/ai';

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
          🚧 This website is still under construction 🚧
        </Title>

        <Group mt={50} direction="column">
          <Text size="lg" weight={400}>
            <Group spacing={'xs'}>
              <AiFillGithub size={25} />
              Latest commit to the repository
            </Group>
          </Text>
          <LatestCommit commit={commit} />
        </Group>
        <Center>
          <TabsComponent />
        </Center>
      </Group>
    </Center>
  );
}

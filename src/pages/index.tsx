import { Title, Group, Center, Text, Button, Divider, Box } from '@mantine/core';
import axios from 'axios';
import * as React from 'react';
import LatestCommit from '../components/LatestCommit';
import { TabsComponent } from '../components/TabsComponent';
import { AiFillGithub } from 'react-icons/ai';
import { links, WhoAmI } from '../data/constants';
import InfoCard from '../components/InfoCard';

export async function getStaticProps() {
  const commit = await axios
    .get(`https://api.github.com/repos/${links.GithubName}/${links.GithubRepo}/commits/master`)
    .then((res) => res.data);

  return { props: { commit } };
}

export default function HomePage({ commit }) {
  return (
    <Center>
      <Group position="center" direction="column" spacing={'xl'}>
        <Title align="center" sx={{ fontSize: 30, fontWeight: 900 }}>
          🚧 This website is still under construction 🚧
        </Title>
        <Box style={{ maxWidth: 600 }}>
          <InfoCard {...WhoAmI} />

        </Box>
        <Text size="lg" weight={400}>
          <AiFillGithub size={25} />
          Latest commit to the repository
        </Text>
        <LatestCommit commit={commit} />
        <Center>
          <TabsComponent />
        </Center>
      </Group >
    </Center >
  );
}

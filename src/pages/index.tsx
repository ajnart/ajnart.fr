import { Title, Group, Center, Text, Box } from '@mantine/core';
import axios from 'axios';
import * as React from 'react';
import LatestCommit from '../components/LatestCommit';
import { ProgrammingTab, TabsComponent } from '../components/TabsComponent';
import { AiFillGithub } from 'react-icons/ai';
import { links, WhoAmI } from '../data/constants';
import RichTextEditor from '@mantine/rte';
import ProjectsCaroussel from '../components/WorkCaroussel';
import { MdOutlineCode, MdOutlineWorkOutline } from 'react-icons/md';
import { VscProject } from 'react-icons/vsc';
import InfoCard from '../components/InfoCard';

export async function getStaticProps() {
  const commit = await axios
    .get(`https://api.github.com/repos/${links.GithubName}/${links.GithubRepo}/commits/master`)
    .then((res) => res.data);

  return { props: { commit } };
}

export default function HomePage({ commit }) {
  return (
    <Group>
      <Title order={1} align="center">
        🚧 This website is still under construction 🚧
      </Title>
      <LatestCommit commit={commit} />
      <InfoCard {...WhoAmI} />
      <Group direction="row" spacing={'xl'}>
        <Group>
          <Group>
            <MdOutlineCode size={35} />
            <Title order={2}>Programming</Title>
          </Group>
          <ProgrammingTab />
        </Group>
        <Group>
          <Group>
            <MdOutlineWorkOutline size={35} />
            <Title order={2}>Experiences</Title>
          </Group>
          <ProgrammingTab />
        </Group>
      </Group>
      <Group>
        <VscProject size={35} />
        <Title order={2}>Projects</Title>
      </Group>
      <ProjectsCaroussel />
    </Group>
  );
}

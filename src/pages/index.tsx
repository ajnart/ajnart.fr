import { Title, Group } from '@mantine/core';
import axios from 'axios';
import * as React from 'react';
import LatestCommit from '../components/LatestCommit';
import { links, WhoAmI } from '../data/constants';
import ProjectsCaroussel from '../components/WorkCaroussel';
import { VscProject } from 'react-icons/vsc';
import InfoCard from '../components/InfoCard';
import { useGlobalStyles } from '../styles/styles';
import { ExperiencesAccordion } from '../components/AccordionComponent';

export async function getStaticProps() {
  const commit = await axios
    .get(`https://api.github.com/repos/${links.GithubName}/${links.GithubRepo}/commits/master`)
    .then((res) => res.data);

  return { props: { commit } };
}

export default function HomePage({ commit }) {
  const { classes } = useGlobalStyles();
  return (
    <Group direction="column" grow spacing={'xl'}>
      <Title order={1} align="center">
        🚧 This website is still under construction 🚧
      </Title>
      <LatestCommit commit={commit} />
      <InfoCard {...WhoAmI} />
      <ExperiencesAccordion />
      <Group>
        <VscProject size={35} />
        <Title order={2}>Projects</Title>
      </Group>
      <ProjectsCaroussel />
    </Group>
  );
}

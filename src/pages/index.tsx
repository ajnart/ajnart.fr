import { Title, Group, Center, Text, Box, Accordion, ThemeIcon, Container } from '@mantine/core';
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
import { Palette } from 'tabler-icons-react';

export async function getStaticProps() {
  const commit = await axios
    .get(`https://api.github.com/repos/${links.GithubName}/${links.GithubRepo}/commits/master`)
    .then((res) => res.data);

  return { props: { commit } };
}

export default function HomePage({ commit }) {
  return (
    <Group direction="column" grow spacing={'xl'}>
      <Title order={1} align="center">
        🚧 This website is still under construction 🚧
      </Title>
      <LatestCommit commit={commit} />
      <InfoCard {...WhoAmI} />
      <Accordion>
        <Accordion.Item
          iconPosition="right"
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
            padding: theme.spacing.md,
            borderRadius: theme.radius.md,
            boxShadow: theme.shadows.md,
          })}
          label={
            <Group>
              <ThemeIcon mr={5} radius="xl" size={'xl'} variant="light">
                <MdOutlineCode size={25} />
              </ThemeIcon>
              <Title order={2}>Programming skills</Title>
            </Group>
          }
        >
          <ProgrammingTab />
        </Accordion.Item>

        {/* ...other <Accordion.Item /> */}
      </Accordion>
      <Group>
        <VscProject size={35} />
        <Title order={2}>Projects</Title>
      </Group>
      <ProjectsCaroussel />
    </Group>
  );
}

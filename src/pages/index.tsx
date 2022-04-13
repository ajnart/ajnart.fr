import { Title, Group, Modal, Text, Button } from '@mantine/core';
import axios from 'axios';
import * as React from 'react';
import { VscProject } from 'react-icons/vsc';
import LatestCommit from '../components/LatestCommit';
import { links, WhoAmI } from '../data/constants';
import ProjectsCaroussel from '../components/WorkCaroussel';
import InfoCard from '../components/InfoCard';
import { ExperiencesAccordion } from '../components/AccordionComponent';
import { Mail } from 'tabler-icons-react';

export async function getStaticProps() {
  const commit = await axios
    .get(`https://api.github.com/repos/${links.GithubName}/${links.GithubRepo}/commits/master`)
    .then((res) => res.data);

  return { props: { commit } };
}

export default function HomePage({ commit }) {
  const [modalOpen, setModalOpen] = React.useState(true);
  return (
    <Group direction="column" grow spacing="xl">
      <Modal
        size={'lg'}
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        title={<Title order={3}>🚧 This website is still under construction 🚧</Title>}
      >
        <Text size="xl">
          There will be bugs, sorry about that. You can still rely on the information being
          presented.
        </Text>
        <Button
          mt="lg"
          component="a"
          variant="outline"
          href="mailto:thomascamlong@gmail.com"
          leftIcon={<Mail />}
        >
          Contact me
        </Button>
      </Modal>
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

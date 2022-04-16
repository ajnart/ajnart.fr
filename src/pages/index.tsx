import { Title, Group, Modal, Text } from '@mantine/core';
import axios from 'axios';
import * as React from 'react';
import { VscProject } from 'react-icons/vsc';
import LatestCommit from '../components/LatestCommit';
import { links, WhoAmI } from '../data/constants';
import ProjectsCaroussel from '../components/WorkCaroussel';
import InfoCard from '../components/InfoCard';
import { ExperiencesAccordion } from '../components/AccordionComponent';
import { getCookie, setCookies } from 'cookies-next';
import { motion } from 'framer-motion';
import ContactForm from '../components/contact/Contact';

export async function getStaticProps() {
  const commit = await axios
    .get(`https://api.github.com/repos/${links.GithubName}/${links.GithubRepo}/commits/master`)
    .then((res) => res.data);

  return { props: { commit } };
}

export default function HomePage({ commit }) {
  const [modalOpen, setModalOpen] = React.useState(getCookie('modalOpen') ? false : true);
  const firstVisitModal = (
    <Modal
      size={'lg'}
      opened={modalOpen}
      onClose={() => {
        setModalOpen(false);
        setCookies('modalOpen', 'true');
      }}
      title={<Title order={3}>🚧 This website is still under construction 🚧</Title>}
    >
      <Text size="xl">
        There will be bugs, sorry about that. You can still rely on the information being presented.
      </Text>
      <Group position="right">
        <Text>Contact me</Text>
        <ContactForm />
      </Group>
    </Modal>
  );

  return (
    <>
      <ContactForm
        style={{
          zIndex: 50,
          position: 'fixed',
          bottom: 15,
          right: 15,
        }}
      />
      {firstVisitModal}
      <Group direction="column" grow spacing="xl">
        <InfoCard {...WhoAmI} />
        <ExperiencesAccordion />
        <Group>
          <VscProject size={35} />
          <Title order={2}>Projects</Title>
        </Group>
        <ProjectsCaroussel />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
        >
          <LatestCommit commit={commit} />
        </motion.div>
      </Group>
    </>
  );
}

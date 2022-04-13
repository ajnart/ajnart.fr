import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ActionIcon, createStyles, Grid, Group, Text, Title, Paper, Tooltip } from '@mantine/core';
import { ProgrammingSkills } from '../data/constants';
import { ArrowBack } from 'tabler-icons-react';
import ReactMarkdown from 'react-markdown';

const useStyles = createStyles((theme) => ({
  card: {
    borderColor: theme.colors.blue[5],
    position: 'relative',
    overflow: 'hidden',
    transition: 'transform 150ms ease, box-shadow 100ms ease',
    padding: theme.spacing.xl,
    paddingLeft: theme.spacing.xl * 2,

    '&:hover': {
      transform: 'scale(0.99)',
    },

    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: 4,
      backgroundColor: theme.colors.blue[5],
    },
  },
}));

const wrapperVariants = {
  initial: {
    clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
    transition: { duration: 0.4 },
  },
  animate: {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    transition: { duration: 0.4, staggerChildren: 0.1 },
  },
  exit: {
    clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
    transition: { duration: 0.4 },
  },
};
const squareVariants = {
  initial: {
    opacity: 0,
    scale: 0.3,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
};
const AnimatedProgrammingExperience = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const { classes } = useStyles();
  return (
    <div>
      <AnimatePresence exitBeforeEnter initial={false}>
        {selectedSkill ? (
          <motion.div
            key="card"
            variants={wrapperVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Paper withBorder radius="md" className={classes.card}>
              <ActionIcon
                style={{
                  position: 'absolute',
                  top: 10,
                  right: 10,
                }}
                size="xl"
                radius="md"
                color={'blue'}
                onClick={() => setSelectedSkill(null)}
              >
                <ArrowBack size={28} />
              </ActionIcon>
              <Group>
                <selectedSkill.icon size={'3rem'} />
                <Title order={2}>{selectedSkill.name}</Title>
              </Group>
              <Text size="lg" mt="sm">
                <ReactMarkdown>{selectedSkill.description}</ReactMarkdown>
              </Text>
            </Paper>
          </motion.div>
        ) : (
          <motion.div
            key="squares"
            variants={wrapperVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Grid p={'md'} gutter={'xl'}>
              {ProgrammingSkills.map((skill, i) => (
                <Grid.Col span={4} xs={3} sm={2} key={i}>
                  <Tooltip label={skill.name} withArrow>
                    <motion.div
                      key={i}
                      onClick={() => setSelectedSkill(skill)}
                      variants={squareVariants}
                      transition={{ duration: 0.2, type: 'spring' }}
                    >
                      {/* Box with a dark or white theme adapted background color and rounded corner */}
                      <ActionIcon variant="light" color={'blue'} radius="lg" size={80}>
                        <skill.icon size={'50%'} />
                      </ActionIcon>
                    </motion.div>
                  </Tooltip>
                </Grid.Col>
              ))}
            </Grid>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedProgrammingExperience;

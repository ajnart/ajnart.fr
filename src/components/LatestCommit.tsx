import { Anchor, Avatar, Box, Group, Text, Title } from '@mantine/core';
import dayjs from 'dayjs';
import React from 'react';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Commit } from '../data/commitClass';
import { useGlobalStyles } from '../styles/styles';

export default function LatestCommit(props) {
  dayjs.extend(relativeTime);
  const { classes } = useGlobalStyles();
  const commitData: Commit = props.commit;
  return (
    <Box className={classes.boxStyled}>
      <Group direction="column" style={{ padding: 10 }}>
        <Group spacing={0} style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Anchor target="_blank" href={commitData.html_url}>
            <Title order={3}>{commitData.commit.message}</Title>
          </Anchor>
        </Group>
        <Group spacing={0}>
          <Avatar
            alt="it's me"
            radius="xl"
            style={{ marginRight: 10 }}
            src={commitData.author.avatar_url}
          />
          <Anchor target="_blank" href={`https://github.com/${commitData.author.login}`}>
            <Text style={{ fontWeight: 500 }}>{commitData.author.login}</Text>
          </Anchor>
          {/* Align the commit message to the right */}
          <Text color="dimmed">
            &nbsp;committed {dayjs(commitData.commit.author.date).fromNow()}
          </Text>
          <Group ml="md" spacing="xs">
            <Text weight={600} style={{ color: 'green' }}>
              +{commitData.stats.additions}
            </Text>
            <Text weight={600} style={{ color: 'red' }}>
              -{commitData.stats.deletions}{' '}
            </Text>
          </Group>
        </Group>
      </Group>
    </Box>
  );
}

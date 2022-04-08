import { Anchor, Avatar, Box, Card, Group, Text, Title } from '@mantine/core';
import { Commit } from '../data/commitClass';
import dayjs from 'dayjs';
import React from 'react';
import relativeTime from 'dayjs/plugin/relativeTime';

export default function LatestCommit(props) {
  dayjs.extend(relativeTime);
  const commitData: Commit = props.commit;
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
        padding: theme.spacing.md,
        borderRadius: theme.radius.md,
        boxShadow: theme.shadows.md,
      })}
    >
      <Group direction="column" style={{ padding: 10 }}>
        <Group spacing={0} style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Anchor target="_blank" href={commitData.html_url}>
            <Title order={3}>{commitData.commit.message}</Title>
          </Anchor>
        </Group>
        <Group spacing={0}>
          <Avatar
            alt="it's me"
            radius={'xl'}
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
          <Group ml={'md'} spacing={'xs'}>
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

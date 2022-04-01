import { Anchor, Avatar, Card, Group, Text } from '@mantine/core';
import React from 'react';
import { Commit } from '../data/commitClass';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

export default function LatestCommit(props) {
  dayjs.extend(relativeTime);
  const commitData: Commit = props.commit;
  return (
    <Card
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        width: 400,
      })}
      radius={'md'}
      withBorder={true}
    >
      <Group direction="column" style={{ padding: 10 }}>
        <Anchor target="_blank" href={commitData.html_url}>
          <Text weight={600} size="lg">
            {commitData.commit.message}
          </Text>
        </Anchor>
        <Group spacing={0} style={{ position: 'absolute', top: 0, right: 0, margin: 15 }}>
          <Text weight={600} style={{ color: 'green', marginRight: 5 }}>
            +{commitData.stats.additions}
          </Text>
          <Text weight={600} style={{ color: 'red', marginLeft: 5 }}>
            -{commitData.stats.deletions}
          </Text>
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
          <Text color="dimmed">
            &nbsp;committed {dayjs(commitData.commit.author.date).fromNow()}
          </Text>
        </Group>
      </Group>
    </Card>
  );
}

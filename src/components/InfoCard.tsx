import { Box, Anchor, Avatar, createStyles, Group, Text, Popover } from '@mantine/core';
import { NextLink } from '@mantine/next';
import { useState } from 'react';
import { MdOutlineLocationOn } from 'react-icons/md';
import { Icon, Link } from 'tabler-icons-react';
import { useGlobalStyles } from '../styles/styles';

const useStyles = createStyles((theme) => ({
  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },
}));

export interface InfoCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  location?: string;
  links?: { link: string; label: string; icon?: Icon }[];
}

export function InfoToggle(props: InfoCardProps) {
  const { classes, cx } = useStyles();
  const [opened, setOpened] = useState(false);
  return (
    <Popover
      opened={opened}
      onClose={() => setOpened(false)}
      withArrow
      target={
        <NextLink href="#" className={classes.link} onClick={() => setOpened((o) => !o)}>
          about me
        </NextLink>
      }
      position="bottom"
    >
      <Info maxWidth={600} {...props} />
    </Popover>
  );
}

function Info(props: any) {
  return (
    <Group noWrap align="start" direction="row" style={{ ...props }}>
      {/* Profile picture if it exists*/}
      {props.imageUrl && (
        <Avatar
          alt="it's me"
          src={props.imageUrl}
          style={{
            width: 'auto',
            height: 'auto',
            marginBottom: 10,
          }}
        />
      )}
      <Group direction="row">
        <Group>
          <Group direction="column" spacing={0}>
            <Text weight={600} size="lg">
              {props.title}
            </Text>
            <Text color="dimmed">{props.description}</Text>
            {props.location && (
              <Group spacing={0}>
                <MdOutlineLocationOn size={25} />
                <Text>{props.location}</Text>
              </Group>
            )}
          </Group>
        </Group>
        {props.links &&
          props.links.map((link) => (
            <Anchor target="_blank" href={link.link} key={link.link}>
              <Group spacing={0}>
                {link.icon ? <link.icon size={30} /> : <Link size={30} />}
                <Text size="lg">{link.label}</Text>
              </Group>
            </Anchor>
          ))}
      </Group>
    </Group>
  );
}

export default function InfoCard(props: InfoCardProps) {
  const { classes, cx } = useGlobalStyles();
  return (
    <Box className={classes.boxStyled}>
      <Info {...props} />
    </Box>
  );
}

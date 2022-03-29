import React, { useState } from 'react';
import { createStyles, Header, Container, Group, Burger } from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import { NextLink } from '@mantine/next';
import { Logo } from '../Logo';
import { ColorSchemeToggle } from '../ColorSchemeToggle';

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

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
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
      color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 7],
    },
  },
}));

export interface HeaderSimpleProps {
  links: { link: string; label: string }[];
}

export function Navbar({ links }: HeaderSimpleProps) {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const [active, setActive] = useState('');
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <NextLink
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </NextLink>
  ));

  return (
    <Header height={60} mb={50}>
      <Container className={classes.header}>
        <Group spacing={5} className={classes.links}>
          <NextLink
            style={{ textDecoration: 'none' }}
            href="/"
            onClick={() => {
              setActive('');
            }}
          >
            <Logo style={{ fontSize: 22, marginRight: 8 }} />
          </NextLink>
          {items}
        </Group>
        <ColorSchemeToggle />
        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          className={classes.burger}
          size="sm"
        />
      </Container>
    </Header>
  );
}

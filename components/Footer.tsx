import React from 'react';
import { createStyles, Anchor, Group, ActionIcon } from '@mantine/core';
import { BrandGithub, Phone, BrandWhatsapp } from 'tabler-icons-react';
import { Logo } from './Logo';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing.md}px ${theme.spacing.md}px`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
  },
}));

interface FooterCenteredProps {
  links: { link: string; label: string }[];
}

export function FooterCentered({ links }: FooterCenteredProps) {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Anchor<'a'>
      color="dimmed"
      key={link.label}
      href={link.link}
      sx={{ lineHeight: 1 }}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Logo />
        <Group className={classes.links}>{items}</Group>
        <Group spacing={0} position="right" noWrap>
          <ActionIcon size="lg">
            <BrandGithub size={18} />
          </ActionIcon>
          <ActionIcon size="lg">
            <Phone size={18} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandWhatsapp size={18} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}

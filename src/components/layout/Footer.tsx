import React from 'react';
import { createStyles, Anchor, Text, Group, ActionIcon } from '@mantine/core';
import { BrandGithub, Phone, BrandWhatsapp } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  footer: {
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

export function Footer({ links }: FooterCenteredProps) {
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
    <Group direction="column" align="center" mb={20} mt={100}>
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
      <Text
        style={{
          fontSize: '0.70rem',
          textAlign: 'center',
          color: '#a0aec0',
        }}
      >
        © 2022, Thomas &apos;ajnart&apos; Camlong
      </Text>
    </Group>
  );
}

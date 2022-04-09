import { createStyles } from '@mantine/core';

export const useGlobalStyles = createStyles((theme, _params, getRef) => ({
  boxStyled: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.md,
  },
}));

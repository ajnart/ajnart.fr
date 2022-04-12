import { AppShell, Center, createStyles } from '@mantine/core';
import { Header } from './Header';
import { Footer } from './Footer';
import { NavLinks } from '../../data/constants';

const useStyles = createStyles((theme) => ({
  main: {
    [theme.fn.smallerThan('md')]: {
      maxWidth: '90vw',
    },
    [theme.fn.largerThan('md')]: {
      width: 800,
    },
  },
}));

export default function Layout({ children, style }: any) {
  const { classes, cx } = useStyles();
  return (
    <AppShell
      header={<Header links={NavLinks} />}
      footer={<Footer links={[]} />}
      style={{
        ...style,
      }}
    >
      <Center>
        <main
          className={cx(classes.main)}
          style={{
            ...style,
          }}
        >
          {children}
        </main>
      </Center>
    </AppShell>
  );
}

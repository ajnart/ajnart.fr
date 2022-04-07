import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { NavLinks } from '../../data/constants';
import { Center, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  work: {
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
    <div>
      <Navbar links={NavLinks} />
      <Center>
        <main
          className={cx(classes.work)}
          style={{
            minHeight: 'calc(70vh - 60px)',
          }}
        >
          {children}
        </main>
      </Center>
      <Footer links={[]} />
    </div>
  );
}

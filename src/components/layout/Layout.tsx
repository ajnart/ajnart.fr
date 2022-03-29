import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { NavLinks } from '../../data/constants';

export default function Layout({ children }) {
  return (
    <>
      <Navbar links={NavLinks} />
      <main>{children}</main>
      <Footer links={[]} />
    </>
  );
}

import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { NavLinks } from '../../data/constants';
import { CSSProperties } from 'react';

export default function Layout({ children, style }: any) {
  return (
    <div>
      <Navbar links={NavLinks} />
      <main style={{ minHeight: 'calc(70vh - 60px)' }}>{children}</main>
      <Footer links={[]} />
    </div>
  );
}

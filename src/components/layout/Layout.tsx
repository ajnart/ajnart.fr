import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { NavLinks } from '../../data/constants';

export default function Layout({ children, style }: any) {
  return (
    <div>
      <Navbar links={NavLinks} />
      <main style={{ minHeight: 'calc(70vh - 60px)', marginRight: '20%', marginLeft: '20%' }}>
        {children}
      </main>
      <Footer links={[]} />
    </div>
  );
}

import { ReactElement } from 'react';
import Footer from './Footer';
import BottomHeader from './header/BottomHeader';
import Header from './header/Header';

interface Props {
  children: ReactElement;
}

const RootLayout = ({ children }: Props) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <BottomHeader />
      <main className='flex-grow'>{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;

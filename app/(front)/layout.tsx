import type { Metadata } from 'next';
import Header from './_sections/Header';
import Footer from '@/components/Footer';
// import Footer from './_sections/Footer';

export const metadata: Metadata = {
  title: 'Comunidad Santa Rita de Casia',
  description: 'Portal de la Comunidad Educativa Santa Rita de Casia',
};

export default function FrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      {/* <Footer /> */}
      <Footer />
    </>
  );
}
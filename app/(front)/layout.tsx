import type { Metadata } from 'next';
import Header from './_sections/Header';
import Footer from './_sections/Footer';

export const metadata: Metadata = {
  title: 'Colegio NS Guadalupe',
  description: 'Portal del Colegio Nuestra Señora de Guadalupe',
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
      <Footer />
    </>
  );
}
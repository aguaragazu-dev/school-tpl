import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './_sections/Header';
import Footer from './_sections/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Colegio NS Guadalupe',
  description: 'Portal del Colegio Nuestra Señora de Guadalupe',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

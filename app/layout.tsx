import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import TopNavbar from '@/components/TopNavbar';
import Footer from '@/components/Footer';
import { Toaster } from "@/components/ui/toaster"
import Providers from './providers';

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
        <Providers>
          <TopNavbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
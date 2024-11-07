'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { School, Menu, X } from 'lucide-react';
import { DesktopNav } from './desktop-nav';
import { MobileNav } from './mobile-nav';

// Define types for menu items
interface SubMenuItem {
  title: string;
  href: string;
}

interface MenuItem {
  title: string;
  href: string;
  submenu?: SubMenuItem[];
}

// Menu items array with type annotation
const menuItems: MenuItem[] = [
  { title: 'Inicio', href: '/' },
  {
    title: 'Institucional',
    href: '#',
    submenu: [
      { title: 'Ideario', href: '/institucional/ideario' },
      { title: 'Historia', href: '/institucional/historia' },
      { title: 'Galería', href: '/institucional/galeria' },
    ],
  },
  {
    title: 'Niveles',
    href: '#',
    submenu: [
      { title: 'Jardín', href: '/niveles/jardin' },
      { title: 'Primario', href: '/niveles/primario' },
      { title: 'Secundario', href: '/niveles/secundario' },
    ],
  },
  { title: 'Noticias', href: '/noticias' },
  { title: 'Contacto', href: '/contacto' },
  { title: 'Dash', href: '/admin' },
];

export default function Header(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-800 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <School size={32} />
            <span className="text-xl font-bold">Colegio Ejemplo</span>
          </Link>
          <div className="hidden lg:flex items-center space-x-4">
            <DesktopNav menuItems={menuItems} />
            <Link href="/acceso-alumnos">
              <Button variant="outline">Acceso Alumnos</Button>
            </Link>
          </div>
          <div className="flex items-center space-x-4 lg:hidden">
            <Link href="/acceso-alumnos">
              <Button variant="outline" size="sm">Acceso Alumnos</Button>
            </Link>
            <button onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && <MobileNav menuItems={menuItems} toggleMenu={toggleMenu} />}
    </header>
  );
}
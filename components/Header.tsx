'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { School, Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
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
          <nav className="hidden md:block">
            <ul className="flex space-x-4 items-center">
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center">
                    Institucional <ChevronDown size={16} className="ml-1" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Link href="/institucional/ideario">Ideario</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/institucional/historia">Historia</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/institucional/galeria">Galería</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center">
                    Niveles <ChevronDown size={16} className="ml-1" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Link href="/niveles/jardin">Jardín</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/niveles/primario">Primario</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/niveles/secundario">Secundario</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li>
                <Link href="/noticias">Noticias</Link>
              </li>
              <li>
                <Link href="/contacto">Contacto</Link>
              </li>
              <li>
                <Link href="/admin">Dash</Link>
              </li>
            </ul>
          </nav>
          <Link href="/acceso-alumnos">
            <Button variant="outline" className="hidden md:block">
              Acceso Alumnos
            </Button>
          </Link>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-4 py-2">
            <ul className="space-y-2">
              <li>
                <Link href="/" onClick={toggleMenu}>
                  Inicio
                </Link>
              </li>
              <li>
                <details>
                  <summary>Institucional</summary>
                  <ul className="pl-4 mt-2 space-y-2">
                    <li>
                      <Link href="/institucional/ideario" onClick={toggleMenu}>
                        Ideario
                      </Link>
                    </li>
                    <li>
                      <Link href="/institucional/historia" onClick={toggleMenu}>
                        Historia
                      </Link>
                    </li>
                    <li>
                      <Link href="/institucional/galeria" onClick={toggleMenu}>
                        Galería
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Niveles</summary>
                  <ul className="pl-4 mt-2 space-y-2">
                    <li>
                      <Link href="/niveles/jardin" onClick={toggleMenu}>
                        Jardín
                      </Link>
                    </li>
                    <li>
                      <Link href="/niveles/primario" onClick={toggleMenu}>
                        Primario
                      </Link>
                    </li>
                    <li>
                      <Link href="/niveles/secundario" onClick={toggleMenu}>
                        Secundario
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href="/noticias" onClick={toggleMenu}>
                  Noticias
                </Link>
              </li>
              <li>
                <Link href="/contacto" onClick={toggleMenu}>
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/admin" onClick={toggleMenu}>
                  Dash
                </Link>
              </li>
            </ul>
          </nav>
          <div className="px-4 py-2">
            <Link href="/acceso-alumnos">
              <Button variant="outline" className="w-full" onClick={toggleMenu}>
                Acceso Alumnos
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Search,
  ShoppingCart,
  ChevronDown,
  Menu,
  School,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`${
        isScrolled ? 'fixed top-0 left-0 right-0 bg-white shadow-md z-50' : ''
      } transition-all duration-300`}
    >
      {!isScrolled && (
        <>
          {/* Top bar */}
          <div className="bg-navy-blue text-white">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center py-2 text-sm">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <Phone size={16} className="mr-1" />
                    795 South Park Avenue, CA 94107
                  </span>
                  <span>Have Questions</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Link href="#" className="hover:text-green-400">
                    <Facebook size={16} />
                  </Link>
                  <Link href="#" className="hover:text-green-400">
                    <Twitter size={16} />
                  </Link>
                  <Link href="#" className="hover:text-green-400">
                    <Linkedin size={16} />
                  </Link>
                  <Link href="#" className="hover:text-green-400">
                    <Instagram size={16} />
                  </Link>
                  <select className="bg-transparent border-none text-sm">
                    <option value="en">English</option>
                    <option value="es">Español</option>
                  </select>
                  <Link href="/login" className="hover:text-green-400">
                    Log In
                  </Link>
                  <Link href="/register" className="hover:text-green-400">
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Main header */}
          <div className="bg-white text-navy-blue py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
            <School size={32} />
            <span className="text-xl font-bold">Colegio Ejemplo</span>
          </Link>
              <div className="flex items-center space-x-8">
                <div className="flex items-center">
                  <Phone size={24} className="text-green-500 mr-2" />
                  <div>
                    <p className="text-sm">Call Us Now</p>
                    <p className="font-bold">(908) 875 7678</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail size={24} className="text-green-500 mr-2" />
                  <div>
                    <p className="text-sm">Enquery Us</p>
                    <p className="font-bold">enquery@edulyn.com</p>
                  </div>
                </div>
                <Link
                  href="/apply"
                  className="bg-green-500 text-white px-6 py-2 rounded  hover:bg-green-600 transition duration-300"
                >
                  APPLY NOW
                </Link>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Navigation */}
      <nav className={`${isScrolled ? 'py-4' : 'bg-green-500 py-0'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {isScrolled && (
              <Link href="/" className="flex items-center space-x-2">
              <School size={32} />
              <span className="text-xl font-bold">Colegio Ejemplo</span>
            </Link>
            )}
            <ul className="flex space-x-6 py-4">
              <li>
                <Link
                  href="/"
                  className={`${
                    isScrolled ? 'text-navy-blue' : 'text-white'
                  } hover:text-green-400 flex items-center`}
                >
                  Inicio 
                </Link>
              </li>

              <li>
                
                <DropdownMenu >
                  <DropdownMenuTrigger className={`${
                    isScrolled ? 'text-navy-blue' : 'text-white'
                  } hover:text-green-400 flex items-center`}>
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
                <Link
                  href="/eventos"
                  className={`${
                    isScrolled ? 'text-navy-blue' : 'text-white'
                  } hover:text-green-400 flex items-center`}
                >
                  Eventos
                </Link>
              </li>
              <li>
                <Link
                  href="/noticias"
                  className={`${
                    isScrolled ? 'text-navy-blue' : 'text-white'
                  } hover:text-green-400 flex items-center`}
                >
                  Noticias
                </Link>
              </li>
            </ul>
            <div className="flex items-center space-x-4">
              {/* <button
                aria-label="Search"
                className={`${
                  isScrolled ? 'text-navy-blue' : 'text-white'
                } hover:text-green-400`}
              >
                <Search size={20} />
              </button>
              <button
                aria-label="Cart"
                className={`${
                  isScrolled ? 'text-navy-blue' : 'text-white'
                } hover:text-green-400`}
              >
                <ShoppingCart size={20} />
              </button> */}
              {isScrolled && (
                <Link
                  href="/acceso-alumnos"
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
                >
                  Acceso Alumnos
                </Link>
              )}
              <button
                aria-label="Menu"
                onClick={toggleMenu}
                className={`${
                  isScrolled ? 'text-navy-blue' : 'text-white'
                } hover:text-green-400 md:hidden`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>
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

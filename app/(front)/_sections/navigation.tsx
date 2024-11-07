'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, School } from 'lucide-react';

interface MenuItem {
  title: string;
  href: string;
  submenu?: MenuItem[];
}

interface NavigationProps {
  isScrolled: boolean;
  isMenuOpen: boolean;
  toggleMenu: () => void;
  menuItems: MenuItem[];
}

export function Navigation({ isScrolled, isMenuOpen, toggleMenu, menuItems }: NavigationProps): JSX.Element {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <nav className={`${isScrolled ? 'py-4' : 'bg-blue-500 py-0'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {isScrolled && (
            <Link href="/" className="flex items-center space-x-2">
              <School size={32} />
              <span className="text-xl font-bold">Comunidad Santa Rita de Casia</span>
            </Link>
          )}
          <ul className="hidden md:flex space-x-6 py-4">
            {menuItems.map((item, index) => (
              <li
                key={index}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                className="relative"
              >
                {item.submenu ? (
                  <>
                    <button
                      className={`${
                        isScrolled ? 'text-navy-blue' : 'text-white'
                      } hover:text-blue-400 flex items-center`}
                    >
                      {item.title} <ChevronDown size={16} className="ml-1" />
                    </button>
                    {hoveredItem === index && (
                      <div className="absolute top-full left-0 bg-white shadow-md rounded-md py-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="block px-4 py-2 text-navy-blue hover:bg-blue-100"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`${
                      isScrolled ? 'text-navy-blue' : 'text-white'
                    } hover:text-blue-400 flex items-center`}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-4">
            {isScrolled && (
              <Link
                href="/acceso-alumnos"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                Acceso Alumnos
              </Link>
            )}
            <button
              aria-label="Menu"
              onClick={toggleMenu}
              className={`${
                isScrolled ? 'text-navy-blue' : 'text-white'
              } hover:text-blue-400 md:hidden`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-4 py-2">
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  {item.submenu ? (
                    <details>
                      <summary>{item.title}</summary>
                      <ul className="pl-4 mt-2 space-y-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link href={subItem.href} onClick={toggleMenu}>
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link href={item.href} onClick={toggleMenu}>
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="px-4 py-2">
            <Link href="/acceso-alumnos">
              <button className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300" onClick={toggleMenu}>
                Acceso Alumnos
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
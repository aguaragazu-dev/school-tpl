'use client';

import { useState, useEffect } from 'react';
import { TopBar } from './top-bar';
import { MainHeader } from './main-header';
import { Navigation } from './navigation';
import { menuItems } from './menu-items';

export default function Header(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <TopBar />
          <MainHeader />
        </>
      )}
      <Navigation
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        menuItems={menuItems}
      />
    </header>
  );
}

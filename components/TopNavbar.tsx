'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { School, Menu, X, Bell } from 'lucide-react';
import CurrentUser from './CurrentUser';

export default function TopNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();

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
          <nav className="hidden md:flex items-center space-x-4">
            {session?.user ? (
              <>
                <Link href="/dashboard">Dashboard</Link>
                <Button variant="ghost" size="icon">
                  <Bell size={20} />
                </Button>
                <CurrentUser />
              </>
            ) : (
              <Link href="/login">
                <Button variant="outline">Login</Button>
              </Link>
            )}
          </nav>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-4 py-2">
            <ul className="space-y-2">
              {session?.user ? (
                <>
                  <li>
                    <Link href="/dashboard" onClick={toggleMenu}>
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link href="/profile" onClick={toggleMenu}>
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Button variant="ghost" onClick={toggleMenu}>
                      <Bell size={20} className="mr-2" />
                      Notifications
                    </Button>
                  </li>
                </>
              ) : (
                <li>
                  <Link href="/login" onClick={toggleMenu}>
                    <Button variant="outline">Login</Button>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

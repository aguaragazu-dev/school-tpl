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
} from 'lucide-react';

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
              <Link href="/" className="flex items-center">
                <Image
                  src="/edulyn-logo.png"
                  alt="Edulyn Logo"
                  width={150}
                  height={50}
                />
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
              <Link href="/" className="flex items-center">
                <Image
                  src="/edulyn-logo.png"
                  alt="Edulyn Logo"
                  width={120}
                  height={40}
                />
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
                  HOME <ChevronDown size={16} className="ml-1" />
                </Link>
              </li>

              <li>
                <Link
                  href="/courses"
                  className={`${
                    isScrolled ? 'text-navy-blue' : 'text-white'
                  } hover:text-green-400 flex items-center`}
                >
                  COURSES <ChevronDown size={16} className="ml-1" />
                </Link>
              </li>
              <li>
                <Link
                  href="/instructor"
                  className={`${
                    isScrolled ? 'text-navy-blue' : 'text-white'
                  } hover:text-green-400 flex items-center`}
                >
                  INSTRUCTOR <ChevronDown size={16} className="ml-1" />
                </Link>
              </li>
              <li>
                <Link
                  href="/eventos"
                  className={`${
                    isScrolled ? 'text-navy-blue' : 'text-white'
                  } hover:text-green-400 flex items-center`}
                >
                  EVENT
                </Link>
              </li>
              <li>
                <Link
                  href="/noticias"
                  className={`${
                    isScrolled ? 'text-navy-blue' : 'text-white'
                  } hover:text-green-400 flex items-center`}
                >
                  BLOG
                </Link>
              </li>
            </ul>
            <div className="flex items-center space-x-4">
              <button
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
              </button>
              {isScrolled && (
                <Link
                  href="/apply"
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
                >
                  APPLY NOW
                </Link>
              )}
              <button
                aria-label="Menu"
                className={`${
                  isScrolled ? 'text-navy-blue' : 'text-white'
                } hover:text-green-400 md:hidden`}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

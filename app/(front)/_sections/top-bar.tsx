import Link from 'next/link';
import { Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function TopBar(): JSX.Element {
  return (
    <div className="bg-navy-blue text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2 text-sm">
          <div className="flex items-center space-x-4">
            <span className="flex items-center md:hidden">
              <Phone size={16} className="mr-1" />
              Florencio Fernandez 5440, SF, ARG
            </span>
            <span className="hidden md:inline">¿Alguna Pregunta?</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-4">
              <Link href="#" className="hover:text-blue-400">
                <Facebook size={16} />
              </Link>
              <Link href="#" className="hover:text-blue-400">
                <Twitter size={16} />
              </Link>
              <Link href="#" className="hover:text-blue-400">
                <Linkedin size={16} />
              </Link>
              <Link href="#" className="hover:text-blue-400">
                <Instagram size={16} />
              </Link>
            </div>
            <Link href="/sign-in" className="hover:text-blue-400">
              Ingresar
            </Link>
            <Link href="/sign-up" className="hover:text-blue-400">
              Registrarse
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

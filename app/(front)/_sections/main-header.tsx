import Link from 'next/link';
import { Phone, Mail, School } from 'lucide-react';

export function MainHeader(): JSX.Element {
  return (
    <div className="bg-white text-navy-blue py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <School size={32} />
          <span className="text-xl font-bold">Comunidad Santa Rita de Casia</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center">
            <Phone size={24} className="text-blue-500 mr-2" />
            <div>
              <p className="text-sm">Contactenos</p>
              <p className="font-bold">(342) 875 7678</p>
            </div>
          </div>
          <div className="hidden lg:flex items-center">
            <Mail size={24} className="text-blue-500 mr-2" />
            <div>
              <p className="text-sm">Consultas</p>
              <p className="font-bold">consultas@santaritadecasia.edu.ar</p>
            </div>
          </div>
          <Link
            href="/apply"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Reemplazos
          </Link>
        </div>
      </div>
    </div>
  );
}

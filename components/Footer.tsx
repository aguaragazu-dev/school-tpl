import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <p>Dirección: Av. Florencio Fernandez 5440, Santa Fe</p>
            <p>Teléfono: (342) 489-7474</p>
            <p>Email: info@santaritadecasia.edu.ar</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul>
              <li><a href="/institucional">Institucional</a></li>
              <li><a href="/niveles">Niveles</a></li>
              <li><a href="/contacto">Contacto</a></li>
              <li><a href="/noticias">Noticias</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600"><Facebook /></a>
              <a href="#" className="text-blue-400"><Twitter /></a>
              <a href="#" className="text-pink-600"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Comunidad Educativa Santa Rita de Casia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const levels = {
  jardin: {
    name: 'Nivel Inicial',
    schedule: 'Lunes a Viernes: 8:00 - 12:00',
    email: 'inicial@nsguadalupe.edu.ar',
    phone: '(011) 1234-5678',
    contact: 'Lic. María González',
    links: [
      { title: 'Proyecto Educativo', url: 'proyecto' },
      { title: 'Actividades', url: 'actividades' },
    ],
    news: [
      {
        id: 1,
        title: 'Jornada de Adaptación para Sala de 3',
        date: '2023-02-15',
      },
      {
        id: 2,
        title: 'Taller de Arte para Padres e Hijos',
        date: '2023-03-10',
      },
    ],
  },
  primario: {
    name: 'Nivel Primario',
    schedule: 'Lunes a Viernes: 7:45 - 16:30',
    email: 'primaria@nsguadalupe.edu.ar',
    phone: '(011) 2345-6789',
    contact: 'Prof. Carlos Rodríguez',
    links: [
      { title: 'Proyecto Educativo', url: 'proyecto' },
      { title: 'Programa Académico', url: 'programa' },
      { title: 'Actividades', url: 'actividades' },
      { title: 'Deportes', url: 'deportes' },
    ],
    news: [
      { id: 3, title: 'Feria de Ciencias 4to Grado', date: '2023-05-20' },
      { id: 4, title: 'Viaje de Estudios 6to Grado', date: '2023-09-05' },
    ],
  },
  secundario: {
    name: 'Nivel Secundario',
    schedule: 'Lunes a Viernes: 7:30 - 17:00',
    email: 'secundaria@nsguadalupe.edu.ar',
    phone: '(011) 3456-7890',
    contact: 'Lic. Ana Martínez',
    links: [
      { title: 'Proyecto Educativo', url: 'proyecto' },
      { title: 'Programa Académico', url: 'programa' },
      { title: 'Actividades', url: 'actividades' },
      { title: 'Deportes', url: 'deportes' },
      { title: 'Orientaciones', url: 'orientaciones' },
    ],
    news: [
      { id: 5, title: 'Charla Universitaria para 5to Año', date: '2023-08-12' },
      { id: 6, title: 'Torneo Intercolegial de Debate', date: '2023-10-18' },
    ],
  },
};
interface NivelPageProps {
  params: {
    level: string;
  };
}

export default function LevelPage({ params }: NivelPageProps) {
  const level = levels[params.level as keyof typeof levels];

  if (!level) {
    return <div>Nivel no encontrado</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{level.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Información de Contacto</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              <strong>Horario de Secretaría:</strong> {level.schedule}
            </p>
            <p>
              <strong>Email:</strong> {level.email}
            </p>
            <p>
              <strong>Teléfono:</strong> {level.phone}
            </p>
            <p>
              <strong>Contacto:</strong> {level.contact}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Enlaces del Nivel</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {level.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={`/niveles/${params.level}/${link.url}`}
                    className="text-blue-600 hover:underline"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Noticias del Nivel</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {level.news.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/noticias/${item.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    {item.title}
                  </Link>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

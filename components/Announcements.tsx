import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const announcements = [
  {
    id: 1,
    title: 'Inscripciones Abiertas',
    content: 'Las inscripciones para el próximo año lectivo ya están abiertas. ¡No te quedes sin tu cupo!',
  },
  {
    id: 2,
    title: 'Reunión de Padres',
    content: 'Recordatorio: La próxima reunión de padres se llevará a cabo el 15 de agosto a las 19:00 hs.',
  },
  {
    id: 3,
    title: 'Feria de Ciencias',
    content: 'Prepárate para nuestra Feria de Ciencias anual que se realizará el 22 de septiembre.',
  },
];

export default function Announcements() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Anuncios</h2>
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <Card key={announcement.id}>
            <CardHeader>
              <CardTitle className="text-lg">{announcement.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">{announcement.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
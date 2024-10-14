import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const posts = [
  {
    id: 1,
    title: 'Celebración del Día de la Independencia',
    excerpt: 'Nuestros alumnos conmemoraron el Día de la Independencia con diversas actividades...',
    date: '2023-07-09',
  },
  {
    id: 2,
    title: 'Resultados de las Olimpiadas de Matemáticas',
    excerpt: 'Felicitamos a nuestros estudiantes por su destacada participación en las Olimpiadas...',
    date: '2023-06-15',
  },
  {
    id: 3,
    title: 'Nuevo Programa de Intercambio Internacional',
    excerpt: 'Estamos emocionados de anunciar nuestro nuevo programa de intercambio con colegios...',
    date: '2023-05-20',
  },
];

export default function BlogPosts() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Últimas Noticias</h2>
      <div className="space-y-6">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-2">{post.excerpt}</p>
              <p className="text-sm text-gray-500">{post.date}</p>
              <Link href={`/posts/${post.id}`} className="text-blue-600 hover:underline mt-2 inline-block">
                Leer más
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
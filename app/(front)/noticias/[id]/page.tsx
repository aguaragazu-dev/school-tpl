'use client';
import { useParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BlogPostDetail from '../components/BlogPostDetail';
import CommentSection from '../components/CommentSection';
import BlogSidebar from '../components/BlogSidebar';

const newsArticles = [
  {
    id: '1',
    title: 'Celebración del Día de la Independencia',
    date: '2023-07-09',
    content:
      'El Colegio Nuestra Señora de Guadalupe celebró el Día de la Independencia con un acto especial...',
    image: 'https://source.unsplash.com/random/800x400?independence',
  },
  {
    id: '2',
    title: 'Resultados de las Olimpiadas de Matemáticas',
    date: '2023-06-15',
    content:
      'Nos enorgullece anunciar que nuestros estudiantes obtuvieron excelentes resultados en las Olimpiadas de Matemáticas...',
    image: 'https://source.unsplash.com/random/800x400?mathematics',
  },
  // Add more news articles as needed
];

export default function NewsArticle() {
  const { id } = useParams();
  const article = newsArticles.find((a) => a.id === id);

  if (!article) {
    return <div>Noticia no encontrada</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <BlogPostDetail
        author={{
          name: '',
          avatar: '',
        }}
        category={''}
        tags={[]}
        {...article}
      />
      <CommentSection comments={[]} />
      <BlogSidebar categories={[]} recentPosts={[]} tags={[]} />
    </div>
  );
}

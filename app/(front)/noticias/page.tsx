'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const allNews = [
  {
    id: 1,
    title: 'Celebración del Día de la Independencia',
    date: '2023-07-09',
    category: 'Eventos',
  },
  {
    id: 2,
    title: 'Resultados de las Olimpiadas de Matemáticas',
    date: '2023-06-15',
    category: 'Académico',
  },
  {
    id: 3,
    title: 'Nuevo Programa de Intercambio Internacional',
    date: '2023-05-20',
    category: 'Institucional',
  },
  {
    id: 4,
    title: 'Jornada de Adaptación para Sala de 3',
    date: '2023-02-15',
    category: 'Nivel Inicial',
  },
  {
    id: 5,
    title: 'Feria de Ciencias 4to Grado',
    date: '2023-05-20',
    category: 'Nivel Primario',
  },
  {
    id: 6,
    title: 'Charla Universitaria para 5to Año',
    date: '2023-08-12',
    category: 'Nivel Secundario',
  },
];

const categories = [
  'Todos',
  'Eventos',
  'Académico',
  'Institucional',
  'Nivel Inicial',
  'Nivel Primario',
  'Nivel Secundario',
];

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredNews = allNews.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'Todos' || item.category === selectedCategory)
  );

  const relevantNews = allNews.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Noticias y Eventos</h1>
      <div className="mb-8">
        <Input
          type="text"
          placeholder="Buscar noticias..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4"
        />
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Resultados de búsqueda</h2>
          {filteredNews.map((item) => (
            <Card key={item.id} className="mb-4">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">{item.date}</p>
                <p className="text-sm text-blue-600">{item.category}</p>
                <Link
                  href={`/noticias/${item.id}`}
                  className="text-blue-600 hover:underline"
                >
                  Leer más
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Noticias Destacadas</h2>
          {relevantNews.map((item) => (
            <Card key={item.id} className="mb-4">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">{item.date}</p>
                <Link
                  href={`/noticias/${item.id}`}
                  className="text-blue-600 hover:underline"
                >
                  Leer más
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function ProyectoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Proyecto Educativo</h1>
      <Card>
        <CardHeader>
          <CardTitle>Descripción del Proyecto</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Este proyecto educativo tiene como objetivo fomentar el aprendizaje integral de los estudiantes a través de actividades prácticas y teóricas.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
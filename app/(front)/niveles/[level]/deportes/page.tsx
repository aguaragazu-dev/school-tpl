'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function DeportesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Deportes</h1>
      <Card>
        <CardHeader>
          <CardTitle>Actividades Deportivas</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Ofrecemos una variedad de actividades deportivas, incluyendo fútbol, baloncesto y natación, para fomentar la salud y el trabajo en equipo.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
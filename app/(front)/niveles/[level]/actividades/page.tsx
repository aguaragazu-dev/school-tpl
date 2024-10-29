'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function ActividadesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Actividades</h1>
      <Card>
        <CardHeader>
          <CardTitle>Actividades Programadas</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5">
            <li>Excursión a la granja - 15 de marzo</li>
            <li>Taller de arte - 22 de marzo</li>
            <li>Feria de ciencias - 30 de marzo</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
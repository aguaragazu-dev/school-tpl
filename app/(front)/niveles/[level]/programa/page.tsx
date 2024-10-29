'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function ProgramaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Programa Académico</h1>
      <Card>
        <CardHeader>
          <CardTitle>Detalles del Programa</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            El programa académico está diseñado para proporcionar a los estudiantes una educación de calidad, con un enfoque en el desarrollo de habilidades críticas y creativas.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
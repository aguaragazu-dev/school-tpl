'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function OrientacionesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Orientaciones</h1>
      <Card>
        <CardHeader>
          <CardTitle>Orientaciones Educativas</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Proporcionamos orientación educativa y profesional para ayudar a los estudiantes a tomar decisiones informadas sobre su futuro académico y profesional.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
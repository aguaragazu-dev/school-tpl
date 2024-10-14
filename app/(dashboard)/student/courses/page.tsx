import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const courses = [
  { id: 1, name: 'Matemáticas', teacher: 'Prof. García', grade: 'A' },
  { id: 2, name: 'Historia', teacher: 'Prof. Rodríguez', grade: 'B+' },
  { id: 3, name: 'Ciencias', teacher: 'Prof. Martínez', grade: 'A-' },
];

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Mis Materias</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Profesor: {course.teacher}</p>
              <p>Calificación: {course.grade}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
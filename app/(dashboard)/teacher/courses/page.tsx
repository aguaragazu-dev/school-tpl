import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const courses = [
  { id: 1, name: 'Matemáticas 101', grade: '1er Año', students: 30 },
  { id: 2, name: 'Álgebra Avanzada', grade: '3er Año', students: 25 },
  { id: 3, name: 'Geometría', grade: '2do Año', students: 28 },
];

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Mis Cursos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Grado: {course.grade}</p>
              <p>Estudiantes: {course.students}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
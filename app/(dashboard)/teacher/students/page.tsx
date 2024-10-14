import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const students = [
  { id: 1, name: 'Juan Pérez', grade: '1er Año', course: 'Matemáticas 101' },
  { id: 2, name: 'María García', grade: '3er Año', course: 'Álgebra Avanzada' },
  { id: 3, name: 'Carlos Rodríguez', grade: '2do Año', course: 'Geometría' },
];

export default function StudentsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Mis Alumnos</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Grado</TableHead>
            <TableHead>Curso</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.grade}</TableCell>
              <TableCell>{student.course}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
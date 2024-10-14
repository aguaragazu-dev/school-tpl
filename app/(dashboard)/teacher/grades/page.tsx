'use client';
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const students = [
  { id: 1, name: 'Juan Pérez' },
  { id: 2, name: 'María García' },
  { id: 3, name: 'Carlos Rodríguez' },
];

export default function GradesPage() {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [grades, setGrades] = useState<{ [key: number]: string }>({});

  const handleGradeChange = (studentId: number, grade: string) => {
    setGrades((prev) => ({ ...prev, [studentId]: grade }));
  };

  const handleSubmit = () => {
    console.log('Grades submitted:', grades);
    // Here you would typically send this data to your backend
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Registro de Calificaciones</h1>
      <Select onValueChange={setSelectedCourse} className="mb-4">
        <SelectTrigger>
          <SelectValue placeholder="Seleccionar Curso" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="math101">Matemáticas 101</SelectItem>
          <SelectItem value="algebra">Álgebra Avanzada</SelectItem>
          <SelectItem value="geometry">Geometría</SelectItem>
        </SelectContent>
      </Select>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Calificación</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.name}</TableCell>
              <TableCell>
                <Input
                  type="text"
                  value={grades[student.id] || ''}
                  onChange={(e) =>
                    handleGradeChange(student.id, e.target.value)
                  }
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button onClick={handleSubmit} className="mt-4">
        Guardar Calificaciones
      </Button>
    </div>
  );
}

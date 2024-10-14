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
import { Checkbox } from '@/components/ui/checkbox';
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

export default function AttendancePage() {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [attendance, setAttendance] = useState<{ [key: number]: boolean }>({});

  const handleAttendanceChange = (studentId: number) => {
    setAttendance((prev) => ({ ...prev, [studentId]: !prev[studentId] }));
  };

  const handleSubmit = () => {
    console.log('Attendance submitted:', attendance);
    // Here you would typically send this data to your backend
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Registro de Asistencia</h1>
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
            <TableHead>Presente</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.name}</TableCell>
              <TableCell>
                <Checkbox
                  checked={attendance[student.id] || false}
                  onCheckedChange={() => handleAttendanceChange(student.id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button onClick={handleSubmit} className="mt-4">
        Guardar Asistencia
      </Button>
    </div>
  );
}

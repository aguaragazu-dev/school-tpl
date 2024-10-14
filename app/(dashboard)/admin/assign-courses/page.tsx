'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function AssignCoursesPage() {
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleAssign = () => {
    console.log(`Assigned ${selectedCourse} to ${selectedTeacher}`);
    // Here you would typically send this data to your backend
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Asignar Materias a Docentes</h1>
      <div className="space-y-4">
        <Select onValueChange={setSelectedTeacher}>
          <SelectTrigger>
            <SelectValue placeholder="Seleccionar Docente" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="teacher1">Profesor 1</SelectItem>
            <SelectItem value="teacher2">Profesor 2</SelectItem>
            <SelectItem value="teacher3">Profesor 3</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={setSelectedCourse}>
          <SelectTrigger>
            <SelectValue placeholder="Seleccionar Materia" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="math">Matemáticas</SelectItem>
            <SelectItem value="science">Ciencias</SelectItem>
            <SelectItem value="history">Historia</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={handleAssign}>Asignar Materia</Button>
      </div>
    </div>
  );
}

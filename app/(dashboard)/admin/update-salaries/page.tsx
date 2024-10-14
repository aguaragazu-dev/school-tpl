'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function UpdateSalariesPage() {
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [salary, setSalary] = useState('');

  const handleUpdate = () => {
    console.log(`Updated salary for ${selectedTeacher} to ${salary}`);
    // Here you would typically send this data to your backend
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">
        Actualizar Haberes de Docentes
      </h1>
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
        <Input
          type="number"
          placeholder="Nuevo Salario"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <Button onClick={handleUpdate}>Actualizar Salario</Button>
      </div>
    </div>
  );
}

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

export default function IssueInvoicesPage() {
  const [selectedStudent, setSelectedStudent] = useState('');
  const [amount, setAmount] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleIssue = () => {
    console.log(
      `Issued invoice for ${selectedStudent}: $${amount} due on ${dueDate}`
    );
    // Here you would typically send this data to your backend
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Emitir Cuotas</h1>
      <div className="space-y-4">
        <Select onValueChange={setSelectedStudent}>
          <SelectTrigger>
            <SelectValue placeholder="Seleccionar Estudiante" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="student1">Estudiante 1</SelectItem>
            <SelectItem value="student2">Estudiante 2</SelectItem>
            <SelectItem value="student3">Estudiante 3</SelectItem>
          </SelectContent>
        </Select>
        <Input
          type="number"
          placeholder="Monto"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Input
          type="date"
          placeholder="Fecha de Vencimiento"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <Button onClick={handleIssue}>Emitir Cuota</Button>
      </div>
    </div>
  );
}

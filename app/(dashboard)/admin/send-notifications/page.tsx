'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function SendNotificationsPage() {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    console.log(`Sent notification to ${recipient}: ${subject} - ${message}`);
    // Here you would typically send this data to your backend
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Enviar Notificaciones</h1>
      <div className="space-y-4">
        <Select onValueChange={setRecipient}>
          <SelectTrigger>
            <SelectValue placeholder="Seleccionar Destinatario" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="students">Estudiantes</SelectItem>
            <SelectItem value="teachers">Docentes</SelectItem>
          </SelectContent>
        </Select>
        <Input
          placeholder="Asunto"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <Textarea
          placeholder="Mensaje"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button onClick={handleSend}>Enviar Notificación</Button>
      </div>
    </div>
  );
}

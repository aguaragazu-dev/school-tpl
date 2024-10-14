'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function MatriculationForm() {
  const [formData, setFormData] = useState({
    studentName: '',
    birthDate: '',
    grade: '',
    parentName: '',
    email: '',
    phone: '',
    address: '',
    previousSchool: '',
    comments: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Matriculation form submitted:', formData);
    // Here you would typically send the form data to your backend
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Formulario de Matriculación</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="studentName">Nombre del Estudiante</label>
              <Input id="studentName" name="studentName" value={formData.studentName} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="birthDate">Fecha de Nacimiento</label>
              <Input id="birthDate" name="birthDate" type="date" value={formData.birthDate} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="grade">Grado a Cursar</label>
              <Select name="grade" onValueChange={handleSelectChange('grade')}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccione un grado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1° Grado</SelectItem>
                  <SelectItem value="2">2° Grado</SelectItem>
                  <SelectItem value="3">3° Grado</SelectItem>
                  {/* Add more grade options */}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="parentName">Nombre del Padre/Madre/Tutor</label>
              <Input id="parentName" name="parentName" value={formData.parentName} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="phone">Teléfono</label>
              <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="address">Dirección</label>
              <Input id="address" name="address" value={formData.address} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="previousSchool">Escuela Anterior (si aplica)</label>
              <Input id="previousSchool" name="previousSchool" value={formData.previousSchool} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="comments">Comentarios Adicionales</label>
              <Textarea id="comments" name="comments" value={formData.comments} onChange={handleChange} />
            </div>
            <Button type="submit">Enviar Solicitud</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
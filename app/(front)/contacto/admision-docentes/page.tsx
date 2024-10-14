'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function TeacherAdmissionForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    position: '',
    subject: '',
    resume: null as File | null,
    coverLetter: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prevData => ({ ...prevData, resume: e.target.files![0] }));
    }
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Teacher admission form submitted:', formData);
    // Here you would typically send the form data to your backend
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Formulario de Admisión de Docentes</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name">Nombre Completo</label>
              <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
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
              <label htmlFor="education">Educación</label>
              <Input id="education" name="education" value={formData.education} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="experience">Experiencia Laboral</label>
              <Textarea id="experience" name="experience" value={formData.experience} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="position">Posición Deseada</label>
              <Select name="position" onValueChange={handleSelectChange('position')}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccione una posición" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="profesor">Profesor</SelectItem>
                  <SelectItem value="asistente">Asistente de Enseñanza</SelectItem>
                  <SelectItem value="administrativo">Personal Administrativo</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="subject">Materia (si aplica)</label>
              <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="resume">Currículum Vitae (PDF)</label>
              <Input id="resume" name="resume" type="file" accept=".pdf" onChange={handleFileChange} required />
            </div>
            <div>
              <label htmlFor="coverLetter">Carta de Presentación</label>
              <Textarea id="coverLetter" name="coverLetter" value={formData.coverLetter} onChange={handleChange} required />
            </div>
            <Button type="submit">Enviar Solicitud</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
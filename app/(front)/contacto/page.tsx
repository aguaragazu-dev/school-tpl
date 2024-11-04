'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { MapPin, Phone, AtSign, FileEditIcon } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 ">
      <PageHeader
        title="CONTACTO"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Contacto", href: "/contacto" },
        ]}
        backgroundImage="/placeholder.svg?height=400&width=1200"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Formulario de Contacto</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nombre
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Asunto
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit">Enviar Mensaje</Button>
            </form>
          </CardContent>
        </Card>
        <div>
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Información de Contacto</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong><MapPin  size={20} className="mr-2" />Dirección:</strong> Av. Florencio Fernandez 5440, Santa Fe
              </p>
              <p>
                <strong><Phone size={20} className="mr-2" /> Teléfono:</strong> (342) 489-7474
              </p>
              <p>
                <strong><AtSign size={20} className="mr-2" />Email:</strong> info@santaritadecasia.edu.ar
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Otros Formularios</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                <li>
                  <Link
                    href="/contacto/matriculacion"
                    className="text-blue-600 hover:underline"
                  >
                    <FileEditIcon /> Formulario de Matriculación de Alumnos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacto/admision-docentes"
                    className="text-blue-600 hover:underline"
                  >
                    <FileEditIcon /> Formulario de Admisión de Docentes
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

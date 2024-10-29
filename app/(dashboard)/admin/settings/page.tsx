'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { School } from '@prisma/client';
import { prisma } from '@/lib/prisma'; // Asegúrate de tener la conexión a Prisma configurada

export default function SettingsPage() {
  const [schoolData, setSchoolData] = useState<School | null>(null);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchSchoolData = async () => {
  //     const data = await prisma.school.findFirst();
  //     setSchoolData(data);
  //     setLoading(false);
  //   };

  //   fetchSchoolData();
  // }, []);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setSchoolData({ ...schoolData, [e.target.name]: e.target.value });
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (schoolData) {
      await prisma.school.upsert({
        where: { id: schoolData.id },
        update: schoolData,
        create: schoolData,
      });
      alert('Datos de la escuela actualizados correctamente.');
    }
  };

  if (loading) return <div>Cargando...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Configuración de la Escuela</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="name"
          placeholder="Nombre de la Escuela"
          value={schoolData?.name || ''}
          // onChange={handleChange}
          required
        />
        <Input
          name="logo"
          placeholder="URL del Logo"
          value={schoolData?.logo || ''}
          // onChange={handleChange}
        />
        <Input
          name="email"
          placeholder="Email de Contacto"
          value={schoolData?.email || ''}
          // onChange={handleChange}
        />
        <Input
          name="phone"
          placeholder="Teléfono de Contacto"
          value={schoolData?.phone || ''}
          // onChange={handleChange}
        />
        <Button type="submit">Guardar Cambios</Button>
      </form>
    </div>
  );
}
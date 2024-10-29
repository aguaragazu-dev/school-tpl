'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Page } from '@prisma/client';
import { prisma } from '@/lib/prisma';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const allowedPageTypes = [
  'ideario',
  'institucional',
  'nivel',
  'actividades',
  'proyecto',
  'deportes',
  'proyecto educativo',
  'orientaciones',
];

export default function PagesAdmin() {
  const [pages, setPages] = useState<Page[]>([]);
  const [newPage, setNewPage] = useState({ title: '', content: '', type: '' });
  const [editingPage, setEditingPage] = useState<Page | null>(null);

  // useEffect(() => {
  //   const fetchPages = async () => {
  //     const data = await prisma.page.findMany();
  //     setPages(data);
  //   };

  //   fetchPages();
  // }, []);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  //   setNewPage({ ...newPage, [e.target.name]: e.target.value });
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!allowedPageTypes.includes(newPage.type)) {
      alert('Tipo de página no permitido.');
      return;
    }
    if (editingPage) {
      await prisma.page.update({
        where: { id: editingPage.id },
        data: newPage,
      });
      // setPages(pages.map(page => (page.id === editingPage.id ? newPage : page)));
      setEditingPage(null);
    } else {
      await prisma.page.create({ data: newPage });
      // setPages([...pages, newPage]);
    }
    setNewPage({ title: '', content: '', type: '' });
    alert('Página guardada correctamente.');
  };

  const handleEdit = (page: Page) => {
    setEditingPage(page);
    setNewPage({ title: page.title, content: page.content, type: page.type });
  };

  const handleDelete = async (id: string) => {
    await prisma.page.delete({ where: { id } });
    setPages(pages.filter(page => page.id !== id));
    alert('Página eliminada correctamente.');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Administrar Páginas Institucionales</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="title"
          placeholder="Título de la Página"
          value={newPage.title}
          // onChange={handleChange}
          required
        />
        <Textarea
          name="content"
          placeholder="Contenido de la Página"
          value={newPage.content}
          // onChange={handleChange}
          required
        />
        <select
          name="type"
          value={newPage.type}
          // onChange={handleChange}
          required
          className="border rounded p-2"
        >
          <option value="" disabled>Seleccionar Tipo de Página</option>
          {allowedPageTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        <Button type="submit">{editingPage ? 'Actualizar Página' : 'Crear Página'}</Button>
      </form>
      <div className="mt-8">
        <h2 className="text-xl font-bold">Páginas Existentes</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Título</TableHead>
              <TableHead>Contenido</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pages.map((page) => (
              <TableRow key={page.id}>
                <TableCell>{page.title}</TableCell>
                <TableCell>{page.content}</TableCell>
                <TableCell>{page.type}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEdit(page)}>Editar</Button>
                  <Button onClick={() => handleDelete(page.id)} className="ml-2">Eliminar</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
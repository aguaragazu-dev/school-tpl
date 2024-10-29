'use client';
import React, { useState } from 'react';
import CrudTable from '@/components/CrudTable';

type Item = {
  id: number;
  name: string;
  date: string;
  location: string;
};

const initialEvents: Item[] = [
  {
    id: 1,
    name: 'Annual Sports Day',
    date: '2023-07-15',
    location: 'School Grounds',
  },
  {
    id: 2,
    name: 'Parent-Teacher Meeting',
    date: '2023-08-01',
    location: 'School Auditorium',
  },
  { id: 3, name: 'Science Fair', date: '2023-09-10', location: 'School Hall' },
];

export default function EventsPage() {
  const [events, setEvents] = useState<Item[]>(initialEvents);

  const handleAdd = () => {
    // Implement add logic
    console.log('Add event');
  };

  const handleEdit = (item: Item) => {
    // Implement edit logic
    console.log('Edit event', item);
  };

  const handleDelete = (id: number) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  const columns = [
    { key: 'name', label: 'Event Name' },
    { key: 'date', label: 'Date' },
    { key: 'location', label: 'Location' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Events Management</h1>
      <CrudTable
        items={events}
        columns={columns}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

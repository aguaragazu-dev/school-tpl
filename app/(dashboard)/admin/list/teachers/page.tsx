'use client';
import React, { useState } from 'react';
import CrudTable from '@/components/CrudTable';

type Admission = {
  id: number;
  teacherName: string;
  subject: string;
  admissionDate: string;
};

const initialAdmissions: Admission[] = [
  {
    id: 1,
    teacherName: 'Dr. Emily White',
    subject: 'Mathematics',
    admissionDate: '2023-04-01',
  },
  {
    id: 2,
    teacherName: 'Prof. Michael Green',
    subject: 'Science',
    admissionDate: '2023-04-15',
  },
  {
    id: 3,
    teacherName: 'Ms. Sarah Black',
    subject: 'English',
    admissionDate: '2023-05-01',
  },
];

export default function TeacherAdmissionsPage() {
  const [admissions, setAdmissions] = useState<Admission[]>(initialAdmissions);

  const handleAdd = () => {
    // Implement add logic
    console.log('Add admission');
  };

  const handleEdit = (admission: Admission) => {
    // Implement edit logic
    console.log('Edit admission', admission);
  };

  const handleDelete = (id: number) => {
    setAdmissions(admissions.filter((admission) => admission.id !== id));
  };

  const columns = [
    { key: 'teacherName', label: 'Teacher Name' },
    { key: 'subject', label: 'Subject' },
    { key: 'admissionDate', label: 'Admission Date' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Teacher Admissions</h1>
      <CrudTable
        items={admissions}
        columns={columns}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

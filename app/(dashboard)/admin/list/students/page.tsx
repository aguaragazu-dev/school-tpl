'use client';
import React, { useState } from 'react';
import CrudTable from '@/components/CrudTable';

type Enrollment = {
  id: number;
  studentName: string;
  grade: string;
  enrollmentDate: string;
};

const initialEnrollments: Enrollment[] = [
  {
    id: 1,
    studentName: 'Alice Johnson',
    grade: '10th',
    enrollmentDate: '2023-05-01',
  },
  {
    id: 2,
    studentName: 'Bob Smith',
    grade: '9th',
    enrollmentDate: '2023-05-15',
  },
  {
    id: 3,
    studentName: 'Charlie Brown',
    grade: '11th',
    enrollmentDate: '2023-06-01',
  },
];

export default function StudentEnrollmentsPages() {
  const [enrollments, setEnrollments] =
    useState<Enrollment[]>(initialEnrollments);

  const handleAdd = () => {
    // Implement add logic
    console.log('Add enrollment');
  };

  const handleEdit = (enrollment: Enrollment) => {
    // Implement edit logic
    console.log('Edit enrollment', enrollment);
  };

  const handleDelete = (id: number) => {
    setEnrollments(enrollments.filter((enrollment) => enrollment.id !== id));
  };

  const columns = [
    { key: 'studentName', label: 'Student Name' },
    { key: 'grade', label: 'Grade' },
    { key: 'enrollmentDate', label: 'Enrollment Date' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Student Enrollments</h1>
      <CrudTable
        items={enrollments}
        columns={columns}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

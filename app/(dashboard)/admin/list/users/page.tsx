'use client';
import React, { useState } from 'react';
import CrudTable from '@/components/CrudTable';

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

const initialUsers: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Teacher' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Student' },
];

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>(initialUsers);

  const handleAdd = () => {
    // Implement add logic
    console.log('Add user');
  };

  const handleEdit = (user: User) => {
    // Implement edit logic
    console.log('Edit user', user);
  };

  const handleDelete = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Users Management</h1>
      <CrudTable
        items={users}
        columns={columns}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

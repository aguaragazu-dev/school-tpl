'use client';
import React, { useState } from 'react';
import CrudTable from '@/components/CrudTable';

type NewsItem = {
  id: number;
  title: string;
  date: string;
  author: string;
};

const initialNews: NewsItem[] = [
  {
    id: 1,
    title: 'School Wins National Award',
    date: '2023-06-01',
    author: 'John Doe',
  },
  {
    id: 2,
    title: 'New Science Lab Opening',
    date: '2023-06-15',
    author: 'Jane Smith',
  },
  {
    id: 3,
    title: 'Student Art Exhibition',
    date: '2023-07-01',
    author: 'Bob Johnson',
  },
];

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>(initialNews);

  const handleAdd = () => {
    // Implement add logic
    console.log('Add news item');
  };

  const handleEdit = (item: NewsItem) => {
    // Implement edit logic
    console.log('Edit news item', item);
  };

  const handleDelete = (id: number) => {
    setNews(news.filter((item) => item.id !== id));
  };

  const columns = [
    { key: 'title', label: 'Title' },
    { key: 'date', label: 'Date' },
    { key: 'author', label: 'Author' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">News Management</h1>
      <CrudTable
        items={news}
        columns={columns}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

import React from 'react';

type StatCardProps = {
  title: string;
  value: string;
  icon: React.ReactNode;
};

export default function StatCard({ title, value, icon }: StatCardProps) {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-xs">
      <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full">
        {icon}
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-gray-600">{title}</p>
        <p className="text-lg font-semibold text-gray-700">{value}</p>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Edit, Trash2, Plus } from 'lucide-react';

type Item = {
  id: number;
  [key: string]: any;
};

type CrudTableProps = {
  items: Item[];
  columns: { key: string; label: string }[];
  onAdd: () => void;
  onEdit: (item: Item) => void;
  onDelete: (id: number) => void;
};

export default function CrudTable({
  items,
  columns,
  onAdd,
  onEdit,
  onDelete,
}: CrudTableProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4 flex justify-between items-center bg-gray-50">
        <h2 className="text-xl font-semibold text-gray-800">Manage Items</h2>
        <button
          onClick={onAdd}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center"
        >
          <Plus size={20} className="mr-2" />
          Add New
        </button>
      </div>
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column.label}
              </th>
            ))}
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {items.map((item) => (
            <tr key={item.id}>
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                >
                  {item[column.key]}
                </td>
              ))}
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button
                  onClick={() => onEdit(item)}
                  className="text-indigo-600 hover:text-indigo-900 mr-4"
                >
                  <Edit size={20} />
                </button>
                <button
                  onClick={() => onDelete(item.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  <Trash2 size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

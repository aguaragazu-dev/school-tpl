import React from 'react';
import { Bell, Menu } from 'lucide-react';

type TopMenuProps = {
  onMenuToggle: () => void;
};

export default function TopMenu({ onMenuToggle }: TopMenuProps) {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between p-4">
        <button onClick={onMenuToggle} className="lg:hidden">
          <Menu size={24} />
        </button>
        <h1 className="text-2xl font-semibold">Estudiante</h1>
        <button className="p-2 rounded-full bg-gray-200">
          <Bell size={20} />
        </button>
      </div>
    </header>
  );
}

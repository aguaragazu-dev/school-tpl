import React from 'react';

import { Home, BookOpen, Bell } from 'lucide-react';
import NavItem from '../../admin/components/NavItem';

type SideMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SideMenu({ isOpen, onClose }: SideMenuProps) {
  return (
    <aside
      className={`${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } fixed inset-y-0 left-0 z-50 w-64 bg-blue-700 text-white transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
    >
      <div className="flex items-center justify-between p-4">
        <span className="text-2xl font-semibold">Portal Estudiante</span>
        <button onClick={onClose} className="lg:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <nav className="mt-8">
        <NavItem icon={<Home size={20} />} text="Inicio" href="/student" />
        <NavItem
          icon={<BookOpen size={20} />}
          text="Mis Materias"
          href="/student/courses"
        />
        <NavItem
          icon={<Bell size={20} />}
          text="Notificaciones"
          href="/student/notifications"
        />
      </nav>
    </aside>
  );
}

import React from 'react';
import NavItem from '../../admin/components/NavItem';
import {
  Home,
  BookOpen,
  Users,
  CheckSquare,
  FileText,
  DollarSign,
} from 'lucide-react';

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
        <span className="text-2xl font-semibold">Portal Docente</span>
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
        <NavItem icon={<Home size={20} />} text="Inicio" href="/teacher" />
        <NavItem
          icon={<BookOpen size={20} />}
          text="Mis Cursos"
          href="/teacher/courses"
        />
        <NavItem
          icon={<Users size={20} />}
          text="Mis Alumnos"
          href="/teacher/students"
        />
        <NavItem
          icon={<CheckSquare size={20} />}
          text="Asistencia"
          href="/teacher/attendance"
        />
        <NavItem
          icon={<FileText size={20} />}
          text="Calificaciones"
          href="/teacher/grades"
        />
        <NavItem
          icon={<DollarSign size={20} />}
          text="Mi Salario"
          href="/teacher/salary"
        />
      </nav>
    </aside>
  );
}

import React from 'react';
import NavItem from './NavItem';
import {
  Home,
  Users,
  FileText,
  Calendar,
  BookOpen,
  DollarSign,
  Bell,
  FileArchive,
} from 'lucide-react';

type SideMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SideMenuAdmin({ isOpen, onClose }: SideMenuProps) {
  return (
    <aside
      className={`${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } fixed inset-y-0 left-0 z-50 w-64 bg-blue-700 text-white transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
    >
      <div className="flex items-center justify-between p-4">
        <span className="text-2xl font-semibold">Escuela Admin</span>
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
        <NavItem icon={<Home size={20} />} text="Dashboard" href="/admin" />
        <NavItem
          icon={<Users size={20} />}
          text="Usuarios"
          href="/admin/list/users"
        />
        <NavItem
          icon={<FileText size={20} />}
          text="Noticias"
          href="/admin/list/news"
        />
        <NavItem
          icon={<Calendar size={20} />}
          text="Eventos"
          href="/admin/list/events"
        />
        <NavItem
          icon={<Users size={20} />}
          text="Matrículas"
          href="/admin/enrollments"
        />
        <NavItem
          icon={<Users size={20} />}
          text="Admisiones"
          href="/admin/admissions"
        />
        <NavItem
          icon={<BookOpen size={20} />}
          text="Asignar Materias"
          href="/admin/assign-courses"
        />
        <NavItem
          icon={<DollarSign size={20} />}
          text="Actualizar Haberes"
          href="/admin/update-salaries"
        />
        <NavItem
          icon={<Bell size={20} />}
          text="Enviar Notificaciones"
          href="/admin/send-notifications"
        />
        <NavItem
          icon={<FileArchive size={20} />}
          text="Emitir Cuotas"
          href="/admin/issue-invoices"
        />
      </nav>
    </aside>
  );
}

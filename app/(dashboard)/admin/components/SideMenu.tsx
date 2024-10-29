import React, { useState } from 'react';
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
  Settings,
} from 'lucide-react';

type SideMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  userRole: string; 
};

const menuConfig = [
  {
    section: 'Administración',
    icon: <Settings size={20} />,
    visible: ["admin"], 
    items: [
      { icon: <Home size={20} />, text: 'Dashboard', href: '/admin', visible: ["admin", "teacher", "student"] },
      { icon: <Users size={20} />, text: 'Usuarios', href: '/admin/list/users', visible: ["admin"] },
      { icon: <FileText size={20} />, text: 'Páginas', href: '/admin/pages', visible: ["admin", "teacher"] },
    ],
  },
  {
    section: 'Gestión Académica',
    icon: <BookOpen size={20} />,
    visible: ["admin", "teacher", "student"], 
    items: [
      { icon: <Calendar size={20} />, text: 'Eventos', href: '/admin/list/events', visible: ["admin", "teacher", "student"] },
      { icon: <Users size={20} />, text: 'Matrículas', href: '/admin/list/students', visible: ["admin", "teacher"] },
      { icon: <Users size={20} />, text: 'Admisiones', href: '/admin/list/teachers', visible: ["admin"] },
    ],
  },
  {
    section: 'Finanzas',
    icon: <DollarSign size={20} />,
    visible: ["admin", "teacher"], 
    items: [
      { icon: <Bell size={20} />, text: 'Enviar Notificaciones', href: '/admin/send-notifications', visible: ["admin"] },
      { icon: <FileArchive size={20} />, text: 'Emitir Cuotas', href: '/admin/issue-invoices', visible: ["admin"] },
    ],
  },
];

export default function SideMenuAdmin({ isOpen, onClose, userRole }: SideMenuProps) {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
    );
  };

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
        {menuConfig.map((section) => (
          section.visible.includes(userRole) && (
            <div key={section.section}>
              <div
                className="flex items-center cursor-pointer"
                onClick={() => toggleSection(section.section)}
              >
                {section.icon}
                <span className="ml-2">{section.section}</span>
              </div>
              {openSections.includes(section.section) && (
                <div className="ml-4">
                  {section.items.map((item) => (
                    item.visible.includes(userRole) && (
                      <NavItem key={item.text} icon={item.icon} text={item.text} href={item.href} />
                    )
                  ))}
                </div>
              )}
            </div>
          )
        ))}
      </nav>
    </aside>
  );
}

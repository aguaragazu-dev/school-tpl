import { IconType } from 'react-icons';
import {
  FiHome,
  FiUsers,
  FiCalendar,
  FiBook,
  FiDollarSign,
  FiBell,
  FiFileText,
  FiSettings,
  FiUserCheck,
  FiFile,
} from 'react-icons/fi';

import DashboardHome from '../page';
import UsersPage from '../list/users/page';
import EventsPage from '../list/events/page';
import TeacherAdmissionsPage from '../list/teachers/page';
import AssignCoursesPage from '../assign-courses/page';
import UpdateSalariesPage from '../update-salaries/page';
import SendNotificationsPage from '../send-notifications/page';
import IssueInvoicesPage from '../issue-invoices/page';
import NewsPage from '@/app/(front)/noticias/page';
import StudentEnrollmentsPages from '../list/students/page';
import PagesAdmin from '../list/pages/page';
import SettingsPage from '../settings/page';
import CategoriesPage from '../list/categories/page';
import RolePage from '../list/users/[userId]/roles/page';
import BlogPage from '../list/blog/page';

export type UserRole = 'ADMIN' | 'TEACHER' | 'STUDENT' | 'PARENT';

export interface MenuItem {
  path: string;
  component: React.ComponentType<any>;
  icon: IconType;
  label: string;
  visible?: UserRole[];
  children?: MenuItem[];
}

export interface MenuSection {
  title: string;
  icon: IconType;
  visible?: UserRole[];
  items: MenuItem[];
}

export const menuConfig: MenuSection[] = [
  {
    title: 'Administración',
    icon: FiSettings,
    visible: ['ADMIN'],
    items: [
      {
        path: '/admin',
        component: DashboardHome,
        icon: FiHome,
        label: 'Dashboard',
        visible: ['ADMIN'],
      },
      {
        path: '/admin/list/users',
        component: UsersPage,
        icon: FiUsers,
        label: 'Usuarios',
        visible: ['ADMIN'],
      },
      // {
      //   path: '/admin/list/users/roles',
      //   component: RolePage,
      //   icon: FiUsers,
      //   label: 'Roles',
      //   visible: ['ADMIN'],
      // },
      {
        path: '/admin/list/pages',
        component: PagesAdmin,
        icon: FiFileText,
        label: 'Páginas',
        visible: ['ADMIN'],
        children: [
          {
            path: '/admin/list/pages/new',
            component: PagesAdmin,
            icon: FiFileText,
            label: 'Nueva Página',
          },
        ],
      },
    ],
  },
  {
    title: 'Noticias & Eventos',
    icon: FiFile,
    visible: ['ADMIN'],
    items: [
      {
        path: '/admin/list/blog',
        component: BlogPage,
        icon: FiFile,
        label: 'Noticias',
        visible: ['ADMIN'],
      },
      {
        path: '/admin/list/events',
        component: EventsPage,
        icon: FiCalendar,
        label: 'Eventos',
        visible: ['ADMIN'],
      },
      {
        path: '/admin/list/categories',
        component: CategoriesPage,
        icon: FiFile,
        label: 'Categorías',
        visible: ['ADMIN'],
      },
    ],
  },
  {
    title: 'Gestión Académica',
    icon: FiBook,
    visible: ['ADMIN', 'TEACHER'],
    items: [
      {
        path: '/admin/list/students',
        component: StudentEnrollmentsPages,
        icon: FiUsers,
        label: 'Matrículas',
        visible: ['ADMIN', 'TEACHER'],
      },
      {
        path: '/admin/list/teachers',
        component: TeacherAdmissionsPage,
        icon: FiUserCheck,
        label: 'Admisiones',
        visible: ['ADMIN'],
      },
      {
        path: '/admin/assign-courses',
        component: AssignCoursesPage,
        icon: FiBook,
        label: 'Asignar Cursos',
        visible: ['ADMIN'],
      },
      {
        path: '/admin/update-salaries',
        component: UpdateSalariesPage,
        icon: FiDollarSign,
        label: 'Actualizar Salarios',
        visible: ['ADMIN'],
      },
    ],
  },
  {
    title: 'Finanzas',
    icon: FiDollarSign,
    visible: ['ADMIN'],
    items: [
      {
        path: '/admin/send-notifications',
        component: SendNotificationsPage,
        icon: FiBell,
        label: 'Enviar Notificaciones',
        visible: ['ADMIN'],
      },
      {
        path: '/admin/issue-invoices',
        component: IssueInvoicesPage,
        icon: FiFileText,
        label: 'Emitir Cuotas',
        visible: ['ADMIN'],
      },
    ],
  },
];

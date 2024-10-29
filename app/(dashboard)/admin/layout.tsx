'use client';
import React, { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import TopMenu from './components/TopMenu';
import DashboardHome from './page';
import UsersPage from './list/users/page';
import EventsPage from './list/events/page';
import TeacherAdmissionsPage from './list/teachers/page';
import AssignCoursesPage from './assign-courses/page';
import UpdateSalariesPage from './update-salaries/page';
import SendNotificationsPage from './send-notifications/page';
import IssueInvoicesPage from './issue-invoices/page';
import NewsPage from '@/app/(front)/noticias/page';
import StudentEnrollmentsPages from './list/students/page';
import { usePathname } from 'next/navigation';
import PagesAdmin from './pages/page';
import SettingsPage from './settings/page';
import SideMenuAdmin from './components/SideMenu';

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isLoaded, isSignedIn, user } = useUser();
  // const userRole = user?.role;
  const userRole = 'admin';
  const pathname = usePathname();

  if (!isLoaded || !isSignedIn) {
    return null; // or redirect to login
  }

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const renderContent = () => {
    switch (pathname) {
      case '/admin/list/users':
        return <UsersPage />;
      case '/admin/settings':
        return <SettingsPage />;
      case '/admin/pages':
        return <PagesAdmin />;
      case '/admin/list/news':
        return <NewsPage />;
      case '/admin/list/events':
        return <EventsPage />;
      case '/admin/list/students':
        return <StudentEnrollmentsPages />;
      case '/admin/list/teachers':
        return <TeacherAdmissionsPage />;
      case '/admin/assign-courses':
        return <AssignCoursesPage />;
      case '/admin/update-salaries':
        return <UpdateSalariesPage />;
      case '/admin/send-notifications':
        return <SendNotificationsPage />;
      case '/admin/issue-invoices':
        return <IssueInvoicesPage />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <SideMenuAdmin isOpen={sidebarOpen} onClose={toggleSidebar} userRole={userRole} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopMenu onMenuToggle={toggleSidebar} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

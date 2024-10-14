'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

import SideMenu from './components/SideMenu';
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

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const renderContent = () => {
    switch (pathname) {
      case '/admin/users':
        return <UsersPage />;
      case '/admin/news':
        return <NewsPage />;
      case '/admin/events':
        return <EventsPage />;
      case '/admin/enrollments':
        return <StudentEnrollmentsPages />;
      case '/admin/admissions':
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
      <SideMenu isOpen={sidebarOpen} onClose={toggleSidebar} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopMenu onMenuToggle={toggleSidebar} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

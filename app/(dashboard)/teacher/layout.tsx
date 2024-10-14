'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

import SideMenu from './components/SideMenu';
import DashboardHome from './page';
import CoursesPage from './courses/page';
import StudentsPage from './students/page';
import AttendancePage from './attendance/page';
import GradesPage from './grades/page';
import SalaryPage from './salary/page';
import Header from '@/components/Header';

export default function TeacherDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const renderContent = () => {
    switch (pathname) {
      case '/teacher/courses':
        return <CoursesPage />;
      case '/teacher/students':
        return <StudentsPage />;
      case '/teacher/attendance':
        return <AttendancePage />;
      case '/teacher/grades':
        return <GradesPage />;
      case '/teacher/salary':
        return <SalaryPage />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <SideMenu isOpen={sidebarOpen} onClose={toggleSidebar} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

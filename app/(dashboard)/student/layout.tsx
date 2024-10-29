'use client';
import React, { useState } from 'react';
import { useUser } from '@clerk/nextjs';

import SideMenu from './components/SideMenu';
import DashboardHome from './page';
import CoursesPage from './courses/page';
import NotificationsPage from './notifications/page';
import { usePathname } from 'next/navigation';

export default function StudentDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null; // or redirect to login
  }

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const renderContent = () => {
    switch (pathname) {
      case '/student/courses':
        return <CoursesPage />;
      case '/student/notifications':
        return <NotificationsPage />;
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

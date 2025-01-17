'use client';

import React, { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import { Toaster as ShadcnToaster } from '@/components/ui/toaster';
import { Toaster } from 'react-hot-toast';
import { TooltipProvider } from '@/components/ui/tooltip';
import TopMenu from './components/TopMenu';
import SideMenu from './components/SideMenu';
import { menuConfig } from './config/routes';

export default function AdminDashboard({ children }: { children: React.ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { isLoaded, isSignedIn, user } = useUser();
  const userRole = 'ADMIN'; // Replace with actual user role logic
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarCollapsed(true);
      } else {
        setSidebarCollapsed(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  if (!isLoaded || !isSignedIn || !mounted) {
    return null; // or redirect to login
  }

  const findRouteComponent = (path: string) => {
    for (const section of menuConfig) {
      for (const item of section.items) {
        if (item.path === path) return item.component;
        if (item.children) {
          const child = item.children.find(child => path.startsWith(child.path));
          if (child) return child.component;
        }
      }
    }
    // If no route is found, return the first route's component (Dashboard)
    return menuConfig[0].items[0].component;
  };

  const renderContent = () => {
    // For child routes (like new, edit), render the children prop
    const pathParts = pathname.split('/');
    if (pathParts[pathParts.length - 1] === 'new' || pathParts[pathParts.length - 1] === 'edit') {
      return children;
    }

    // For main routes, find and render the component
    const Component = findRouteComponent(pathname);
    return <Component />;
  };

  return (
    <TooltipProvider>
      <div className={`${isDarkMode ? 'dark' : ''}`}>
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
          <SideMenu
            isCollapsed={sidebarCollapsed}
            toggleSidebar={toggleSidebar}
            userRole={userRole}
            currentPath={pathname}
            menuConfig={menuConfig}
          />
          <div className="flex-1 flex flex-col overflow-hidden">
            <TopMenu
              onMenuToggle={toggleSidebar}
              isDarkMode={isDarkMode}
              toggleTheme={toggleTheme}
              user={user}
            />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900 p-4">
              {renderContent()}
            </main>
          </div>
        </div>
        <Toaster />
        <ShadcnToaster />
      </div>
    </TooltipProvider>
  );
}
'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import SideMenu from '@/components/SideMenu';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { data: session } = useSession();

  if (!session) {
    return null; // or redirect to login
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <div
        className={`${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="h-full overflow-y-auto">
          <div className="flex items-center justify-between p-4">
            <h2 className="text-xl font-semibold">Dashboard</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden"
            >
              <Menu />
            </Button>
          </div>
          <SideMenu />
        </div>
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden"
            >
              <Menu />
            </Button>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
</boltArtifact>

Now, let's add a dismissible Call-to-Action (CTA) component at the top of the navbar:

<boltArtifact id="dismissible-cta" title="Add dismissible CTA component">
<boltAction type="file" filePath="components/DismissibleCTA.tsx">
'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DismissibleCTAProps {
  message: string;
}

export default function DismissibleCTA({ message }: DismissibleCTAProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-blue-600 text-white py-2">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p>{message}</p>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsVisible(false)}
          className="text-white hover:bg-blue-700"
        >
          <X size={20} />
        </Button>
      </div>
    </div>
  );
}
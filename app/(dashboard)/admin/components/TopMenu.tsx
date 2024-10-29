'use client';

import React from 'react';
import { useUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';
import { useState } from 'react';

type TopMenuProps = {
  onMenuToggle: () => void;
};

export default function TopMenu({ onMenuToggle }: TopMenuProps) {
  const { user } = useUser();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark', !isDarkMode);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow">
      <Button onClick={onMenuToggle}>
        Menu
      </Button>
      <div className="flex items-center">
        <Button onClick={toggleDarkMode} className="mr-4">
          {isDarkMode ? <Sun /> : <Moon />}
        </Button>
        {user && (
          <div className="flex items-center">
            <img src={user.imageUrl} alt={user.fullName || 'avatar'} className="w-8 h-8 rounded-full mr-2" />
            <span>{user.firstName}</span>
          </div>
        ) }
      </div>
    </div>
  );
}

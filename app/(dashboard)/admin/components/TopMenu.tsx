import React from 'react';
import { UserResource } from '@clerk/types';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Menu } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type TopMenuProps = {
  onMenuToggle: () => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
  user: UserResource;
};

export default function TopMenu({ onMenuToggle, isDarkMode, toggleTheme, user }: TopMenuProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow transition-colors duration-200">
      <Button variant="ghost" size="icon" onClick={onMenuToggle}>
        <Menu className="h-5 w-5" />
      </Button>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
        {user && (
          <div className="flex items-center space-x-2">
            <Avatar>
              <AvatarImage src={user.imageUrl} alt={user.fullName || 'User avatar'} />
              <AvatarFallback>{user.firstName?.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium dark:text-white">{user.firstName}</span>
          </div>
        )}
      </div>
    </div>
  );
}
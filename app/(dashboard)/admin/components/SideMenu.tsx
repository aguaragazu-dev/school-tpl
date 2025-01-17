'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MenuSection, MenuItem, UserRole } from '../config/routes';

interface SideMenuProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
  userRole: UserRole;
  currentPath: string;
  menuConfig: MenuSection[];
}

export default function SideMenu({
  isCollapsed,
  toggleSidebar,
  userRole,
  currentPath,
  menuConfig,
}: SideMenuProps) {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const isVisible = (roles?: UserRole[]) => {
    if (!roles) return true;
    return roles.includes(userRole);
  };

  const renderMenuItem = (item: MenuItem, depth: number = 0) => {
    if (!isVisible(item.visible)) return null;

    const isActive = currentPath === item.path;
    const hasChildren = item.children && item.children.length > 0;
    const Icon = item.icon;

    return (
      <div key={item.path} className="w-full">
        <Link href={item.path}>
          <Button
            variant={isActive ? 'secondary' : 'ghost'}
            className={cn(
              'w-full justify-start',
              isCollapsed ? 'justify-center' : `pl-${(depth + 1) * 4}`
            )}
          >
            {Icon && (
              <Icon
                className={cn('h-4 w-4', !isCollapsed && 'mr-2')}
              />
            )}
            {!isCollapsed && (
              <>
                <span>{item.label}</span>
                {hasChildren && (
                  <ChevronRight
                    className={cn(
                      'ml-auto h-4 w-4 transition-transform',
                      openSections.includes(item.path) && 'rotate-90'
                    )}
                  />
                )}
              </>
            )}
          </Button>
        </Link>
        {hasChildren && !isCollapsed && (
          <Collapsible
            open={openSections.includes(item.path)}
            onOpenChange={() => toggleSection(item.path)}
          >
            <CollapsibleContent className="pl-4">
              {item.children?.map((child) => renderMenuItem(child, depth + 1))}
            </CollapsibleContent>
          </Collapsible>
        )}
      </div>
    );
  };

  return (
    <div
      className={cn(
        'relative border-r border-gray-200 dark:border-gray-800 h-full bg-white dark:bg-gray-950 transition-all duration-300',
        isCollapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="flex h-14 items-center justify-between px-4 border-b border-gray-200 dark:border-gray-800">
        {!isCollapsed && <span className="text-lg font-bold">Santa Rita</span>}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="h-8 w-8"
        >
          <ChevronLeft
            className={cn(
              'h-4 w-4 transition-transform',
              isCollapsed && 'rotate-180'
            )}
          />
        </Button>
      </div>

      <ScrollArea className="h-[calc(100vh-3.5rem)]">
        <div className="space-y-2 p-2">
          {menuConfig
            .filter((section) => isVisible(section.visible))
            .map((section) => (
              <div key={section.title} className="space-y-2">
                {!isCollapsed && (
                  <div
                    className="flex items-center px-2 py-1.5 text-sm font-semibold text-gray-500 dark:text-gray-400"
                    onClick={() => toggleSection(section.title)}
                  >
                    {section.icon && (
                      <section.icon className="mr-2 h-4 w-4" />
                    )}
                    <span>{section.title}</span>
                    <ChevronRight
                      className={cn(
                        'ml-auto h-4 w-4 transition-transform',
                        openSections.includes(section.title) && 'rotate-90'
                      )}
                    />
                  </div>
                )}
                <Collapsible
                  open={isCollapsed || openSections.includes(section.title)}
                  onOpenChange={() => toggleSection(section.title)}
                >
                  <CollapsibleContent className="space-y-1">
                    {section.items
                      .filter((item) => isVisible(item.visible))
                      .map((item) => renderMenuItem(item))}
                  </CollapsibleContent>
                </Collapsible>
              </div>
            ))}
        </div>
      </ScrollArea>
    </div>
  );
}
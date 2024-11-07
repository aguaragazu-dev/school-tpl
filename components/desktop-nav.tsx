'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

interface SubMenuItem {
  title: string;
  href: string;
}

interface MenuItem {
  title: string;
  href: string;
  submenu?: SubMenuItem[];
}

interface DesktopNavProps {
  menuItems: MenuItem[];
}

export function DesktopNav({ menuItems }: DesktopNavProps): JSX.Element {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <nav>
      <ul className="flex space-x-4 items-center">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="relative"
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {item.submenu ? (
              <>
                <button className="flex items-center">
                  {item.title} <ChevronDown size={16} className="ml-1" />
                </button>
                {hoveredItem === index && (
                  <div className="absolute top-full left-0 bg-blue-700 py-2 rounded-md shadow-lg">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className="block px-4 py-2 hover:bg-blue-600"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link href={item.href}>{item.title}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
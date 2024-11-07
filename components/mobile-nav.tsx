import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface SubMenuItem {
  title: string;
  href: string;
}

interface MenuItem {
  title: string;
  href: string;
  submenu?: SubMenuItem[];
}

interface MobileNavProps {
  menuItems: MenuItem[];
  toggleMenu: () => void;
}

export function MobileNav({ menuItems, toggleMenu }: MobileNavProps): JSX.Element {
  return (
    <div className="lg:hidden">
      <nav className="px-4 py-2">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              {item.submenu ? (
                <details>
                  <summary>{item.title}</summary>
                  <ul className="pl-4 mt-2 space-y-2">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link href={subItem.href} onClick={toggleMenu}>
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <Link href={item.href} onClick={toggleMenu}>
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
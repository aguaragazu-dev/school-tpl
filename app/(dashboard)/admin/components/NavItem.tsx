import React from 'react';
import Link from 'next/link';

type NavItemProps = {
  icon: React.ReactNode;
  text: string;
  href: string;
};

const NavItem: React.FC<NavItemProps> = ({ icon, text, href }) => {
  return (
    <Link
      href={href}
      className="flex items-center px-6 py-3 text-gray-100 hover:bg-blue-600"
    >
      {icon}
      <span className="mx-3">{text}</span>
    </Link>
  );
};

export default NavItem;
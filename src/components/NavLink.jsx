"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children, className }) => {
  const pathName = usePathname();
  const isActive = href === pathName;
  return (
    <Link href={href}
      className={`pb-1 transition-all font-medium text-green-700 duration-200 ${isActive ? "border-b-2 border-green-700 rounded-none" : "border-b-2 border-transparent"
        } ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface NavItem {
  text: string;
  href: string;
}

interface NavigationProps {
  navItems: NavItem[];
}

export const Navigation: React.FC<NavigationProps> = ({ navItems }) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <nav className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
          <svg aria-label="Vercel Logo" fill="var(--geist-foreground)" viewBox="0 0 75 65" height="26" data-testid="dashboard/logo"><path d="M37.59.25l36.95 64H.64l36.95-64z"></path></svg>
            <h1 className="ml-2 text-xl font-bold tracking-tight dark:text-white">
              Chef Aidda
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            {navItems.map((item, index) => (
            <Link key={index} href={item.href} className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" prefetch>
              {item.text}
            </Link>
            ))}
          </div>
        </div>
      </nav>
    </section>
  );
};


import React from 'react';
import { Link, useLocation } from 'wouter';

interface NavLink {
  href: string;
  label: string;
  icon?: string;
}

export function Navigation() {
  const [location] = useLocation();

  // Navigation links - will be persona-specific later
  const buyerLinks: NavLink[] = [
    { href: '/user/dashboard', label: 'Dashboard' },
    { href: '/user/buy-property', label: 'Find Properties' },
    { href: '/user/my-bids', label: 'My Bids' },
    { href: '/user/buybox', label: 'Buy Box' },
    { href: '/user/entities', label: 'My Entities' },
    { href: '/user/network', label: 'My Network' },
    { href: '/user/inbox', label: 'Inbox' },
    { href: '/user/profile', label: 'Profile' },
    { href: '/user/todos', label: 'To-Dos' },
  ];

  // These will be used later based on user role
  // const sellerLinks: NavLink[] = [
  //   { href: '/user/dashboard', label: 'Dashboard' },
  //   { href: '/user/list-property', label: 'List Property' },
  //   { href: '/user/my-listings', label: 'My Listings' },
  //   { href: '/user/my-offers', label: 'My Offers' },
  //   { href: '/user/network', label: 'My Network' },
  //   { href: '/user/inbox', label: 'Inbox' },
  //   { href: '/user/profile', label: 'Profile' },
  // ];
  //
  // const operatorLinks: NavLink[] = [
  //   { href: '/operator/dashboard', label: 'Dashboard' },
  //   { href: '/operator/instant-offer', label: 'Instant Offers' },
  //   { href: '/user/inbox', label: 'Inbox' },
  // ];
  //
  // const adminLinks: NavLink[] = [
  //   { href: '/admin/dashboard', label: 'Dashboard' },
  //   { href: '/admin/users', label: 'User Management' },
  //   { href: '/admin/entity-queue', label: 'Entity Queue' },
  //   { href: '/property-details-admin', label: 'Property Admin' },
  //   { href: '/upload-contacts', label: 'Upload Contacts' },
  // ];

  // For now, show buyer links (will be dynamic based on user role later)
  const links = buyerLinks;

  const isActive = (href: string) => location === href;

  return (
    <nav className="bg-white border-r border-gray-200 w-64 min-h-screen p-4 hidden md:block">
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>
              <a
                className={`
                  block px-4 py-2 rounded-lg transition-colors
                  ${isActive(link.href)
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                  }
                `}
              >
                {link.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

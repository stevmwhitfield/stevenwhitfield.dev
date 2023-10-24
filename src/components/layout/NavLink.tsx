'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLink {
  href: string;
  text: string;
}

const NavLink = ({ href, text }: NavLink) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={`text-accent ${pathname === href ? 'font-semibold' : ''}`}>
      {text}
    </Link>
  );
};

export default NavLink;

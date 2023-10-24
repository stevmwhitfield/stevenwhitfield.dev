import NavLink from './NavLink';

interface Link {
  href: string;
  text: string;
}

const links = [
  { href: '/', text: 'Home' },
  { href: '/about', text: 'About' },
  { href: '/projects', text: 'Projects' },
  { href: '/contact', text: 'Contact' },
] satisfies Link[];

const Navbar = () => {
  return (
    <header className='pb-12'>
      <nav className='max-w-md mx-auto flex flex-wrap justify-between gap-3'>
        {links.map((link, i) => (
          <NavLink key={i} href={link.href} text={link.text} />
        ))}
      </nav>
    </header>
  );
};

export default Navbar;

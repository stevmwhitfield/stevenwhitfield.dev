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
      <nav className='max-w-sm mx-auto flex flex-wrap justify-between'>
        {links.map((link, i) => {
          return (
            <>
              <NavLink key={i} href={link.href} text={link.text} />
              {i < links.length - 1 ? <p className='text-subtext'>·</p> : ''}
            </>
          );
        })}
      </nav>
    </header>
  );
};

export default Navbar;

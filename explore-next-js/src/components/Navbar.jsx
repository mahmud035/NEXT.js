import Link from 'next/link';

const navLinks = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/about',
    title: 'About',
  },
  {
    path: '/profile',
    title: 'Profile',
  },
  {
    path: '/blogs',
    title: 'Blogs',
  },
  {
    path: '/dashboard',
    title: 'Dashboard',
  },
];

const Navbar = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between py-4">
      <h1 className="text-3xl font-semibold">Next Hero</h1>
      <ul className="flex items-center justify-center gap-4">
        {navLinks.map(({ path, title }) => (
          <li key={path}>
            <Link href={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/PCS_logo.png';

const navLinks = [
  // { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/admissions', label: 'Admissions' },
];

export default function Navbar() {
  return (
    <header className="bg-surface border-b border-primary/10 shadow-sm sticky top-0 z-50">
      <nav className="flex justify-between items-center w-full px-lg py-sm max-w-container-max mx-auto">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Peculiar Children School" className="h-10 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-md">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              className={({ isActive }) =>
                isActive
                  ? 'font-label-bold text-label-bold text-primary font-bold border-b-2 border-secondary transition-colors duration-200 px-2 py-1'
                  : 'font-label-bold text-label-bold text-on-surface-variant font-medium hover:text-primary hover:bg-surface-container-low px-2 py-1 rounded transition-colors duration-200'
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <Link to="/admissions">
          <button className="bg-secondary-container text-primary font-bold px-md py-sm rounded-lg hover:scale-95 transition-transform shadow-md">
            Enroll Now
          </button>
        </Link>
      </nav>
    </header>
  );
}

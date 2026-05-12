import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="w-full py-xl px-lg flex flex-col md:flex-row justify-between items-start gap-md max-w-container-max mx-auto">
        <div className="space-y-sm max-w-xs">
          <img src={logo} alt="Peculiar Children School" className="h-14 w-auto" />
          <p className="text-on-primary/70 font-body-md">Empowering the next generation with excellence and greatness.</p>
          <p className="text-on-primary/80 font-label-bold">Email: info@peculiarchildrenschool.com</p>
        </div>

        <div className="flex flex-col gap-xs">
          <p className="text-secondary-fixed font-bold mb-2">Quick Links</p>
          <Link to="/admissions" className="text-on-primary/80 hover:text-on-primary font-label-bold transition-all duration-300 hover:underline decoration-secondary-container">Admissions</Link>
          <Link to="/about" className="text-on-primary/80 hover:text-on-primary font-label-bold transition-all duration-300 hover:underline decoration-secondary-container">Our Philosophy</Link>
          <Link to="/admissions" className="text-on-primary/80 hover:text-on-primary font-label-bold transition-all duration-300 hover:underline decoration-secondary-container">Contact Us</Link>
        </div>

        <div className="flex flex-col gap-sm">
          <p className="text-secondary-fixed font-bold">Contact</p>
          <p className="text-on-primary/80 font-label-bold">Zone F Block 152, Flat 2,<br />Jakande Estate Mile 2 Lagos</p>
        </div>
      </div>

      <div className="border-t border-on-primary/10 py-md px-lg text-center">
        <p className="text-on-primary/60 text-sm font-label-bold">© 2024 Peculiar Children School. Excellence and Greatness.</p>
      </div>
    </footer>
  );
}

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu,
  Home,
  BookOpen,
  GraduationCap,
  Megaphone,
  Mail
} from 'lucide-react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="nav-animation bg-dark-darker/60 backdrop-blur-md fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/Logo.png" 
              alt="NHSM Logo" 
              className="h-16 logo-pulse transition-transform duration-300 hover:scale-105 hover:animate-none" 
            />
            <img 
              src="/Finmatics logo.png" 
              alt="Finmatics Logo" 
              className="h-12 ml-2 transition-transform duration-300 hover:scale-105" 
            />
          </Link>
        </div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <ul className="flex space-x-1">
            <li className="fade-in delay-100 opacity-0">
              <NavLink to="/" label="Home" icon={<Home className="w-5 h-5" />} />
            </li>
            <li className="fade-in delay-200 opacity-0">
              <NavLink to="/study-guide" label="Study Guide" icon={<BookOpen className="w-5 h-5" />} />
            </li>
            <li className="fade-in delay-300 opacity-0">
              <NavLink to="/academic" label="Academic" icon={<GraduationCap className="w-5 h-5" />} />
            </li>
            <li className="fade-in delay-400 opacity-0">
              <NavLink to="/announcements" label="Announcements" icon={<Megaphone className="w-5 h-5" />} />
            </li>
            <li className="fade-in delay-500 opacity-0">
              <NavLink to="/contact" label="Contact" icon={<Mail className="w-5 h-5" />} />
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button - Aligned to right */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-darker/95 backdrop-blur-lg border-t border-white/10">
          <ul className="flex flex-col p-4 space-y-3">
            <li>
              <NavLink to="/" label="Home" icon={<Home className="w-5 h-5" />} />
            </li>
            <li>
              <NavLink to="/study-guide" label="Study Guide" icon={<BookOpen className="w-5 h-5" />} />
            </li>
            <li>
              <NavLink to="/academic" label="Academic" icon={<GraduationCap className="w-5 h-5" />} />
            </li>
            <li>
              <NavLink to="/announcements" label="Announcements" icon={<Megaphone className="w-5 h-5" />} />
            </li>
            <li>
              <NavLink to="/contact" label="Contact" icon={<Mail className="w-5 h-5" />} />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  icon?: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, icon }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link 
      to={to} 
      className={`
        flex flex-col items-center justify-center
        px-3 py-2 rounded-lg transition-all duration-300
        ${isActive ? 'text-white' : 'text-white/80 hover:text-white'}
        hover:bg-white/10
        min-w-[80px]
      `}
    >
      <span className={`mb-1 ${isActive ? 'text-secondary' : 'text-white/70'}`}>
        {icon}
      </span>
      <span className="text-xs uppercase tracking-wider">
        {label}
      </span>
    </Link>
  );
};

export default Navbar;
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="nav-animation bg-dark-darker/60 backdrop-blur-md fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="Assets/images/logo.png" 
              alt="NHSM Logo" 
              className="h-16 logo-pulse transition-transform duration-300 hover:scale-105 hover:animate-none" 
            />
            <img 
              src="Assets/images/finmatics logo.png" 
              alt="Finmatics Logo" 
              className="h-12 ml-2 transition-transform duration-300 hover:scale-105" 
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <ul className="flex space-x-2">
            <li className="fade-in delay-100 opacity-0">
              <NavLink to="/" label="Home" />
            </li>
            <li className="fade-in delay-200 opacity-0">
              <NavLink to="/study-guide" label="Study Guide" />
            </li>
            <li className="fade-in delay-300 opacity-0">
              <NavLink to="/announcements" label="Announcements" />
            </li>
            <li className="fade-in delay-400 opacity-0">
              <NavLink to="/contact" label="Contact" />
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 focus:outline-none"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-darker/95 backdrop-blur-lg">
          <ul className="flex flex-col p-4 space-y-4">
            <li><NavLink to="/" label="Home" /></li>
            <li><NavLink to="/study-guide" label="Study Guide" /></li>
            <li><NavLink to="/announcements" label="Announcements" /></li>
            <li><NavLink to="/contact" label="Contact" /></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link 
      to={to} 
      className={`
        text-lg font-medium px-4 py-2 rounded-lg transition-all duration-300
        relative overflow-hidden uppercase
        bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-secondary to-accent
        hover:text-white hover:bg-white/10
        ${isActive ? 'after:bg-secondary' : 'after:bg-gradient-to-r after:from-pink-500 after:via-secondary after:to-accent'}
        after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5
        after:transform after:scale-x-0 after:origin-right after:transition-transform
        hover:after:scale-x-100 hover:after:origin-left after:duration-300
      `}
    >
      {label}
    </Link>
  );
};

export default Navbar;
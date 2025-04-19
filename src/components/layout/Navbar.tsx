import { useState } from 'react';
import { Link } from 'wouter';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navbar = ({ activeSection, onNavigate }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary">
              Rudra Vaishnav
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => handleClick(link.id)}
                className={`py-2 text-sm font-medium transition duration-150 ease-in-out ${
                  activeSection === link.id ? 'text-primary border-b-2 border-primary' : 'text-gray-700 hover:text-primary'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-white shadow-md ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                activeSection === link.id
                  ? 'bg-primary text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

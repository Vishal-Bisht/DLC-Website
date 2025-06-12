import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import AccessibilityDropdown from './AccessibilityDropdown';

const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: t('Home'), path: '/' },
    { name: t('Tutorials'), path: '/tutorials' },
    { name: t('AI Chat'), path: '/ai-chat' },
    { name: t('Feedback'), path: '/feedback' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-40">
      <nav className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">DLC</span>
            <span className="text-sm ml-2 text-gray-700">Digital Literacy Campaign</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-gray-600 hover:text-blue-600 font-medium transition-colors text-lg ${
                    isActive ? 'text-blue-600' : ''
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <AccessibilityDropdown />
            <LanguageSelector />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-3 px-4 text-lg text-gray-600 hover:text-blue-600 ${
                    isActive ? 'text-blue-600 font-medium' : ''
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="px-4 mt-4 flex items-center gap-4">
              <AccessibilityDropdown />
              <LanguageSelector />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
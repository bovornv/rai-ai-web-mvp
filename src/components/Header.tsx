import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'th' ? 'en' : 'th';
    i18n.changeLanguage(newLang);
  };

  const navItems = [
    { key: 'home', path: '/' },
    { key: 'weather', path: '/weather' },
    { key: 'scan', path: '/scan' },
    { key: 'fields', path: '/fields' },
    { key: 'about', path: '/about' },
    { key: 'help', path: '/help' },
    { key: 'download', path: '/apkdownload' },
  ];

  return (
    <header className="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-rai-green-500 to-rai-teal-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">ไร่</span>
            </div>
            <span className="text-xl font-bold text-rai-green-700 ">
              {i18n.language === 'th' ? 'ไร่ AI' : 'Rai AI'}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${
                  location.pathname === item.path
                    ? 'text-pri-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-pri-500 after:rounded-full'
                    : 'text-ink-soft hover:text-pri-600 hover:bg-blue-50'
                }`}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-rai-green-700 hover:bg-rai-green-50 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{i18n.language === 'th' ? 'EN' : 'ไทย'}</span>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-rai-green-700 hover:bg-rai-green-50"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-surface-border">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-pri-600 bg-blue-50'
                      : 'text-ink-soft hover:text-pri-600 hover:bg-blue-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

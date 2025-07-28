import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Residence Kalado <span className="text-yellow-600">Saly</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#accueil" className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">
              Accueil
            </a>
            <a href="#chambres" className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">
              Chambres & Suites
            </a>
            <a href="#restaurant" className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">
              Restaurant
            </a>
            <a href="#spa" className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">
              Spa & Bien-être
            </a>
            <a href="#evenements" className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">
              Événements
            </a>
            <a href="#galerie" className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">
              Galerie
            </a>
            <a href="#contact" className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-gray-600" />
              <select className="text-sm text-gray-700 bg-transparent border-none focus:outline-none">
                <option value="fr">FR</option>
                <option value="en">EN</option>
              </select>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>+221 76 361 77 95</span>
            </div>
            <button className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition-colors font-medium">
              Réserver
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <nav className="py-4">
              <a
                href="#accueil"
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-yellow-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </a>
              <a
                href="#chambres"
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-yellow-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Chambres & Suites
              </a>
              <a
                href="#restaurant"
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-yellow-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Restaurant
              </a>
              <a
                href="#spa"
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-yellow-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Spa & Bien-être
              </a>
              <a
                href="#evenements"
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-yellow-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Événements
              </a>
              <a
                href="#galerie"
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-yellow-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Galerie
              </a>
              <a
                href="#contact"
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-yellow-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="px-4 py-3 border-t">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-gray-600" />
                    <select className="text-sm text-gray-700 bg-transparent border-none focus:outline-none">
                      <option value="fr">Français</option>
                      <option value="en">English</option>
                    </select>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>+221 361 77 95</span>
                  </div>
                </div>
                <button className="w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition-colors font-medium">
                  Réserver
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
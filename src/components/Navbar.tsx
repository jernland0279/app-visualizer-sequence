
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, ChevronDown, Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-white shadow-sm">
      {/* Top navbar - Secondary navigation */}
      <div className="bg-gray-100 py-2">
        <div className="container-custom flex justify-between items-center">
          <div className="flex space-x-4">
            <Link to="/skills" className="text-sm nav-link">PECB Skills</Link>
            <Link to="/conference" className="text-sm nav-link">Conférence PECB</Link>
            <Link to="/magazine" className="text-sm nav-link">Magazine PECB</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-sm nav-link flex items-center">
              <span className="mr-1">Se connecter</span>
            </Link>
            <Link to="/partners" className="text-sm nav-link">Devenir partenaires</Link>
            <Link to="/shop" className="text-sm nav-link flex items-center">
              <ShoppingCart className="h-4 w-4 mr-1" />
              <span>Boutique</span>
            </Link>
            <div className="relative">
              <button className="text-sm flex items-center nav-link">
                <Globe className="h-4 w-4 mr-1" />
                <span>FR</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-primary">PECB</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/formation" className="nav-link font-medium">Formation et certification</Link>
            <Link to="/e-learning" className="nav-link font-medium">e-Learning</Link>
            <Link to="/reseau" className="nav-link font-medium">Réseau PECB</Link>
            <Link to="/calendrier" className="nav-link font-medium">Calendrier des formations</Link>
            <Link to="/ressources" className="nav-link font-medium">Ressources</Link>
            <Link to="/about" className="nav-link font-medium">À propos</Link>
            <Link to="/contact" className="nav-link font-medium">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
          <div className="container-custom py-3">
            <div className="flex flex-col space-y-3">
              <Link to="/formation" className="nav-link py-2" onClick={toggleMenu}>Formation et certification</Link>
              <Link to="/e-learning" className="nav-link py-2" onClick={toggleMenu}>e-Learning</Link>
              <Link to="/reseau" className="nav-link py-2" onClick={toggleMenu}>Réseau PECB</Link>
              <Link to="/calendrier" className="nav-link py-2" onClick={toggleMenu}>Calendrier des formations</Link>
              <Link to="/ressources" className="nav-link py-2" onClick={toggleMenu}>Ressources</Link>
              <Link to="/about" className="nav-link py-2" onClick={toggleMenu}>À propos</Link>
              <Link to="/contact" className="nav-link py-2" onClick={toggleMenu}>Contact</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

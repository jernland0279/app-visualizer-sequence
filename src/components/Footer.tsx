
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">À propos de PECB</h3>
            <p className="text-gray-300 mb-4">PECB est un organisme de certification qui fournit des services de formation et de certification des personnes sur les normes internationales.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><Link to="/formation" className="text-gray-300 hover:text-white transition-colors">Formation et certification</Link></li>
              <li><Link to="/e-learning" className="text-gray-300 hover:text-white transition-colors">e-Learning</Link></li>
              <li><Link to="/calendrier" className="text-gray-300 hover:text-white transition-colors">Calendrier des formations</Link></li>
              <li><Link to="/ressources" className="text-gray-300 hover:text-white transition-colors">Ressources</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Programmes</h3>
            <ul className="space-y-2">
              <li><Link to="/iso27001" className="text-gray-300 hover:text-white transition-colors">ISO/IEC 27001</Link></li>
              <li><Link to="/iso22301" className="text-gray-300 hover:text-white transition-colors">ISO 22301</Link></li>
              <li><Link to="/cmmc" className="text-gray-300 hover:text-white transition-colors">CMMC</Link></li>
              <li><Link to="/iso9001" className="text-gray-300 hover:text-white transition-colors">ISO 9001</Link></li>
              <li><Link to="/all-courses" className="text-gray-300 hover:text-white transition-colors">Tous les cours</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <address className="not-italic text-gray-300">
              <p className="mb-2">6683 rue Jean-Talon Est, Suite 336</p>
              <p className="mb-2">Montréal, QC, H1S 0A5</p>
              <p className="mb-2">Canada</p>
              <p className="mb-2">
                <a href="mailto:info@pecb.com" className="hover:text-white transition-colors">info@pecb.com</a>
              </p>
              <p>
                <a href="tel:+18446267322" className="hover:text-white transition-colors">+1 844 426 7322</a>
              </p>
            </address>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© {new Date().getFullYear()} PECB. Tous droits réservés.</p>
            <div className="flex space-x-4">
              <Link to="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">Politique de confidentialité</Link>
              <Link to="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">Conditions d'utilisation</Link>
              <Link to="/cookies" className="text-gray-400 text-sm hover:text-white transition-colors">Politique de cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

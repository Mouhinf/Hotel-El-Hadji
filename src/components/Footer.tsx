import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              Residenc Kalado <span className="text-yellow-400">Saly</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Un hôtel d'exception au cœur de Dakar, où l'hospitalité sénégalaise 
              rencontre le raffinement international pour vous offrir une expérience inoubliable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a href="#accueil" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#chambres" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Chambres & Suites
                </a>
              </li>
              <li>
                <a href="#restaurant" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Restaurant & Bar
                </a>
              </li>
              <li>
                <a href="#spa" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Spa & Bien-être
                </a>
              </li>
              <li>
                <a href="#evenements" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Événements
                </a>
              </li>
              <li>
                <a href="#galerie" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Galerie
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Réservation en ligne
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Service concierge
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Transfert aéroport
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Location de voiture
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Excursions touristiques
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Service de blanchisserie
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Saly Station Villa N21</p>
                  <p className="text-gray-300">Thiès, Sénégal</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+221 76 361 77 95</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">contact@residencekalado.sn</p>
                  <p className="text-gray-300">reservation@residencekalado.sn</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h5 className="font-semibold mb-3">Newsletter</h5>
              <p className="text-gray-400 text-sm mb-4">
                Recevez nos offres exclusives et actualités
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-yellow-400 text-white"
                />
                <button className="bg-yellow-600 text-white px-4 py-2 rounded-r-lg hover:bg-yellow-700 transition-colors">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} Hôtel Residence Kalado Saly. Tous droits réservés.
              </p>
              <div className="flex items-center text-gray-400 text-sm">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 mx-1" />
                <span>in Senegal</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                CGV
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Plan du site
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Calendar, MapPin, Star, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/613459506.jpg"
          alt="Hôtel El Hadji Ngor"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center justify-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-lg sm:text-xl text-gray-200 mb-2">Bienvenue à</p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4">
            El Hadji <span className="text-yellow-400">Ngor</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-6">
            L'Excellence Hôtelière au Cœur de Dakar
          </p>
        </div>

        <div className="flex items-center justify-center space-x-2 mb-8">
          <MapPin className="w-5 h-5 text-yellow-400" />
          <span className="text-lg">Ngor, Dakar - Sénégal</span>
        </div>

        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-12 leading-relaxed">
          Découvrez un havre de paix où le luxe rencontre l'authenticité sénégalaise. 
          Une expérience hôtelière unique alliant confort moderne et traditions locales.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="bg-yellow-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg">
            <Calendar className="w-5 h-5" />
            <span>Réserver Maintenant</span>
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center space-x-2">
            <span>Découvrir l'Hôtel</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
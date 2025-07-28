import React from 'react';
import { Droplets, Flower2, Sparkles, Heart, Clock, ArrowRight } from 'lucide-react';

const Spa: React.FC = () => {
  const treatments = [
    {
      name: 'Massage Traditionnel Sénégalais',
      duration: '90 min',
      price: '65.000',
      description: 'Massage relaxant aux huiles de karité et d\'argan, inspiré des techniques ancestrales sénégalaises.',
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      name: 'Soin Visage Hydratant',
      duration: '60 min',
      price: '45.000',
      description: 'Soin complet à base d\'ingrédients naturels locaux pour une peau éclatante et hydratée.',
      image: 'https://images.pexels.com/photos/3738347/pexels-photo-3738347.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      name: 'Enveloppement Corporel',
      duration: '75 min',
      price: '55.000',
      description: 'Enveloppement détoxifiant aux algues marines et argile blanche pour une peau douce et tonifiée.',
      image: 'https://images.pexels.com/photos/3757957/pexels-photo-3757957.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    }
  ];

  const facilities = [
    {
      icon: Droplets,
      name: 'Piscine Intérieure',
      description: 'Piscine chauffée avec vue panoramique'
    },
    {
      icon: Flower2,
      name: 'Jacuzzi',
      description: 'Bains bouillonnants pour la détente'
    },
    {
      icon: Sparkles,
      name: 'Sauna & Hammam',
      description: 'Espaces de relaxation et purification'
    },
    {
      icon: Heart,
      name: 'Salle de Méditation',
      description: 'Espace zen pour la sérénité intérieure'
    }
  ];

  return (
    <section id="spa" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Spa & <span className="text-yellow-600">Bien-être</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Échappez-vous dans notre oasis de tranquillité où tradition et modernité se rencontrent 
            pour vous offrir une expérience de bien-être absolue.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative rounded-2xl overflow-hidden mb-16 shadow-2xl">
          <img
            src="/613453133.jpg"
            alt="Spa Residence Kalado Saly"
            className="w-full h-96 lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">Votre Sanctuaire de Paix</h3>
              <p className="text-xl">Où chaque moment devient une évasion</p>
            </div>
          </div>
        </div>

        {/* Facilities */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mb-4">
                <facility.icon className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{facility.name}</h3>
              <p className="text-sm text-gray-600">{facility.description}</p>
            </div>
          ))}
        </div>

        {/* Treatments */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nos Soins <span className="text-yellow-600">Signature</span>
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full">
                    <div className="flex items-center space-x-1 text-sm font-medium text-gray-700">
                      <Clock className="w-4 h-4" />
                      <span>{treatment.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-gray-900 leading-tight">{treatment.name}</h4>
                    <div className="text-right ml-4">
                      <p className="text-xl font-bold text-yellow-600">{treatment.price}</p>
                      <p className="text-xs text-gray-500">FCFA</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{treatment.description}</p>

                  <button className="w-full bg-yellow-600 text-white py-3 rounded-lg hover:bg-yellow-700 transition-colors font-medium">
                    Réserver ce Soin
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Packages */}
        <div className="mt-20 bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Forfaits <span className="text-yellow-600">Détente</span>
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Profitez de nos forfaits exclusifs combinant plusieurs soins pour une expérience complète de bien-être.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-xl p-6 hover:border-yellow-600 transition-colors">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Forfait Évasion</h4>
              <p className="text-gray-600 mb-4">Massage traditionnel + Soin visage + Accès aux installations</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-yellow-600">95.000 FCFA</span>
                <span className="text-sm text-gray-500 line-through">110.000 FCFA</span>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 hover:border-yellow-600 transition-colors">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Forfait Régénération</h4>
              <p className="text-gray-600 mb-4">Enveloppement + Massage + Soin visage + Journée spa</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-yellow-600">145.000 FCFA</span>
                <span className="text-sm text-gray-500 line-through">165.000 FCFA</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors flex items-center space-x-2 mx-auto">
              <span>Découvrir Tous les Forfaits</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spa;
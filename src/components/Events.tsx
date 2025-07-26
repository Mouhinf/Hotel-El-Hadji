import React from 'react';
import { Users, Presentation, Music, Heart, Calendar, ArrowRight } from 'lucide-react';

const Events: React.FC = () => {
  const eventSpaces = [
    {
      name: 'Grande Salle de Réception',
      capacity: '300 personnes',
      area: '400 m²',
      description: 'Espace modulable avec équipements audiovisuels haut de gamme, parfait pour mariages, galas et grandes réceptions.',
      image: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Scène intégrée', 'Éclairage professionnel', 'Sonorisation', 'Climatisation']
    },
    {
      name: 'Salle de Conférence',
      capacity: '120 personnes',
      area: '150 m²',
      description: 'Salle moderne équipée pour séminaires, formations et réunions d\'entreprise avec vue panoramique.',
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Projecteur 4K', 'Visioconférence', 'WiFi haut débit', 'Service traiteur']
    },
    {
      name: 'Salon Privé',
      capacity: '50 personnes',
      area: '80 m²',
      description: 'Espace intimiste pour réunions executives, dîners privés et célébrations familiales.',
      image: 'https://images.pexels.com/photos/2747448/pexels-photo-2747448.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Mobilier modulable', 'Terrasse privée', 'Bar intégré', 'Service personnalisé']
    }
  ];

  const eventTypes = [
    {
      icon: Heart,
      name: 'Mariages',
      description: 'Célébrez votre union dans un cadre idyllique avec nos services sur mesure'
    },
    {
      icon: Presentation,
      name: 'Séminaires',
      description: 'Espaces professionnels équipés pour vos événements d\'entreprise'
    },
    {
      icon: Music,
      name: 'Réceptions',
      description: 'Galas, anniversaires et fêtes privées dans nos salons élégants'
    },
    {
      icon: Users,
      name: 'Conférences',
      description: 'Installations modernes pour vos événements corporatifs et formations'
    }
  ];

  return (
    <section id="evenements" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Espaces <span className="text-yellow-600">Événements</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transformez vos événements en moments mémorables dans nos espaces d'exception, 
            alliant élégance, technologie et service personnalisé.
          </p>
        </div>

        {/* Event Types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {eventTypes.map((type, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-yellow-50 transition-colors group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                <type.icon className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{type.description}</p>
            </div>
          ))}
        </div>

        {/* Event Spaces */}
        <div className="space-y-16">
          {eventSpaces.map((space, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden rounded-xl shadow-2xl group">
                  <img
                    src={space.image}
                    alt={space.name}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gray-600" />
                      <span className="text-sm font-medium text-gray-700">{space.capacity}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 space-y-6">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{space.name}</h3>
                  <div className="flex items-center space-x-6 text-gray-600 mb-4">
                    <span className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-yellow-600" />
                      <span>{space.capacity}</span>
                    </span>
                    <span className="flex items-center space-x-2">
                      <Presentation className="w-5 h-5 text-yellow-600" />
                      <span>{space.area}</span>
                    </span>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">{space.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Équipements Inclus</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {space.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition-colors font-medium">
                    Demander un Devis
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-yellow-600 hover:text-yellow-600 transition-colors font-medium flex items-center justify-center space-x-2">
                    <span>Visite Virtuelle</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Services <span className="text-yellow-600">Complémentaires</span>
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Nous vous accompagnons dans tous les aspects de votre événement pour une réussite garantie.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Calendar className="w-8 h-8 text-yellow-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Planning Personnalisé</h4>
              <p className="text-gray-600 text-sm">Organisation complète de votre événement</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="w-8 h-8 text-yellow-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Décoration Sur Mesure</h4>
              <p className="text-gray-600 text-sm">Ambiance et décoration personnalisées</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Music className="w-8 h-8 text-yellow-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Animation & Musique</h4>
              <p className="text-gray-600 text-sm">Prestations artistiques et sonorisation</p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors flex items-center space-x-2 mx-auto">
              <span>Organiser Mon Événement</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
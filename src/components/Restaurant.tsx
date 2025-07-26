import React from 'react';
import { Clock, ChefHat, Wine, Utensils, ArrowRight } from 'lucide-react';

const Restaurant: React.FC = () => {
  const restaurants = [
    {
      name: 'Le Teranga',
      type: 'Restaurant Principal',
      description: 'Découvrez une cuisine gastronomique alliant saveurs internationales et spécialités sénégalaises dans un cadre élégant avec vue sur l\'océan.',
      image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      hours: '07h00 - 23h00',
      specialties: ['Thieboudienne Gourmand', 'Poissons Grillés', 'Cuisine Internationale']
    },
    {
      name: 'Le Baobab Lounge',
      type: 'Bar & Cocktails',
      description: 'Un bar sophistiqué proposant une sélection de cocktails créatifs, vins fins et une ambiance décontractée face au coucher de soleil.',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      hours: '17h00 - 02h00',
      specialties: ['Cocktails Signature', 'Vins Premium', 'Tapas Fusion']
    }
  ];

  const features = [
    {
      icon: ChefHat,
      title: 'Chef Étoilé',
      description: 'Notre chef primé marie traditions locales et techniques modernes'
    },
    {
      icon: Wine,
      title: 'Cave d\'Exception',
      description: 'Plus de 200 références de vins soigneusement sélectionnées'
    },
    {
      icon: Utensils,
      title: 'Service Raffiné',
      description: 'Personnel formé pour un service d\'excellence à la française'
    }
  ];

  return (
    <section id="restaurant" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Restaurants & <span className="text-yellow-600">Bars</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une expérience culinaire d'exception vous attend dans nos espaces gastronomiques, 
            où chaque repas devient un voyage sensoriel unique.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Restaurants */}
        <div className="space-y-16">
          {restaurants.map((restaurant, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden rounded-xl shadow-2xl group">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>

              <div className="lg:w-1/2 space-y-6">
                <div>
                  <p className="text-yellow-600 font-semibold text-lg mb-2">{restaurant.type}</p>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{restaurant.name}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{restaurant.description}</p>
                </div>

                <div className="flex items-center space-x-3 text-gray-700">
                  <Clock className="w-5 h-5 text-yellow-600" />
                  <span className="font-medium">Horaires: {restaurant.hours}</span>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Spécialités de la Maison</h4>
                  <div className="space-y-2">
                    {restaurant.specialties.map((specialty, specialtyIndex) => (
                      <div key={specialtyIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                        <span className="text-gray-600">{specialty}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition-colors font-medium">
                    Réserver une Table
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-yellow-600 hover:text-yellow-600 transition-colors font-medium flex items-center justify-center space-x-2">
                    <span>Voir le Menu</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Service Traiteur & Événements Privés
          </h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Organisez vos événements privés avec notre service traiteur d'exception. 
            Mariages, anniversaires, réceptions d'entreprise - nous créons des moments inoubliables.
          </p>
          <button className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors flex items-center space-x-2 mx-auto">
            <span>Demander un Devis</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Restaurant;
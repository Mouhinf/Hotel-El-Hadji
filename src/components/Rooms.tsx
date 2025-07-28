import React from 'react';
import { Users, Wifi, Car, Coffee, Star, ArrowRight } from 'lucide-react';

interface Room {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  features: string[];
  maxGuests: number;
}

const Rooms: React.FC = () => {
  const rooms: Room[] = [
    {
      id: '1',
      name: 'Suite Présidentielle',
      description: 'L\'excellence à l\'état pur avec une vue panoramique sur l\'océan Atlantique. Espace de 120m² avec salon séparé et terrasse privée.',
      image: '/286092500.jpg',
      price: '350.000',
      features: ['Vue océan', 'Terrasse privée', 'Salon séparé', 'Service concierge'],
      maxGuests: 4
    },
    {
      id: '2',
      name: 'Suite Junior',
      description: 'Élégance et confort dans un espace raffiné de 80m². Parfait équilibre entre intimité et fonctionnalité.',
      image: '/NEW.jpg',
      price: '180.000',
      features: ['Balcon privé', 'Coin salon', 'Minibar', 'Salle de bain luxe'],
      maxGuests: 3
    },
    {
      id: '3',
      name: 'Chambre Deluxe',
      description: 'Confort moderne avec une décoration inspirée de l\'art sénégalais. 45m² d\'espace soigneusement aménagé.',
      image: '/311270013.jpg',
      price: '120.000',
      features: ['Vue jardin', 'Décor local', 'Bureau', 'Salle de bain moderne'],
      maxGuests: 2
    },
    {
      id: '4',
      name: 'Chambre Standard',
      description: 'Tout le confort nécessaire dans un cadre chaleureux et accueillant. 35m² optimisés pour votre bien-être.',
      image: '/311268374.jpg',
      price: '85.000',
      features: ['Climatisation', 'TV satellite', 'Coffre-fort', 'Douche moderne'],
      maxGuests: 2
    }
  ];

  const amenities = [
    { icon: Wifi, name: 'WiFi Gratuit' },
    { icon: Car, name: 'Parking Gratuit' },
    { icon: Coffee, name: 'Service Chambre 24h/24' },
    { icon: Star, name: 'Service de Conciergerie' }
  ];

  return (
    <section id="chambres" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Chambres & <span className="text-yellow-600">Suites</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez nos espaces d'exception, alliant raffinement contemporain et touches authentiques sénégalaises. 
            Chaque chambre est conçue pour vous offrir un séjour inoubliable.
          </p>
        </div>

        {/* Amenities */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <amenity.icon className="w-8 h-8 text-yellow-600 mb-3" />
              <span className="text-gray-700 font-medium">{amenity.name}</span>
            </div>
          ))}
        </div>

        {/* Rooms Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">{room.maxGuests} pers.</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{room.name}</h3>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-yellow-600">{room.price}</p>
                    <p className="text-sm text-gray-500">FCFA / nuit</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{room.description}</p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {room.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex space-x-4">
                  <button className="flex-1 bg-yellow-600 text-white py-3 rounded-lg hover:bg-yellow-700 transition-colors font-medium">
                    Réserver
                  </button>
                  <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:border-yellow-600 hover:text-yellow-600 transition-colors">
                    <span className="mr-2">Détails</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors flex items-center space-x-2 mx-auto">
            <span>Voir Toutes les Chambres</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
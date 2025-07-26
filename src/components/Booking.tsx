import React, { useState } from 'react';
import { Calendar, Users, Bed, Search, MapPin, Star } from 'lucide-react';

const Booking: React.FC = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [roomType, setRoomType] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    console.log('Booking submitted:', { checkIn, checkOut, guests, roomType });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Réservez Votre <span className="text-yellow-400">Séjour</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Vivez une expérience inoubliable dans notre établissement d'exception. 
            Sélectionnez vos dates et laissez-nous vous accueillir.
          </p>
        </div>

        {/* Booking Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Date Selection */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Date d'arrivée
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Date de départ
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Guests and Room Selection */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      <Users className="w-4 h-4 inline mr-2" />
                      Nombre de personnes
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(parseInt(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                    >
                      <option value={1}>1 personne</option>
                      <option value={2}>2 personnes</option>
                      <option value={3}>3 personnes</option>
                      <option value={4}>4 personnes</option>
                      <option value={5}>5+ personnes</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      <Bed className="w-4 h-4 inline mr-2" />
                      Type de chambre
                    </label>
                    <select
                      value={roomType}
                      onChange={(e) => setRoomType(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                    >
                      <option value="">Toutes les chambres</option>
                      <option value="standard">Chambre Standard</option>
                      <option value="deluxe">Chambre Deluxe</option>
                      <option value="junior-suite">Suite Junior</option>
                      <option value="presidential">Suite Présidentielle</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-yellow-600 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-3 mx-auto"
                  >
                    <Search className="w-5 h-5" />
                    <span>Rechercher & Réserver</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Benefits */}
            <div className="bg-gray-50 px-8 lg:px-12 py-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Meilleur Prix Garanti</h4>
                  <p className="text-sm text-gray-600">Réservez directement pour obtenir nos meilleurs tarifs</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calendar className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Annulation Gratuite</h4>
                  <p className="text-sm text-gray-600">Annulation gratuite jusqu'à 24h avant l'arrivée</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Emplacement Idéal</h4>
                  <p className="text-sm text-gray-600">Au cœur de Ngor avec vue sur l'océan</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Special Offers */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Offres Spéciales</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-lg font-semibold text-white mb-2">Séjour Romantique</h4>
              <p className="text-gray-300 text-sm mb-4">2 nuits minimum - Champagne et petit-déjeuner inclus</p>
              <span className="text-yellow-400 font-bold">-15% sur le séjour</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-lg font-semibold text-white mb-2">Évasion Bien-être</h4>
              <p className="text-gray-300 text-sm mb-4">Accès spa inclus + massage de 60min</p>
              <span className="text-yellow-400 font-bold">Forfait à partir de 125.000 FCFA</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-lg font-semibold text-white mb-2">Réservation Anticipée</h4>
              <p className="text-gray-300 text-sm mb-4">Réservez 30 jours à l'avance</p>
              <span className="text-yellow-400 font-bold">-20% sur toutes les chambres</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
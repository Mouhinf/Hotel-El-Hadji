import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tout Voir' },
    { id: 'rooms', name: 'Chambres' },
    { id: 'restaurant', name: 'Restaurant' },
    { id: 'spa', name: 'Spa' },
    { id: 'exterior', name: 'Extérieurs' },
    { id: 'events', name: 'Événements' }
  ];

  const images = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Vue d\'ensemble de l\'hôtel',
      category: 'exterior',
      title: 'Façade Principale'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Suite Présidentielle',
      category: 'rooms',
      title: 'Suite Présidentielle'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Restaurant Le Teranga',
      category: 'restaurant',
      title: 'Restaurant Le Teranga'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/3772614/pexels-photo-3772614.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Spa et bien-être',
      category: 'spa',
      title: 'Espace Spa'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Suite Junior',
      category: 'rooms',
      title: 'Suite Junior'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Le Baobab Lounge',
      category: 'restaurant',
      title: 'Le Baobab Lounge'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Salle de réception',
      category: 'events',
      title: 'Grande Salle de Réception'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Chambre Deluxe',
      category: 'rooms',
      title: 'Chambre Deluxe'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Soin au spa',
      category: 'spa',
      title: 'Massage Traditionnel'
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Piscine extérieure',
      category: 'exterior',
      title: 'Piscine & Terrasse'
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Salle de conférence',
      category: 'events',
      title: 'Salle de Conférence'
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Chambre Standard',
      category: 'rooms',
      title: 'Chambre Standard'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null && selectedImage < filteredImages.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  return (
    <section id="galerie" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Galerie <span className="text-yellow-600">Photos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez l'élégance et le raffinement de nos espaces à travers cette collection 
            d'images qui révèlent l'âme de l'hôtel El Hadji Ngor.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-yellow-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-yellow-100 hover:text-yellow-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                  <Play className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-medium">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="mt-20 bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Visite <span className="text-yellow-600">Virtuelle</span>
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explorez notre hôtel depuis chez vous grâce à notre visite virtuelle interactive et nos vidéos immersives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Visite virtuelle 360°"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm">
                    <Play className="w-8 h-8 ml-1" />
                  </div>
                  <h4 className="font-semibold text-lg">Visite Virtuelle 360°</h4>
                </div>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Vidéo de présentation"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm">
                    <Play className="w-8 h-8 ml-1" />
                  </div>
                  <h4 className="font-semibold text-lg">Vidéo de Présentation</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={prevImage}
              disabled={selectedImage === 0}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={nextImage}
              disabled={selectedImage === filteredImages.length - 1}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="max-w-4xl max-h-full">
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain"
              />
              <div className="text-center mt-4">
                <h3 className="text-white text-xl font-semibold">
                  {filteredImages[selectedImage].title}
                </h3>
                <p className="text-gray-300 text-sm mt-1">
                  {selectedImage + 1} / {filteredImages.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
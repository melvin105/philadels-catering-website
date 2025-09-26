import { useState } from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    // Cakes
    { id: 1, src: '/assets/Recent7.jpg', alt: 'Cake', category: 'cakes' },
    { id: 2, src: '/assets/cindarella1.jpeg', alt: 'Cake', category: 'cakes' },
    { id: 3, src: '/assets/cindarella2.jpeg', alt: 'Cake', category: 'cakes' },
    { id: 4, src: '/assets/cindarella3.jpeg', alt: 'Cake', category: 'cakes' },
    { id: 5, src: '/assets/hbday1.jpeg', alt: 'Cake', category: 'cakes' },
    { id: 6, src: '/assets/weeding1.jpg', alt: 'Cake', category: 'cakes' },
    { id: 7, src: '/assets/cindarella4.jpg', alt: 'Cake', category: 'cakes' },
    { id: 8, src: '/assets/airplane.jpg', alt: 'Cake', category: 'cakes' },
    { id: 9, src: '/assets/fruit-cake.jpg', alt: 'Cake', category: 'cakes' },
    { id: 10, src: '/assets/bday2.jpg', alt: 'Cake', category: 'cakes' },
    
    // Pastries
    { id: 11, src: '/assets/cindarella5.jpg', alt: 'Pastry', category: 'pastries' },
    { id: 12, src: '/assets/alter.JPG', alt: 'Pastry', category: 'pastries' },
    { id: 13, src: '/assets/weeding2.jpg', alt: 'Pastry', category: 'pastries' },
    { id: 14, src: '/assets/football.jpg', alt: 'Pastry', category: 'pastries' },
    { id: 15, src: '/assets/2years.jpeg', alt: 'Pastry', category: 'pastries' },
    { id: 16, src: '/assets/Recent1.jpg', alt: 'Pastry', category: 'pastries' },
    
    // Decor
    { id: 17, src: '/assets/guitar.jpg', alt: 'Decor', category: 'decor' },
    { id: 18, src: '/assets/graduation.jpg', alt: 'Decor', category: 'decor' },
    { id: 19, src: '/assets/weeding3.jpg', alt: 'Decor', category: 'decor' },
    { id: 20, src: '/assets/graduation2.JPG', alt: 'Decor', category: 'decor' },
    { id: 21, src: '/assets/green-cake.jpg', alt: 'Decor', category: 'decor' },
    { id: 22, src: '/assets/bible-cake.jpg', alt: 'Decor', category: 'decor' },
    { id: 23, src: '/assets/graduation3.jpg', alt: 'Decor', category: 'decor' },
  ];

  const filterGallery = (category: string) => {
    setActiveFilter(category);
  };

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <Layout 
      title="Gallery - Philadels Catering & Decor"
      description="Discover our stunning gallery of exquisite cakes, delightful pastries, and elegant decorations. Browse through our portfolio of beautiful creations for every occasion."
    >
      {/* Hero Section */}
      <section 
        style={{ 
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/allen-rad.jpg')" 
        }}
        className="bg-cover bg-center bg-no-repeat h-[80vh] flex items-center justify-center text-white relative overflow-hidden"
      >
        <div className="container mx-auto px-8 py-32 relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white drop-shadow-2xl tracking-tight mb-4 animate-fade-in-up">
              Our Stunning Creations
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-indigo-100 max-w-2xl mx-auto drop-shadow-md animate-fade-in-up delay-100">
              Discover our exquisite cakes, delightful pastries, and elegant decorations—crafted to make every celebration truly unforgettable.
            </p>
            <a 
              href="#gallery" 
              className="mt-6 inline-block px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-200"
            >
              Explore Now
            </a>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </section>

      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-6 py-4">
        <button 
          className={`px-4 py-2 rounded transition ${
            activeFilter === 'all' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
          onClick={() => filterGallery('all')}
        >
          All
        </button>
        <button 
          className={`px-4 py-2 rounded transition ${
            activeFilter === 'cakes' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
          onClick={() => filterGallery('cakes')}
        >
          Cakes
        </button>
        <button 
          className={`px-4 py-2 rounded transition ${
            activeFilter === 'pastries' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
          onClick={() => filterGallery('pastries')}
        >
          Pastries
        </button>
        <button 
          className={`px-4 py-2 rounded transition ${
            activeFilter === 'decor' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
          onClick={() => filterGallery('decor')}
        >
          Decorations
        </button>
      </div>

      {/* Gallery Grid */}
      <section>
        <div id="gallery" className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className={`gallery-item ${item.category}`}
                style={{ display: 'block' }}
              >
                <Image 
                  src={item.src} 
                  alt={item.alt} 
                  width={300} 
                  height={256} 
                  className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 w-full h-64 object-cover" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;


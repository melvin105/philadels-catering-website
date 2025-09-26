import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoSlideInterval, setAutoSlideInterval] = useState<NodeJS.Timeout | null>(null);

  const testimonials = [
    {
      id: 1,
      name: "Mrs. Joyce Asare Kissi",
      title: "A registered Nutritionist & Dietitian",
      subtitle: "CEO, JAAK Nutrition and Diet Consult",
      image: "/assets/auntie.jpg",
      quote: "In 2015, Philadels transformed our event with a professional cake branded 'the nutritionist choice'. Absolutely outstanding service and attention to detail!"
    },
    {
      id: 2,
      name: "Richard Dunyo",
      title: "Electrician",
      image: "/assets/uncle.jpg",
      quote: "Philadels made my birthday extra special with a cake designed just for me. The taste and creativity were beyond my expectations. Highly recommended!"
    },
    {
      id: 3,
      name: "Annabel Yawlui",
      title: "Student",
      image: "/assets/annabel.jpg",
      quote: "Their attention to detail and creativity made our wedding unforgettable. The cakes were both beautiful and delicious!"
    }
  ];

  const showSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const startAutoSlide = () => {
    const interval = setInterval(nextSlide, 6000);
    setAutoSlideInterval(interval);
  };

  const resetAutoSlide = () => {
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
    }
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
      }
    };
  }, []);

  return (
    <Layout 
      title="Home - Philadels Catering & Decor"
      description="Welcome to Philadels Catering and Deco, where every cake tells a story and every pastry is a masterpiece. Discover our stunning creations that are perfect for any celebration."
    >
      {/* Hero Section */}
      <section 
        className="relative w-full h-screen bg-cover bg-center flex items-center bg-gradient-to-br from-indigo-50 via-white to-pink-50"
        style={{ backgroundImage: "url('/assets/deva-williamson.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/70 via-rose-900/50 to-rose-700/40"></div>

        <div className="relative z-10 flex flex-col justify-center h-full max-w-5xl px-6 mx-auto text-left">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight drop-shadow-lg opacity-0 animate-fade-in-up playfair">
            Indulge in Exquisite <br /> Cakes and Pastries
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-rose-100 drop-shadow opacity-0 animate-fade-in-up delay-200 poppins">
            Welcome to Philadels Catering and Deco, where every cake tells a story
            and every pastry is a masterpiece. Discover our stunning creations
            that are perfect for any celebration.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/gallery"
              className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-rose-500 to-indigo-600 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 opacity-0 animate-fade-in-up delay-300 poppins"
            >
              Explore
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 text-lg font-semibold text-indigo-800 bg-white rounded-full shadow-lg hover:bg-rose-50 hover:text-rose-600 transition-all duration-300 opacity-0 animate-fade-in-up delay-400 poppins"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-white via-pink-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-indigo-700 animate-slide-down">
            Exquisite Cakes Tailored for Special Occasions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition text-center border-t-4 border-pink-200 animate-fade-in delay-200">
              <Image 
                src="/assets/golden-cake.jpg" 
                alt="Beautiful Cakes" 
                width={400} 
                height={192} 
                className="w-full h-48 object-cover rounded-xl mb-4 shadow-md border-2 border-pink-100" 
              />
              <h3 className="text-xl font-bold mb-2 text-pink-700">Beautiful Cakes</h3>
              <p className="text-gray-600 mb-2">Experience the artistry of our stunning cakes, crafted to make every celebration unforgettable.</p>
              <a href="#about" className="text-pink-600 hover:underline font-semibold">Learn More</a>
            </div>
            <div className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition text-center border-t-4 border-indigo-200 animate-fade-in delay-300">
              <Image 
                src="/assets/deco-unsplash.jpg" 
                alt="Deco Artwork" 
                width={400} 
                height={192} 
                className="w-full h-48 object-cover rounded-xl mb-4 shadow-md border-2 border-indigo-100" 
              />
              <h3 className="text-xl font-bold mb-2 text-indigo-700">Deco Artwork</h3>
              <p className="text-gray-600 mb-2">Transform your space with stunning designs for any event.</p>
              <a href="#about" className="text-indigo-600 hover:underline font-semibold">Learn More</a>
            </div>
            <div className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition text-center border-t-4 border-pink-200 animate-fade-in delay-400">
              <Image 
                src="/assets/karly-gomez.jpg" 
                alt="Customer Satisfaction" 
                width={400} 
                height={192} 
                className="w-full h-48 object-cover rounded-xl mb-4 shadow-md border-2 border-pink-100" 
              />
              <h3 className="text-xl font-bold mb-2 text-pink-700">Customer Satisfaction</h3>
              <p className="text-gray-600 mb-2">Exceptional service and delicious creations to exceed expectations.</p>
              <a href="#about" className="text-pink-600 hover:underline font-semibold">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6 text-pink-700 animate-slide-down">
            Delight in Every Occasion
          </h2>
          <p className="text-lg text-center mb-10 max-w-2xl mx-auto text-gray-700 animate-fade-in delay-200">
            At Philadel's Catering and Deco, we specialize in custom cakes and decor that reflect your unique vision.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition animate-pop-in delay-200">
              <i className="fas fa-cake-candles text-5xl text-pink-500 mb-4"></i>
              <h3 className="font-bold text-xl mb-2 text-indigo-700">Tailored Cake Designs</h3>
              <p className="text-gray-600">Custom cakes for your special moments.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition animate-pop-in delay-300">
              <i className="fas fa-star text-5xl text-yellow-400 mb-4"></i>
              <h3 className="font-bold text-xl mb-2 text-indigo-700">Premium Ingredients</h3>
              <p className="text-gray-600">Unforgettable flavors in every bite.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition animate-pop-in delay-400">
              <i className="fas fa-paint-brush text-5xl text-pink-500 mb-4"></i>
              <h3 className="font-bold text-xl mb-2 text-indigo-700">Artistic Decor</h3>
              <p className="text-gray-600">Transform your event with creative decor.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-pink-500 to-indigo-600 text-white px-10 py-4 rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300 font-semibold text-lg shadow-lg animate-pop-in delay-500"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-indigo-50 to-white border-t border-b border-indigo-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-indigo-700 mb-4">What Our Clients Say</h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            Discover how Philadels Catering and Deco has made celebrations unforgettable for our clients.
          </p>
          <div className="relative max-w-5xl mx-auto">
            <div id="testimonial-slider" className="relative w-full overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`slide flex flex-col md:flex-row items-center md:items-center gap-2 md:gap-4 w-full px-4 sm:px-12 ${
                    index === currentSlide ? 'active' : ''
                  }`}
                  style={{ display: index === currentSlide ? 'flex' : 'none' }}
                >
                  <div className="flex-shrink-0 flex justify-center md:justify-start basis-1/3">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      width={192} 
                      height={256} 
                      className="w-48 h-64 object-cover rounded-3xl shadow-lg border-4 border-pink-200" 
                    />
                  </div>
                  <div className="flex-1 text-left basis-2/3">
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star text-yellow-400"></i>
                      ))}
                    </div>
                    <blockquote className="text-xl text-gray-700 italic mb-4 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <span className="font-semibold text-indigo-700">{testimonial.name}</span>
                      <span className="block text-gray-400 text-sm">
                        {testimonial.title}
                        {testimonial.subtitle && <><br />{testimonial.subtitle}</>}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Navigation Buttons */}
              <button 
                onClick={() => { prevSlide(); resetAutoSlide(); }}
                aria-label="Previous testimonial" 
                className="absolute top-1/2 left-0 -translate-y-1/2 bg-pink-600 text-white p-3 rounded-full shadow hover:bg-pink-700 focus:outline-none transition z-10"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button 
                onClick={() => { nextSlide(); resetAutoSlide(); }}
                aria-label="Next testimonial" 
                className="absolute top-1/2 right-0 -translate-y-1/2 bg-pink-600 text-white p-3 rounded-full shadow hover:bg-pink-700 focus:outline-none transition z-10"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
            {/* Dots */}
            <div className="flex justify-center mt-6 space-x-3">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => { showSlide(index); resetAutoSlide(); }}
                  className={`testimonial-dot w-4 h-4 rounded-full border-2 transition ${
                    index === currentSlide 
                      ? 'bg-indigo-200 border-indigo-400' 
                      : 'bg-indigo-100 border-indigo-200'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-br from-pink-50 via-white to-indigo-100 py-20 flex items-center border-t border-indigo-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-pink-700 mb-6 animate-slide-down">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in delay-200">
            Have questions or want to book our services? We're here to help!
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-indigo-600 text-white rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 font-semibold text-lg animate-pop-in delay-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;


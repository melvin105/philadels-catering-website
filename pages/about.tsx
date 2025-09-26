import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout 
      title="About Us - Philadels Catering & Decor"
      description="Learn about Philadels Catering & Decor, our mission, and meet Rebecca Afi Dunyo, the creative force behind our exquisite cakes and decorations."
    >
      {/* Hero Section */}
      <section 
        className="relative bg-center bg-cover h-[70vh] md:h-[80vh] lg:h-[90vh] flex items-center justify-center" 
        style={{ backgroundImage: "url('/assets/deco-unsplash.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/70 via-pink-700/40 to-indigo-900/60"></div>
        <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center text-white text-center relative z-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 drop-shadow-2xl tracking-tight animate-fade-in-up">
            Our Story
          </h1>
          <p className="text-xl md:text-3xl lg:text-4xl font-semibold max-w-3xl mx-auto drop-shadow-lg mb-8 animate-fade-in-up delay-100">
            Bringing creativity and flavor to life, one event at a time.
          </p>
          <span className="inline-block w-24 h-1 bg-pink-400 rounded-full mb-4 animate-fade-in-up delay-200"></span>
          <a href="#about" className="inline-block mt-4 bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300 animate-fade-in-up delay-300">
            Learn More
          </a>
        </div>
      </section>

      {/* About Us Content */}
      <section className="py-20 bg-gradient-to-r from-white via-indigo-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            {/* Image */}
            <div className="flex justify-center">
              <div className="relative group">
                <Image 
                  src="/assets/weeding1.jpg" 
                  alt="About Us" 
                  width={320} 
                  height={384} 
                  className="rounded-2xl shadow-2xl w-80 h-96 object-cover border-4 border-indigo-100 group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 px-6 py-2 rounded-xl shadow-lg text-center">
                  <span className="text-indigo-700 font-bold">Crafting Memories</span>
                </div>
              </div>
            </div>
            {/* Text Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-4 drop-shadow">Who We Are</h2>
              <div className="w-16 h-1 bg-pink-400 rounded mb-6"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                At <span className="font-semibold text-indigo-600">Philadel's Catering & Deco</span>, every event is a canvas for creativity and joy. I blend culinary artistry with elegant decor to transform your celebrations into cherished memories.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                With a foundation rooted in passion and years of experience, I specialize in crafting exquisite cakes, personalized menus, and breathtaking event designs. My approach is hands-on and heart-driven—ensuring each detail reflects your unique story and style.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Whether it's an intimate gathering or a grand celebration, I am dedicated to exceeding your expectations with exceptional service, innovative ideas, and a genuine love for what I do. Let's create something unforgettable together.
              </p>
              <Link href="/contact" className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold shadow transition">
                Let's Connect
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 via-white to-indigo-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-6 drop-shadow">
              My Mission
            </h2>
            <p className="mt-4 text-gray-700 text-lg md:text-xl leading-relaxed">
              To create exceptional culinary and decor experiences that leave lasting impressions, 
              while ensuring sustainability and community engagement in everything I do.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission Pillar 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition">
              <div className="bg-indigo-100 p-4 rounded-full mb-4">
                <i className="ri-cake-3-line text-3xl text-indigo-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">Culinary Excellence</h3>
              <p className="text-gray-600">
                I strive to deliver delicious, beautifully presented dishes using the finest ingredients, blending tradition with innovation for every event.
              </p>
            </div>
            {/* Mission Pillar 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition">
              <div className="bg-indigo-100 p-4 rounded-full mb-4">
                <i className="ri-leaf-line text-3xl text-green-500"></i>
              </div>
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">Sustainability</h3>
              <p className="text-gray-600">
                I am committed to eco-friendly practices, sourcing locally whenever possible and minimizing waste to protect our environment.
              </p>
            </div>
            {/* Mission Pillar 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition">
              <div className="bg-indigo-100 p-4 rounded-full mb-4">
                <i className="ri-community-line text-3xl text-pink-500"></i>
              </div>
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">Community Engagement</h3>
              <p className="text-gray-600">
                Giving back is at the heart of my mission—supporting local causes, empowering others, and building lasting relationships within the community.
              </p>
            </div>
          </div>
          <div className="mt-12 max-w-2xl mx-auto text-center">
            <blockquote className="italic text-indigo-800 text-lg border-l-4 border-pink-400 pl-4">
              "Every event is an opportunity to create joy, foster connection, and make a positive impact—one plate, one smile, one memory at a time."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-100 via-white to-pink-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            {/* Text Content */}
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-6 drop-shadow">
                Meet <span className="text-pink-500">Rebecca Afi Dunyo</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                Rebecca Afi Dunyo is the heart behind <span className="font-semibold text-indigo-600">Philadel's Catering & Deco</span>.
                With years of experience in culinary arts and event design, she brings creativity and elegance to every project.
                Her passion for crafting delicious menus and stunning decor ensures every event is truly unforgettable.
              </p>
              <div className="flex items-center gap-4 mt-4">
                <span className="inline-block w-12 h-1 bg-pink-400 rounded"></span>
                <span className="text-indigo-700 font-semibold tracking-wide">Founder & Creative Director</span>
              </div>
            </div>
            {/* Image */}
            <div className="md:w-1/2 flex justify-center">
              <div className="relative group">
                <Image 
                  src="/assets/mum.jpg" 
                  alt="Rebecca Afi Dunyo" 
                  width={288} 
                  height={384} 
                  className="rounded-2xl shadow-2xl w-72 h-96 object-cover border-4 border-white group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 px-6 py-2 rounded-xl shadow-lg text-center">
                  <span className="text-indigo-700 font-bold">Rebecca Afi Dunyo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 via-white to-pink-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-indigo-700 mb-12 drop-shadow">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Catering */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition group p-8 flex flex-col items-center">
              <div className="relative w-40 h-40 mb-6">
                <Image 
                  src="/assets/catering.jpeg" 
                  alt="Catering" 
                  width={160} 
                  height={160} 
                  className="w-full h-full object-cover rounded-full border-4 border-pink-200 group-hover:scale-105 transition-transform duration-300 shadow-lg" 
                />
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-pink-500 text-white px-4 py-1 rounded-full text-xs font-semibold shadow">Catering</span>
              </div>
              <h3 className="text-2xl font-bold text-indigo-700 mb-2">Catering</h3>
              <p className="text-gray-600 text-center mb-4">
                Delicious, customized menus for every occasion—crafted with passion and the freshest ingredients.
              </p>
              <Link href="/contact" className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-full font-semibold shadow transition">
                Book Now
              </Link>
            </div>
            {/* Decorations */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition group p-8 flex flex-col items-center">
              <div className="relative w-40 h-40 mb-6">
                <Image 
                  src="/assets/deco-unsplash.jpg" 
                  alt="Decorations" 
                  width={160} 
                  height={160} 
                  className="w-full h-full object-cover rounded-full border-4 border-indigo-200 group-hover:scale-105 transition-transform duration-300 shadow-lg" 
                />
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white px-4 py-1 rounded-full text-xs font-semibold shadow">Decor</span>
              </div>
              <h3 className="text-2xl font-bold text-indigo-700 mb-2">Decorations</h3>
              <p className="text-gray-600 text-center mb-4">
                Elegant, creative decor that transforms your event into a stunning, memorable experience.
              </p>
              <Link href="/gallery" className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-full font-semibold shadow transition">
                See Gallery
              </Link>
            </div>
            {/* Cakes */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition group p-8 flex flex-col items-center">
              <div className="relative w-40 h-40 mb-6">
                <Image 
                  src="/assets/courtney-cook.jpg" 
                  alt="Cakes" 
                  width={160} 
                  height={160} 
                  className="w-full h-full object-cover rounded-full border-4 border-pink-200 group-hover:scale-105 transition-transform duration-300 shadow-lg" 
                />
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-pink-500 text-white px-4 py-1 rounded-full text-xs font-semibold shadow">Cakes</span>
              </div>
              <h3 className="text-2xl font-bold text-indigo-700 mb-2">Cakes</h3>
              <p className="text-gray-600 text-center mb-4">
                Exquisite cakes tailored to your taste and style—perfect for every celebration.
              </p>
              <Link href="/contact" className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-full font-semibold shadow transition">
                Order Cake
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Innovation Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 via-white to-pink-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <Image 
              src="/assets/cindarella1.jpeg" 
              alt="Innovation" 
              width={320} 
              height={384} 
              className="rounded-2xl shadow-2xl w-80 h-96 object-cover border-4 border-indigo-100 hover:scale-105 transition-transform duration-300" 
            />
          </div>
          {/* Text Content */}
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-4 drop-shadow">Innovation</h2>
            <div className="w-16 h-1 bg-pink-400 rounded mb-6"></div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              With a strong foundation in culinary arts and hospitality, I am committed to staying at the forefront of culinary trends and innovations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Inspired by global design, travel, and diverse cultures, I constantly refine my offerings to ensure every dish and detail reflects the pinnacle of creativity and flavor.
            </p>
          </div>
        </div>
      </section>

      {/* Personalization Section */}
      <section className="py-20 bg-gradient-to-r from-pink-50 via-white to-indigo-50">
        <div className="container mx-auto flex flex-col md:flex-row-reverse items-center gap-12 px-6">
          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <Image 
              src="/assets/Recent7.jpg" 
              alt="Personalization" 
              width={320} 
              height={384} 
              className="rounded-2xl shadow-2xl w-80 h-96 object-cover border-4 border-pink-100 hover:scale-105 transition-transform duration-300" 
            />
          </div>
          {/* Text Content */}
          <div className="md:w-1/2 md:pr-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-pink-500 mb-4 drop-shadow">Personalization</h2>
            <div className="w-16 h-1 bg-indigo-400 rounded mb-6"></div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Every client and every event is unique, which is why I take the time to truly understand your vision. Whether you have a clear idea of what you want or need guidance to bring your dream to life, I work closely with you to create a one-of-a-kind experience.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Instead of overwhelming you with endless options, I present thoughtfully crafted, personalized selections rooted in local and regional culinary traditions, ensuring your event feels both special and authentic.
            </p>
          </div>
        </div>
      </section>

      {/* Passion Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 via-white to-pink-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center">
              <Image 
                src="/assets/2years.jpeg" 
                alt="Our Passion" 
                width={320} 
                height={384} 
                className="rounded-2xl shadow-2xl w-80 h-96 object-cover border-4 border-pink-100 hover:scale-105 transition-transform duration-300" 
              />
            </div>
            {/* Text Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-4 drop-shadow">Passion</h2>
              <div className="w-16 h-1 bg-pink-400 rounded mb-6"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                I'm deeply committed to every detail, no matter how small. From the presentation and quality of the food to the overall guest experience, I strive for perfection in every aspect.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My focus is on delivering impeccable flavors, inventive presentations, and seamless execution. My goal is to consistently exceed your expectations, ensuring your event is not only memorable but truly unforgettable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;


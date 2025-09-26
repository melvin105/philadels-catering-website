import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      id="navbar" 
      className={`px-4 fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-indigo-900/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent shadow-none backdrop-blur-none'
      }`}
    >
      <nav className="container flex items-center justify-between h-16 sm:h-20 mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-3 lg:gap-3">
          <Image 
            src="/assets/logo.png" 
            alt="Philadel's Logo" 
            width={56} 
            height={56} 
            className="h-12 sm:h-14 w-auto" 
          />
          <span className="text-xl sm:text-3xl font-extrabold text-white tracking-wide drop-shadow-lg playfair leading-tight">
            <span className="inline sm:hidden">Philadels<br />Catering & Decor</span>
            <span className="hidden sm:inline">Philadels Catering & Decor</span>
          </span>
        </div>

        {/* Navigation Menu */}
        <div 
          id="nav-menu"
          className={`absolute top-0 min-h-[100vh] w-full bg-indigo-900/95 backdrop-blur-md
          flex flex-col items-center justify-center duration-500 ease-in-out lg:static lg:min-h-fit lg:w-auto lg:flex-row lg:flex 
          lg:bg-transparent lg:backdrop-blur-none ${
            isMenuOpen ? 'left-0' : 'left-[-100%]'
          }`}
        >
          {/* Mobile Logo */}
          <div className="mb-8 flex flex-col items-center lg:hidden">
            <Image 
              src="/assets/logo.png" 
              alt="Philadel's Logo" 
              width={80} 
              height={80} 
              className="h-20 w-auto mb-2" 
            />
            <span className="text-xl font-extrabold text-white tracking-wide playfair text-center leading-tight">
              Philadels<br />Catering & Decor
            </span>
          </div>

          <ul className="flex flex-col items-center gap-10 lg:flex-row text-white font-medium text-lg lg:text-white lg:drop-shadow poppins">
            <li>
              <Link href="/" className="nav-link lg:hover:text-rose-300 transition duration-300" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="nav-link lg:hover:text-rose-300 transition duration-300" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="nav-link lg:hover:text-rose-300 transition duration-300" onClick={closeMenu}>
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="nav-link lg:hover:text-rose-300 transition duration-300" onClick={closeMenu}>
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Social Icons (Mobile Only) */}
          <div className="flex flex-col items-center mt-10 text-white lg:hidden">
            <div className="flex gap-6 text-2xl mb-4">
              <a href="https://www.facebook.com/Tarababane" className="hover:text-rose-300 transition duration-300">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="https://www.instagram.com/philadelscatering/?__pwa=1#" className="hover:text-rose-300 transition duration-300">
                <i className="ri-instagram-fill"></i>
              </a>
              <a href="http://tiktok.com/@philadelscatering" className="hover:text-rose-300 transition duration-300">
                <i className="ri-tiktok-fill"></i>
              </a>
              <a href="https://www.linkedin.com/in/becky-dunyo-46b853186/" className="hover:text-rose-300 transition duration-300">
                <i className="ri-linkedin-fill"></i>
              </a>
            </div>

            <p className="mt-3 text-xs poppins">
              Site & Design By
              <a href="https://portfolio-site-pi-sable.vercel.app/" className="text-rose-200 underline hover:text-rose-300 transition duration-300">
                Melvin Kwaku Yawlui
              </a>
            </p>
          </div>
        </div>

        {/* Hamburger Icon */}
        <div 
          className="text-2xl sm:text-4xl cursor-pointer z-50 lg:hidden text-white drop-shadow-lg"
          onClick={toggleMenu}
        >
          <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;


import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Philadels Catering & Decor</h3>
          <p className="text-gray-400">Exquisite cakes and decor for every occasion.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-pink-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-pink-600 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-pink-600 transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-pink-600 transition">
                Gallery
              </Link>
            </li>
            <li>
              <a href="/#testimonials" className="hover:text-pink-600 transition">
                Testimonials
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <ul className="space-y-2">
            <li>
              <a href="https://www.facebook.com/Tarababane" className="hover:text-pink-600 transition">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/philadelscatering/?__pwa=1#" className="hover:text-pink-600 transition">
                Instagram
              </a>
            </li>
            <li>
              <a href="http://tiktok.com/@philadelscatering" className="hover:text-pink-600 transition">
                TikTok
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/becky-dunyo-46b853186/" className="hover:text-pink-600 transition">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
          <form 
            name="newsletter" 
            method="POST" 
            data-netlify="true" 
            data-netlify-honeypot="bot-field"
            className="mb-4"
          >
            <input type="hidden" name="form-name" value="newsletter" />
            <input 
              type="email" 
              name="email" 
              placeholder="Your email" 
              className="p-2 w-full border rounded-md mb-2 text-gray-800 bg-white" 
              required 
            />
            <button 
              type="submit" 
              className="bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition"
            >
              Subscribe
            </button>
          </form>
          <p className="text-gray-400 text-sm">
            By subscribing, you agree to our <a href="#" className="hover:text-pink-600">Privacy Policy</a> and consent to receive updates.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 text-center text-gray-400">
        <p>© 2025 Philadels Catering & Decor</p>
        <p className="mt-2">
          All rights reserved. Thank you for supporting Philadels Catering & Decor!
        </p>
        <p className="mt-2">
          Site & Design By <a href="https://portfolio-site-pi-sable.vercel.app/" className="hover:text-pink-600">Melvin Kwaku Yawlui</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;


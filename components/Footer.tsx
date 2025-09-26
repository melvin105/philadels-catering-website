import Link from 'next/link';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append('form-name', 'newsletter');
      formData.append('email', email);
      formData.append('bot-field', ''); // honeypot field

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setEmail('');
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            onSubmit={handleNewsletterSubmit}
            className="mb-4"
          >
            <input type="hidden" name="form-name" value="newsletter" />
            <div style={{ display: 'none' }}>
              <input name="bot-field" />
            </div>
            <input 
              type="email" 
              name="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email" 
              className="p-2 w-full border rounded-md mb-2 text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-pink-500" 
              required 
              disabled={isSubmitting}
            />
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition disabled:opacity-50 disabled:cursor-not-allowed w-full"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mb-2 p-2 bg-green-600 text-white text-sm rounded">
              ✓ Successfully subscribed! Thank you for joining us.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mb-2 p-2 bg-red-600 text-white text-sm rounded">
              ✗ Something went wrong. Please try again.
            </div>
          )}
          
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

